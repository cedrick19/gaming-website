import { useEffect, useRef, useState } from "react";
import { BlockTitle, Icon } from "framework7-react";

export default function MarqueeNotification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  const notificationData = [
    { message: "Congratulations to player 暴****" },
    { message: "Congratulations to player 暴****" },
  ];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = contentRef.current.offsetWidth;

    let currentPosition = containerWidth;

    const animate = () => {
      if (currentPosition <= -contentWidth) {
        currentPosition = containerWidth;
      }

      currentPosition -= 1;
      setPosition(currentPosition);

      requestAnimationFrame(animate);
    };

    setPosition(currentPosition);
    requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestAnimationFrame(animate));
    };
  }, []);

  return (
    <BlockTitle className="mx-5 rounded-full bg-blue-500 p-2 text-white">
      <div
        ref={containerRef}
        className="relative h-6 w-full overflow-hidden" // Added overflow-hidden
      >
        <div
          ref={contentRef}
          className="absolute flex items-center whitespace-nowrap"
          style={{
            transform: `translateX(${position}px)`,
            whiteSpace: "nowrap",
          }}
        >
          <Icon className="mr-2 h-5 w-5" />
          <span className="font-medium">
            {notificationData.map((item, index) => (
              <span key={index} className="mr-4">
                {" "}
                {/* Added some space between the messages */}
                {item.message}
              </span>
            ))}
            {notificationData.map((item, index) => (
              <span key={`duplicate-${index}`} className="mr-4">
                {" "}
                {/* Same here */}
                {item.message}
              </span>
            ))}
          </span>
        </div>
      </div>
    </BlockTitle>
  );
}
