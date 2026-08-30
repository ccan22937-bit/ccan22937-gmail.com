import React from 'react';

export function TreasureChest({ className, size = 64 }: { className?: string, size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="32" width="48" height="24" rx="2" fill="#EAB308" />
      <path d="M8 32C8 20.9543 16.9543 12 28 12H36C47.0457 12 56 20.9543 56 32V32H8V32Z" fill="#FACC15" />
      <rect x="8" y="38" width="48" height="4" fill="#CA8A04" />
      <rect x="8" y="48" width="48" height="4" fill="#CA8A04" />
      <rect x="24" y="24" width="16" height="18" rx="2" fill="#FDE047" />
      <path d="M32 30C30.3431 30 29 31.3431 29 33C29 34.2024 29.7067 35.24 30.7324 35.7236L30 39H34L33.2676 35.7236C34.2933 35.24 35 34.2024 35 33C35 31.3431 33.6569 30 32 30Z" fill="#A16207" />
      <rect x="14" y="12" width="6" height="44" fill="#FDE047" />
      <rect x="44" y="12" width="6" height="44" fill="#FDE047" />
    </svg>
  );
}
