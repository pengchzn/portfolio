'use client';

import { useTheme } from '@/app/context/ThemeContext';
import AnimatedSection from './AnimatedSection';

export default function GithubSnake() {
  const { theme } = useTheme();
  
  return (
    <AnimatedSection className="w-full py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">GitHub Contributions</h2>
      <div className="flex justify-center">
        <img 
          src={`/github-snake-${theme}.svg`}
          alt="GitHub contribution snake graph"
          className="max-w-full h-auto"
          loading="lazy"
        />
      </div>
    </AnimatedSection>
  );
}
