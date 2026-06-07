export default function Badge({ children, variant = 'rose' }) {
  const variants = {
    rose: 'bg-elvitra-rose/10 text-elvitra-rose border-elvitra-rose/20',
    silver: 'bg-elvitra-silver/10 text-elvitra-silver border-elvitra-silver/20',
    dark: 'bg-elvitra-charcoal text-elvitra-silver2 border-elvitra-silver/10',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase border rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}
