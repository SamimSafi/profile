import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-3 rounded-full glass hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <motion.svg
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 90,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </motion.svg>

        {/* Moon Icon */}
        <motion.svg
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -90,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      </div>
    </motion.button>
  );
};
