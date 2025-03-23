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

const shouldBeWhite = (hex: string, _slug: string, isDarkMode: boolean) => {
  // If not in dark mode, keep original color
  if (!isDarkMode) return false;

  try {
    // Remove # prefix if present and ensure hex is 6 digits
    const fullHex = hex.replace('#', '').padStart(6, '0');
    
    // Convert hex to RGB
    const r = parseInt(fullHex.slice(0, 2), 16);
    const g = parseInt(fullHex.slice(2, 4), 16);
    const b = parseInt(fullHex.slice(4, 6), 16);
    
    // Using HSP (Highly Sensitive Perceived Brightness) formula
    // √(0.299*R² + 0.587*G² + 0.114*B²)
    const brightness = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
    
    // Threshold adjusted to 50 (0-255 range)
    return brightness < 50;
  } catch (e) {
    console.error(`Error checking color for hex: ${hex}`, e);
    return false;
  }
};

const renderCustomIcon = (icon: SimpleIcon, isDarkMode: boolean) => {
  // Clone icon object
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

  // Wait for client-side rendering to complete
  useEffect(() => {
    // Override default simple-icons data source
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      const url = input.toString();
      
      // Redirect all jsdelivr related requests to fastly
      if (url.includes('jsdelivr.net') || url.includes('raw.githubusercontent.com/simple-icons')) {
        const cdnUrl = url.includes('raw.githubusercontent.com/simple-icons')
          ? 'https://fastly.jsdelivr.net/gh/simple-icons/simple-icons@14.0.0/_data/simple-icons.json'
          : url.replace('cdn.jsdelivr.net', 'fastly.jsdelivr.net');
        
        return originalFetch(cdnUrl, init);
      }

      return originalFetch(input, init);
    };

    setMounted(true);

    // Cleanup function, restore original fetch
    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  // Ensure at least 12 icons
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

  // Wait for mounting to complete
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
