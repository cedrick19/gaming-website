import { Icon } from "framework7-react";
import { useEffect, useRef, useState } from "react";

export default function MarqueeNotification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  const notificationData = [
    { message: "Congratulations to the player c**** in Canada 4.2-4.6 W" },
    { message: "Congratulations to the player c**** in Canada 4.2-4.6 W" },
  ];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = contentRef.current.offsetWidth;

    let currentPosition = containerWidth;
    let animationFrameId: number;

    const animate = () => {
      if (currentPosition <= -contentWidth) {
        currentPosition = containerWidth;
      }

      currentPosition -= 1;
      setPosition(currentPosition);

      animationFrameId = requestAnimationFrame(animate);
    };

    setPosition(currentPosition);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="mx-5 overflow-hidden rounded-full border-[3px] border-purple-500 bg-white shadow-md">
      <div
        ref={containerRef}
        className="relative flex h-9 w-full overflow-hidden rounded-full"
      >
        <div className="absolute left-0 top-0 z-10 flex h-full items-center rounded-l-full bg-purple-600 px-3">
          <Icon f7="speaker_1_fill" className="h-6 w-6 text-white" />
        </div>

        <div
          ref={contentRef}
          className="text-black-600 absolute flex h-full items-center whitespace-nowrap pl-12"
          style={{
            transform: `translateX(${position}px)`,
            whiteSpace: "nowrap",
          }}
        >
          <div className="flex items-center">
            {notificationData.map((item, index) => (
              <span key={index} className="mr-8 flex items-center px-2">
                <span className="font-medium">{item.message}</span>
              </span>
            ))}
            {notificationData.map((item, index) => (
              <span
                key={`duplicate-${index}`}
                className="mr-8 flex items-center px-2"
              >
                <span className="font-medium">{item.message}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
