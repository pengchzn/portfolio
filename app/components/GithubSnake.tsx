'use client';

import { useTheme } from 'next-themes';
import { useConfig } from '@/app/context/ConfigContext';
import AnimatedSection from './AnimatedSection';

export default function GithubSnake() {
  const { theme, resolvedTheme } = useTheme();
  const config = useConfig();
  
  if (!config.githubSnake?.enabled) return null;

  const username = config.githubSnake.username;
  
  return (
    <AnimatedSection className="w-full py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">GitHub Contributions</h2>
      <div className="w-full overflow-hidden rounded-lg p-4">
        <div className="relative flex justify-center bg-gradient-to-r from-blue-500/5 to-green-500/5 hover:from-blue-500/10 hover:to-green-500/10 transition-all duration-300 p-4 rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={`/github-snake-${resolvedTheme}.svg`}
            alt="GitHub贡献蛇图"
            className="max-w-full h-auto"
            loading="lazy"
            onError={(e) => {
              // 如果特定主题的图片加载失败，尝试加载默认图片
              const img = e.target as HTMLImageElement;
              if (!img.src.includes('github-snake.svg')) {
                img.src = '/github-snake.svg';
              }
            }}
          />
          <div className="absolute bottom-2 right-4 text-xs text-gray-500">
            <p>每日自动更新</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
