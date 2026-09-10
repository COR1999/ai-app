import { describe, it, expect } from 'vitest';
import { navigationItems } from '@/constants/navigation';

describe('Navigation constants', () => {
  it('has items', () => {
    expect(navigationItems.length).toBeGreaterThan(0);
  });

  it('every item has href and label', () => {
    for (const item of navigationItems) {
      expect(item.href).toBeDefined();
      expect(item.label).toBeDefined();
      expect(item.href.startsWith('/')).toBe(true);
    }
  });

  it('has a home route', () => {
    const home = navigationItems.find((i) => i.href === '/');
    expect(home).toBeDefined();
  });

  it('all labels are non-empty strings', () => {
    for (const item of navigationItems) {
      expect(item.label.trim().length).toBeGreaterThan(0);
    }
  });
});
