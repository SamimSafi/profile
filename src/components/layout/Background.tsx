import { motion } from 'framer-motion'

type BackgroundProps = { children?: React.ReactNode }

export function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Animated gradients + radial lights */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 50% 90%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)
            `,
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Floating orbs */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[15%] top-[20%] h-32 w-32 rounded-full bg-[var(--primary)]/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[10%] top-[60%] h-40 w-40 rounded-full bg-[var(--accent)]/8 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] left-[30%] h-24 w-24 rounded-full bg-[var(--highlight)]/10 blur-2xl"
        />
      </div>
      <div className="relative z-0">{children}</div>
    </div>
  )
}
