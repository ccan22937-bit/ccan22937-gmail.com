import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  children,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "relative font-extrabold uppercase tracking-wider transition-all select-none rounded-2xl cursor-pointer flex items-center justify-center gap-2 active:translate-y-[4px] active:shadow-none";
  
  const variants = {
    primary: "bg-[#58cc02] hover:bg-[#46a302] text-white shadow-[0_4px_0_0_#3e8e02] border-t border-white/25",
    success: "bg-[#58cc02] hover:bg-[#46a302] text-white shadow-[0_4px_0_0_#3e8e02] border-t border-white/25",
    danger: "bg-[#ff4b4b] hover:bg-[#ea3e3e] text-white shadow-[0_4px_0_0_#d32f2f] border-t border-white/20",
    warning: "bg-[#ffc800] hover:bg-[#e6b400] text-amber-950 shadow-[0_4px_0_0_#cc9a00] border-t border-white/30",
    secondary: "bg-[#f1f5f9] hover:bg-[#e2e8f0] text-gray-700 shadow-[0_4px_0_0_#cbd5e1] border border-gray-200",
    outline: "bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 shadow-[0_4px_0_0_#e2e8f0]",
    ghost: "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900 active:translate-y-0 active:shadow-none font-bold"
  };

  const sizes = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4.5 text-base"
  };

  return (
    <button 
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        fullWidth && "w-full",
        props.disabled && "opacity-50 cursor-not-allowed bg-gray-200 text-gray-400 shadow-none border-0 active:translate-y-0 active:shadow-none pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Wrap in motion for animations if needed
export const MotionButton = motion(Button as any);

