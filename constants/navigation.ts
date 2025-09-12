export interface NavigationItem {
  href: string;
  label: string;
}

export const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];