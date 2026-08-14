import { motion } from 'framer-motion'

interface ShinyTextProps {
  text: string
  /** Seconds for one full sweep. */
  speed?: number
  /** Angle of the gradient sweep, in degrees. */
  spread?: number
  baseColor?: string
  shineColor?: string
  className?: string
}

export default function ShinyText({
  text,
  speed = 3,
  spread = 100,
  baseColor = '#64CEFB',
  shineColor = '#ffffff',
  className = '',
}: ShinyTextProps) {
  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%)`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{ backgroundPositionX: ['-100%', '100%'] }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      {text}
    </motion.span>
  )
}
