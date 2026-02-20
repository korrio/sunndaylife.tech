import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/language';

interface MotionBannerProps {
  title: string;
  titleTh?: string;
  subtitle?: string;
  subtitleTh?: string;
  variant?: 'home' | 'about' | 'services' | 'experiences' | 'contact';
  className?: string;
}

const variantStyles = {
  home: {
    gradient: 'from-sunny-teal via-sunny-teal-dark to-sunny-gold',
    particles: 'bg-white/20',
    accent: 'bg-sunny-gold',
  },
  about: {
    gradient: 'from-slate-900 via-sunny-teal-dark to-slate-800',
    particles: 'bg-sunny-gold/30',
    accent: 'bg-sunny-light',
  },
  services: {
    gradient: 'from-sunny-teal via-blue-600 to-sunny-teal-dark',
    particles: 'bg-white/25',
    accent: 'bg-blue-400',
  },
  experiences: {
    gradient: 'from-indigo-900 via-sunny-teal-dark to-purple-900',
    particles: 'bg-sunny-gold/25',
    accent: 'bg-purple-400',
  },
  contact: {
    gradient: 'from-sunny-teal-dark via-sunny-teal to-emerald-600',
    particles: 'bg-white/20',
    accent: 'bg-emerald-400',
  },
};

// Animated floating particles
function FloatingParticles({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={cn('absolute rounded-full', color)}
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Animated grid lines
function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
    </div>
  );
}

// Animated circles
function AnimatedCircles({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={cn('absolute rounded-full border-2', color)}
          style={{
            width: 200 + i * 150,
            height: 200 + i * 150,
            right: '-10%',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Animated wave
function WaveAnimation() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
      <motion.svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 w-full h-20"
        preserveAspectRatio="none"
        initial={{ x: 0 }}
        animate={{ x: [-1440, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <path
          fill="rgba(255,255,255,0.1)"
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 w-full h-16"
        preserveAspectRatio="none"
        initial={{ x: 0 }}
        animate={{ x: [0, -1440] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <path
          fill="rgba(255,255,255,0.05)"
          d="M0,40 C360,80 720,20 1080,50 C1260,70 1380,30 1440,40 L1440,120 L0,120 Z"
        />
      </motion.svg>
    </div>
  );
}

export function MotionBanner({
  title,
  titleTh,
  subtitle,
  subtitleTh,
  variant = 'home',
  className,
}: MotionBannerProps) {
  const { t } = useLanguage();
  const styles = variantStyles[variant];

  return (
    <section
      className={cn(
        'relative pt-32 pb-20 overflow-hidden',
        `bg-gradient-to-br ${styles.gradient}`,
        className
      )}
    >
      {/* Background animations */}
      <GridLines />
      <FloatingParticles color={styles.particles} />
      <AnimatedCircles color={styles.accent} />
      <WaveAnimation />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Animated badge */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-white/80 font-medium mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm"
          >
            {t(title, titleTh)}
          </motion.span>

          {/* Animated title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight"
          >
            {t(title, titleTh)}
          </motion.h1>

          {/* Animated subtitle */}
          {(subtitle || subtitleTh) && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/90 text-lg sm:text-xl leading-relaxed"
            >
              {t(subtitle!, subtitleTh)}
            </motion.p>
          )}

          {/* Animated decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={cn(
              'h-1 w-24 mt-8 rounded-full origin-left',
              styles.accent
            )}
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// Simpler variant for smaller sections
export function SimpleMotionBanner({
  title,
  titleTh,
  subtitle,
  subtitleTh,
  variant = 'home',
}: MotionBannerProps) {
  const { t } = useLanguage();
  const styles = variantStyles[variant];

  return (
    <section className={cn(
      'relative pt-28 pb-16 overflow-hidden',
      `bg-gradient-to-br ${styles.gradient}`
    )}>
      <FloatingParticles color={styles.particles} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white/70 font-medium text-sm uppercase tracking-wider">
            {t(title, titleTh)}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            {t(title, titleTh)}
          </h1>
          {(subtitle || subtitleTh) && (
            <p className="text-white/80 mt-3">
              {t(subtitle!, subtitleTh)}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
