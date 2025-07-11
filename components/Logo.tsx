import { useId } from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  const gradientId = useId();
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 梯度定义 */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      
      {/* 背景圆角矩形 */}
      <rect 
        width="32" 
        height="32" 
        rx="8" 
        fill={`url(#${gradientId})`}
      />
      
      {/* 字母S的现代化设计，结合数据可视化元素 */}
      <g fill="white">
        {/* S字母的上半部分 */}
        <path d="M10 10h8c2 0 4 1.5 4 3.5s-2 3.5-4 3.5h-4" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              fill="none"/>
        
        {/* S字母的下半部分 */}
        <path d="M22 22h-8c-2 0-4-1.5-4-3.5s2-3.5 4-3.5h4" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              fill="none"/>
        
        {/* 可视化数据点 */}
        <circle cx="24" cy="12" r="1.5" />
        <circle cx="8" cy="20" r="1.5" />
        <circle cx="16" cy="16" r="1" opacity="0.8" />
      </g>
    </svg>
  );
} 