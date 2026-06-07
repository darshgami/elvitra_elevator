import { useCounter } from '../../hooks/useCounter';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedCounter({ target, suffix = '', prefix = '', label }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const count = useCounter(target, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Outfit] gradient-rose-text">
        {prefix}{count}{suffix}
      </div>
      <p className="mt-2 text-elvitra-silver2 text-sm tracking-widest uppercase">{label}</p>
    </div>
  );
}
