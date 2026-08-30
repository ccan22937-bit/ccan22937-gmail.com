import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-4 relative overflow-hidden", className)}>
      <motion.div 
        className="absolute top-0 left-0 bottom-0 bg-[#58cc02] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="absolute top-1 left-2 right-2 h-1 bg-white/30 rounded-full" />
      </motion.div>
    </div>
  );
}
