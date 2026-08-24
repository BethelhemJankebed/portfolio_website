import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const Timeline = ({ data = [] }) => {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);

  const [points, setPoints] = useState([]);
  const [svgHeight, setSvgHeight] = useState(2600);
  const [pathD, setPathD] = useState("");

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 55%", "end 75%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });
  const pathLength = useTransform(progress, [0, 1], [0.02, 1]);

  useLayoutEffect(() => {
    const gap = 300;
    const topPadding = 60;
    const totalHeight = topPadding + data.length * gap + 40;
    setSvgHeight(totalHeight);

    const r = 38;
    const left = 60;
    const right = 280;
    const cx = 170;

    let d = `M ${cx} ${topPadding}`;
    let curX = cx;
    let curY = topPadding;

    const dotPositionsOnPath = [];

    for (let i = 0; i < data.length; i++) {
      const dotY = curY + gap / 2;
      dotPositionsOnPath.push({ dotY });

      if (i < data.length - 1) {
        const segBottom = curY + gap;

        if (i % 2 === 0) {
          d += ` L ${curX} ${segBottom - r}`;
          d += ` Q ${curX} ${segBottom}, ${curX + r} ${segBottom}`;
          d += ` L ${right - r} ${segBottom}`;
          d += ` Q ${right} ${segBottom}, ${right} ${segBottom + r}`;
          curX = right;
          curY = segBottom;
        } else {
          d += ` L ${curX} ${segBottom - r}`;
          d += ` Q ${curX} ${segBottom}, ${curX - r} ${segBottom}`;
          d += ` L ${left + r} ${segBottom}`;
          d += ` Q ${left} ${segBottom}, ${left} ${segBottom + r}`;
          curX = left;
          curY = segBottom;
        }
      } else {
        d += ` L ${curX} ${curY + gap * 0.55}`;
      }
    }

    setPathD(d);

    const timer = setTimeout(() => {
      if (!pathRef.current) return;
      const totalLen = pathRef.current.getTotalLength();

      const pts = dotPositionsOnPath.map(({ dotY: targetY }) => {
        let lo = 0,
          hi = totalLen,
          best = totalLen * 0.5,
          bestDist = Infinity;

        for (let iter = 0; iter < 60; iter++) {
          const mid = (lo + hi) / 2;
          const p = pathRef.current.getPointAtLength(mid);
          const dist = Math.abs(p.y - targetY);
          if (dist < bestDist) {
            bestDist = dist;
            best = mid;
          }
          if (p.y < targetY) lo = mid;
          else hi = mid;
        }
        const pt = pathRef.current.getPointAtLength(best);
        return { x: pt.x, y: pt.y };
      });

      setPoints(pts);
    }, 80);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="w-full">
      {/* ── MOBILE TIMELINE (< 1024px) ── */}
      <div className="block lg:hidden space-y-8 w-full max-w-xl mx-auto px-2">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="relative pl-6 border-l-2 border-indigo-500/40 dark:border-cyan-500/40"
          >
            {/* Dot indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-900 shadow-md" />
            
            {/* Date badge */}
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-bold font-mono rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow">
                {item.title}
              </span>
            </div>

            {/* Content card */}
            <div className="w-full">
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── DESKTOP S-CURVE TIMELINE (>= 1024px) ── */}
      <section
        ref={wrapRef}
        className="hidden lg:block relative w-full overflow-hidden"
        style={{ minHeight: svgHeight }}
      >
        <div className="relative mx-auto max-w-7xl" style={{ height: svgHeight }}>
          <svg
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              transform: "translateX(-50%)",
              width: "340px",
              height: `${svgHeight}px`,
              overflow: "visible",
            }}
            viewBox={`0 0 340 ${svgHeight}`}
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {pathD && (
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#grad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  pathLength,
                  filter:
                    "drop-shadow(0 0 6px #22d3ee) drop-shadow(0 0 14px #3b82f6)",
                }}
              />
            )}
          </svg>

          {points.map((p, i) => {
            const leftSide = i % 2 === 0;
            const dotLeft = `calc(50% - 170px + ${p.x}px)`;

            const cardLeft = leftSide
              ? "calc(50% + 185px)"
              : "calc(50% - 615px)";

            const badgeLeft = leftSide
              ? "calc(50% - 615px)"
              : "calc(50% + 185px)";

            const connectorLeft = leftSide
              ? `calc(${dotLeft} + 12px)`
              : `calc(${dotLeft} - 145px)`;

            return (
              <div key={i}>
                <div
                  style={{
                    position: "absolute",
                    left: dotLeft,
                    top: p.y,
                    transform: "translate(-50%, -50%)",
                    zIndex: 20,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.08, type: "spring", stiffness: 220 }}
                    viewport={{ once: true }}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#22d3ee",
                      border: "3px solid #020617",
                      boxShadow: "0 0 14px 4px rgba(34,211,238,0.8)",
                    }}
                  />
                </div>

                <motion.div
                  style={{
                    position: "absolute",
                    top: p.y,
                    left: connectorLeft,
                    width: 130,
                    height: 2,
                    background:
                      "linear-gradient(90deg, rgba(34,211,238,0.9), rgba(34,211,238,0.2))",
                    transformOrigin: leftSide ? "left center" : "right center",
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  style={{
                    position: "absolute",
                    top: p.y - 16,
                    left: badgeLeft,
                    zIndex: 30,
                  }}
                  initial={{ opacity: 0, x: leftSide ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.12 }}
                  viewport={{ once: true }}
                >
                  <span className="rounded-full px-4 py-[7px] text-sm font-bold text-white whitespace-nowrap shadow-lg bg-gradient-to-r from-emerald-400 to-cyan-500">
                    {data[i].title}
                  </span>
                </motion.div>

                <motion.div
                  style={{
                    position: "absolute",
                    top: p.y - 80,
                    left: cardLeft,
                  }}
                  className="w-[300px] md:w-[400px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {data[i].content}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
