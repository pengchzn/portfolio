'use client';

import { useTheme } from '@/app/context/ThemeContext';
import AnimatedSection from './AnimatedSection';

export default function GithubSnake() {
  const { theme } = useTheme();
  
  return (
    <AnimatedSection className="w-full py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">GitHub贡献</h2>
      <div className="flex justify-center">
        <img 
          src={`/github-snake-${theme}.svg`}
          alt="GitHub贡献蛇图"
          className="max-w-full h-auto"
          loading="lazy"
        />
      </div>
    </AnimatedSection>
  );
}
