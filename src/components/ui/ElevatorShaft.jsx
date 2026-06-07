import { useScroll, useTransform, motion } from 'framer-motion';

export default function ElevatorShaft() {
  const { scrollYProgress } = useScroll();
  const cabinY = useTransform(scrollYProgress, [0, 1], ['0%', '85%']);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-0 h-48">
      {/* Shaft rails */}
      <div className="w-px h-full bg-gradient-to-b from-transparent via-elvitra-border to-transparent relative">
        {/* Left rail detail */}
        <div className="absolute left-[-3px] w-[7px] h-full">
          <div className="absolute left-0 w-px h-full bg-elvitra-border/50" />
          <div className="absolute right-0 w-px h-full bg-elvitra-border/50" />
        </div>
        {/* Elevator cabin */}
        <motion.div
          style={{ top: cabinY }}
          className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-elvitra-accent rounded-sm shadow-[0_4px_12px_rgba(196,137,154,0.4)] flex items-center justify-center border border-elvitra-accent-dark/20"
        >
          <div className="w-2 h-[1px] bg-white/80" />
        </motion.div>
      </div>
    </div>
  );
}
