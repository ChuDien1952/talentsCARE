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
    sm: 'text-[0.45rem]',
    md: 'text-[0.5rem]',
    lg: 'text-[0.6rem]',
  };

  const colors = {
    light: {
      talents: 'text-white',
      care: 'text-[#F4C430]', // Golden yellow matching reference
      tagline: 'text-white/80',
    },
    dark: {
      talents: 'text-[#1a1a2e]', // Dark navy blue matching reference
      care: 'text-[#F4C430]', // Golden yellow
      tagline: 'text-gray-600',
    },
  };

  return (
    <Link href="/" className="group inline-block">
      <div className="flex flex-col items-start gap-0.5">
        {/* Logo Text - Lowercase "talents" + Uppercase "CARE" */}
        <div className={`font-sans font-light tracking-tight leading-none ${sizeClasses[size]}`}>
          <span className={colors[variant].talents}>talents</span>
          <span className={`font-bold ${colors[variant].care}`}>CARE</span>
        </div>

        {/* Tagline */}
        {showTagline && (
          <span
            className={`font-sans font-light tracking-wide leading-tight ${taglineSizeClasses[size]} ${colors[variant].tagline} transition-opacity group-hover:opacity-70`}
          >
            Your Talents, We care
          </span>
        )}
      </div>
    </Link>
  );
}
