import { useRef, useState, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}

function MagneticButton({
  children,
  className = '',
  href,
  strength = 0.4,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span
        className="magnetic-button-content"
        style={{
          transform: `translate(${position.x * 0.3}px, ${position.y * 0.3}px)`,
        }}
      >
        {children}
      </span>
    </a>
  );
}

export default MagneticButton;
