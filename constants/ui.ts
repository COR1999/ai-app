/**
 * UI CONSTANTS
 * 
 * Common UI values like animation durations, spacing, and reusable class names.
 * Helps maintain consistency across the application.
 */

export const ANIMATION = {
  duration: {
    fast: 'duration-150',
    normal: 'duration-300',
    slow: 'duration-500',
  },
  ease: 'ease-in-out',
} as const;

export const COMMON_CLASSES = {
  // Transitions
  colorTransition: 'transition-colors duration-300',
  allTransition: 'transition-all duration-300',
  
  // Hover effects
  hoverScale: 'transform hover:scale-105',
  hoverShadow: 'hover:shadow-lg',
  
  // Focus states
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent',
  
  // Common layouts
  containerPadding: 'container mx-auto px-4 sm:px-6 lg:px-8',
  sectionPadding: 'py-16',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
} as const;