/**
 * talentsCARE Logo Component
 * Logo with tagline "Your Talents, We Care"
 */

'use client';

import { Link } from '@/lib/i18n/navigation';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', size = 'md', showTagline = true }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const taglineSizeClasses = {
    sm: 'text-[0.5rem]',
    md: 'text-[0.625rem]',
    lg: 'text-xs',
  };

  const colors = {
    light: {
      talents: 'text-white',
      care: 'text-yellow-400',
      tagline: 'text-white/80',
    },
    dark: {
      talents: 'text-dark',
      care: 'text-yellow-500',
      tagline: 'text-text-body',
    },
  };

  return (
    <Link href="/" className="group inline-block">
      <div className="flex flex-col items-start">
        {/* Logo Text */}
        <div className={`font-display font-light tracking-tight ${sizeClasses[size]}`}>
          <span className={colors[variant].talents}>talents</span>
          <span className={`font-bold ${colors[variant].care}`}>CARE</span>
        </div>

        {/* Tagline */}
        {showTagline && (
          <span
            className={`font-sans font-normal tracking-wide ${taglineSizeClasses[size]} ${colors[variant].tagline} transition-opacity group-hover:opacity-70`}
          >
            Your Talents, We Care
          </span>
        )}
      </div>
    </Link>
  );
}
