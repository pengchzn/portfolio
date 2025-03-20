"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 1.5,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    radiusX: 0.7,
    radiusY: 0.7,
    radiusZ: 0.7,
    stretchX: 1,
    stretchY: 1,
    offsetX: 0,
    offsetY: 0,
    shuffleTags: true,
    noSelect: true,
    noMouse: false,
    dragControl: true,
  },
};

// 已知的深色图标列表（使用准确的 simple-icons slug）
const forceDarkIcons = new Set([
  'github',
  'nextdotjs',
  'vercel',
  'vscode',
  'ios',
  'apple',
  'playstation',
  'plasma',
  'figma',
  'xcode',
  'swift'
]);

const shouldBeWhite = (hex: string, slug: string, isDarkMode: boolean) => {
  // 如果不是深色模式，保持原始颜色
  if (!isDarkMode) return false;

  // 检查是否在强制深色图标列表中
  if (forceDarkIcons.has(slug)) {
    return true;
  }

  try {
    // 确保hex是6位
    const fullHex = hex.padStart(6, '0');
    
    // 将hex转换为RGB
    const r = parseInt(fullHex.slice(0, 2), 16);
    const g = parseInt(fullHex.slice(2, 4), 16);
    const b = parseInt(fullHex.slice(4, 6), 16);
    
    // 使用HSP (Highly Sensitive Perceived Brightness) 公式
    // √(0.299*R² + 0.587*G² + 0.114*B²)
    const brightness = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
    
    // 阈值调整为 130 (0-255 范围)
    return brightness < 130;
  } catch (e) {
    console.error(`Error checking color for hex: ${hex}`, e);
    return false;
  }
};

const renderCustomIcon = (icon: SimpleIcon, isDarkMode: boolean) => {
  // 复制图标对象
  const iconToRender = { ...icon };
  const makeWhite = shouldBeWhite(icon.hex, icon.slug, isDarkMode);
  
  if (makeWhite) {
    iconToRender.hex = "FFFFFF";
  }

  return renderSimpleIcon({
    icon: iconToRender,
    bgHex: isDarkMode ? "#080510" : "#f3f2ef",
    size: 48,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    }
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // 等待客户端渲染完成
  useEffect(() => {
    setMounted(true);
  }, []);

  // 确保至少有12个图标
  const extendedSlugs = useMemo(() => {
    if (iconSlugs.length >= 12) return iconSlugs;
    const fillerIcons = [
      "html5", "css3", "javascript", "typescript", "react", "nodejs", "git", "github",
      "vscode", "npm", "yarn", "webpack", "babel", "sass", "tailwindcss", "postgresql"
    ];
    const needed = 12 - iconSlugs.length;
    const fillers = fillerIcons.slice(0, needed).filter(filler => !iconSlugs.includes(filler));
    return [...iconSlugs, ...fillers];
  }, [iconSlugs]);

  useEffect(() => {
    fetchSimpleIcons({ slugs: extendedSlugs }).then(setData);
  }, [extendedSlugs]);

  // 等待挂载完成
  if (!mounted) return null;

  const isDarkMode = theme === "dark";
  const renderedIcons = data
    ? Object.values(data.simpleIcons).map(icon => renderCustomIcon(icon, isDarkMode))
    : null;

  return (
    <div className="w-full aspect-square">
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  );
}
