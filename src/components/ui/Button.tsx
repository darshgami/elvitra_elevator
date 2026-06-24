import { motion } from 'framer-motion'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-elvitra-pink-dark text-elvitra-dark hover:bg-elvitra-pink-light border border-transparent',
  outline:
    'bg-transparent text-elvitra-pink-dark border border-elvitra-pink-dark hover:bg-elvitra-pink-dark hover:text-elvitra-dark',
  ghost:
    'bg-transparent text-elvitra-white border border-transparent hover:text-elvitra-pink-dark',
}

const sizeStyles = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
  } = props

  const classes = `inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (props.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...(anchorRest as any)}
      >
        {children}
      </motion.a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(buttonRest as any)}
    >
      {children}
    </motion.button>
  )
}
