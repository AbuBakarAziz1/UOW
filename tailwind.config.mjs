export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // button related
    'bg-orange-300',
    'hover:bg-orange-400',
    'text-white',
    'bg-theme-blue',
    'hover:bg-indigo-700',
    'bg-white',
    'text-theme-blue',
    // utilities used in mapping
    'px-2',
    'py-1',
    'rounded',
    'font-bold',
    'animate-pulse',
    'shadow-sm',
    'hover:shadow-md',
    'transition-all',
    'duration-300',
    'transform',
    'hover:scale-105',
  ],
  // Allow arbitrary bg- and text- color utilities from CMS keys like 'bg-red-500'
  // Note: Keep the allowed patterns tight to avoid generating lots of CSS
  safelistPatterns: [
    /bg-(red|orange|blue|white|theme-blue)-(\d{1,3})?/, 
    /text-(red|orange|blue|white|theme-blue)-(\d{1,3})?/
  ]
};
