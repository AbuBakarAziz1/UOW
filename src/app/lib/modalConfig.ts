// Modal Configuration File
// Easily enable/disable modals and configure their content

export interface ModalConfig {
  id: string;
  enabled: boolean;
  type: 'admissions' | 'convocation' | 'event' | 'announcement';
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  link?: {
    url: string;
    text: string;
  };
  autoCloseSeconds?: number;
  showEveryTime?: boolean; // Show every time page loads (default: true)
}

export const modalConfigs: ModalConfig[] = [
  {
    id: 'admissions-fall-2025',
    enabled: false, // Set to false to hide this modal
    type: 'admissions',
    title: 'Admissions Open!',
    subtitle: 'Fall 2025 Semester',
    description: 'Apply now for undergraduate and postgraduate programs. Limited seats available!',
    backgroundImage: '/theme/images/admissions-bg.jpg', // Optional background
    link: {
      url: '/admissions',
      text: 'Apply Now'
    },
    autoCloseSeconds: 10,
    showEveryTime: true, // Show every time until user clicks "don't show again"
  },
  {
    id: 'convocation-2025',
    enabled: true, // Set to true to show this modal
    type: 'convocation',
    title: '13th Convocation Ceremony',
    subtitle: 'November 27, 2025',
    description: 'Join us for the 13th Convocation Ceremony celebrating our graduating class. A momentous occasion for all graduates and their families.',
    backgroundImage: '/theme/images/alerts/13thconvocation.jpg',
    link: {
      url: '/news/convocation-2025',
      text: 'Learn More'
    },
    autoCloseSeconds: 10,
    showEveryTime: true, // Show every time until user clicks "don't show again"
  },
];

// Get the currently active modal (first enabled one)
export function getActiveModal(): ModalConfig | null {
  return modalConfigs.find(modal => modal.enabled) || null;
}

// Check if modal has been permanently dismissed by user (clicked "don't show again")
export function hasModalBeenDismissed(modalId: string): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(`modal-dismissed-${modalId}`) === 'true';
}

// Mark modal as permanently dismissed (user clicked "don't show again")
export function dismissModal(modalId: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`modal-dismissed-${modalId}`, 'true');
}

// Just close the modal without dismissing (will show again on next page load)
export function closeModalTemporarily(modalId: string): void {
  // Does nothing - modal will show again on next page load
  // This is used when user just closes the modal without selecting "don't show again"
}
