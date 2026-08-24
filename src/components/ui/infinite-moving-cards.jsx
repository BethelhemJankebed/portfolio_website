import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { FiCode } from "react-icons/fi";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="relative flex w-[160px] sm:w-[180px] max-w-full shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-6 py-5 backdrop-blur-md dark:border-white/10 dark:bg-[rgba(7,9,30,0.85)] shadow-md"
            key={`${item.name}-${idx}`}>
            <CardImage item={item} />
            <span className="relative z-20 text-center text-xs sm:text-sm font-semibold leading-tight text-gray-900 dark:text-gray-100">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardImage = ({ item }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !item.img) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-cyan-300">
        <FiCode size={24} />
      </div>
    );
  }

  return (
    <img
      src={item.img}
      alt={item.name}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      className="relative z-20 h-12 w-12 sm:h-14 sm:w-14 object-contain"
    />
  );
};

