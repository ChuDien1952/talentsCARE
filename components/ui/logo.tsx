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
      care: 'text-[#FDB927]', // Brighter golden yellow
      tagline: 'text-white/70',
    },
    dark: {
      talents: 'text-gray-700', // Lighter gray for better readability
      care: 'text-[#FDB927]', // Brighter golden yellow
      tagline: 'text-gray-500',
    },
  };

  return (
    <Link href="/" className="group inline-block">
      <div className="flex flex-col items-start gap-0">
        {/* Logo Text - Lowercase "talents" + Uppercase "CARE" with connected CA */}
        <div className={`font-sans leading-none ${sizeClasses[size]}`} style={{ letterSpacing: '0.01em' }}>
          <span className={`${colors[variant].talents}`} style={{ fontWeight: 300 }}>
            talents
          </span>
          <span className={`${colors[variant].care} relative inline-block`} style={{ fontWeight: 700, fontStyle: 'italic' }}>
            CARE
          </span>
        </div>

        {/* Tagline */}
        {showTagline && (
          <span
            className={`mt-0.5 font-sans ${taglineSizeClasses[size]} ${colors[variant].tagline} transition-opacity group-hover:opacity-70`}
            style={{ fontWeight: 300, letterSpacing: '0.03em' }}
          >
            Your Talents, We care
          </span>
        )}
      </div>
    </Link>
  );
}
