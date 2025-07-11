interface LogoProps {
  showText?: boolean;
  className?: string;
  iconSize?: number;
}

export default function Logo({ showText = false, className = "", iconSize = 32 }: LogoProps) {
  const SvgIcon = ({size, svgClassName}: {size: number, svgClassName?: string}) => (
    <svg 
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <title>SentenceVizu Logo</title>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 20 L50 60 L70 20" stroke="#2563eb" strokeWidth="12"/>
        <path d="M85 35 C 85 55, 65 65, 50 65 S 15 75, 15 90" stroke="#111827" strokeWidth="10" />
      </g>
    </svg>
  );

  if (showText) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <SvgIcon size={32} svgClassName=""/> 
        <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Sentence<span className="text-blue-600">Vizu</span>
        </span>
      </div>
    );
  }

  return <SvgIcon size={iconSize} svgClassName={className} />;
} 