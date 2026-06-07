import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to,
  className = '',
  icon: Icon,
  onClick,
  type = 'button',
  fullWidth = false
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-elvitra-text-main text-white hover:bg-black",
    secondary: "bg-elvitra-secondary text-elvitra-text-main hover:bg-elvitra-border",
    accent: "bg-elvitra-accent text-white hover:bg-elvitra-accent-dark",
    outline: "border border-elvitra-border text-elvitra-text-main hover:border-elvitra-text-main",
    ghost: "text-elvitra-text-main hover:bg-elvitra-secondary"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${styles}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${styles}`} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      type={type} 
      className={`group ${styles}`} 
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
