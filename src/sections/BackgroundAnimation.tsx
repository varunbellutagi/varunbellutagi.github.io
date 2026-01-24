import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingDollar,
  faCalculator,
  faChartLine,
  faIndianRupeeSign,
  faCoins,
  faWallet,
  faPiggyBank,
  faScaleBalanced,
  faReceipt,
  faBuildingColumns,
  faChartPie,
  faRupeeSign,
} from '@fortawesome/free-solid-svg-icons';

function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Parallax
      container.style.setProperty('--mouse-x', `${x * 80}px`);
      container.style.setProperty('--mouse-y', `${y * 80}px`);
      container.style.setProperty('--mouse-x-slow', `${x * 40}px`);
      container.style.setProperty('--mouse-y-slow', `${y * 40}px`);
      container.style.setProperty('--mouse-x-fast', `${x * 120}px`);
      container.style.setProperty('--mouse-y-fast', `${y * 120}px`);

      // Grid highlight position
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      container.style.setProperty('--mouse-x', '0px');
      container.style.setProperty('--mouse-y', '0px');
      container.style.setProperty('--mouse-x-slow', '0px');
      container.style.setProperty('--mouse-y-slow', '0px');
      container.style.setProperty('--mouse-x-fast', '0px');
      container.style.setProperty('--mouse-y-fast', '0px');
      setIsHovering(false);
    };

    const heroSection = container.closest('.hero');
    if (heroSection) {
      heroSection.addEventListener(
        'mousemove',
        handleMouseMove as EventListener,
      );
      heroSection.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener(
          'mousemove',
          handleMouseMove as EventListener,
        );
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="bg-animation" ref={containerRef} aria-hidden="true">
      {/* Base grid pattern */}
      <div className="bg-animation-grid" />

      {/* Magnified grid near cursor */}
      <div
        className={`bg-animation-grid-magnify ${isHovering ? 'active' : ''}`}
        style={
          {
            '--cursor-x': `${cursorPos.x}px`,
            '--cursor-y': `${cursorPos.y}px`,
          } as React.CSSProperties
        }
      />

      {/* Financial icons - static */}
      <span className="bg-animation-icon icon-1">
        <FontAwesomeIcon icon={faHandHoldingDollar} />
      </span>
      <span className="bg-animation-icon icon-2">
        <FontAwesomeIcon icon={faCalculator} />
      </span>
      <span className="bg-animation-icon icon-3">
        <FontAwesomeIcon icon={faChartLine} />
      </span>
      <span className="bg-animation-icon icon-4">
        <FontAwesomeIcon icon={faRupeeSign} />
      </span>
      <span className="bg-animation-icon icon-5">
        <FontAwesomeIcon icon={faIndianRupeeSign} />
      </span>
      <span className="bg-animation-icon icon-6">
        <FontAwesomeIcon icon={faCoins} />
      </span>
      <span className="bg-animation-icon icon-7">
        <FontAwesomeIcon icon={faWallet} />
      </span>
      <span className="bg-animation-icon icon-8">
        <FontAwesomeIcon icon={faPiggyBank} />
      </span>
      <span className="bg-animation-icon icon-9">
        <FontAwesomeIcon icon={faScaleBalanced} />
      </span>
      <span className="bg-animation-icon icon-10">
        <FontAwesomeIcon icon={faReceipt} />
      </span>
      <span className="bg-animation-icon icon-11">
        <FontAwesomeIcon icon={faBuildingColumns} />
      </span>
      <span className="bg-animation-icon icon-12">
        <FontAwesomeIcon icon={faChartPie} />
      </span>
    </div>
  );
}

export default BackgroundAnimation;
