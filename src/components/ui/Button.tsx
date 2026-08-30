import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost';
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
  
  const baseStyles = "relative font-bold uppercase tracking-wide transition-all rounded-2xl active:translate-y-[4px] active:border-b-0 active:mt-[4px]";
  
  const variants = {
    primary: "bg-[#00F0FF] hover:bg-[#00D0DD] text-black border-b-4 border-[#009A99] shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]",
    success: "bg-[#00FF66] hover:bg-[#00CC52] text-black border-b-4 border-[#00993D] shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_25px_rgba(0,255,102,0.4)]",
    danger: "bg-[#FF4B4B] hover:bg-[#CC3C3C] text-white border-b-4 border-[#992D2D] shadow-[0_0_15px_rgba(255,75,75,0.2)] hover:shadow-[0_0_25px_rgba(255,75,75,0.4)]",
    secondary: "bg-[#1A1A24] hover:bg-[#252533] text-gray-500 border-b-4 border-black/50 shadow-[0_4px_15px_rgba(0,0,0,0.5)]",
    outline: "bg-[#0D0814] border-2 border-b-4 border-white/20 text-gray-300 hover:bg-white/10 active:bg-white/5",
    ghost: "bg-transparent text-gray-400 hover:bg-white/10 hover:text-white active:translate-y-0 active:border-b-0 active:mt-0 font-medium"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        fullWidth && "w-full",
        props.disabled && "opacity-50 cursor-not-allowed active:translate-y-0 active:border-b-4 active:mt-0",
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
