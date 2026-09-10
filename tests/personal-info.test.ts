import { describe, it, expect } from 'vitest';
import { PERSONAL_INFO } from '@/constants/personal-info';

describe('Personal info constants', () => {
  it('has all required fields', () => {
    expect(PERSONAL_INFO.name).toBeDefined();
    expect(PERSONAL_INFO.title).toBeDefined();
    expect(PERSONAL_INFO.email).toBeDefined();
    expect(PERSONAL_INFO.linkedin).toBeDefined();
    expect(PERSONAL_INFO.github).toBeDefined();
    expect(PERSONAL_INFO.siteUrl).toBeDefined();
    expect(PERSONAL_INFO.siteTitle).toBeDefined();
    expect(PERSONAL_INFO.siteDescription).toBeDefined();
    expect(PERSONAL_INFO.currentRole).toBeDefined();
    expect(PERSONAL_INFO.specialization).toBeDefined();
    expect(PERSONAL_INFO.introduction).toBeDefined();
  });

  it('has valid email format', () => {
    expect(PERSONAL_INFO.email).toMatch(/@.+\..+/);
  });

  it('has valid URLs', () => {
    expect(PERSONAL_INFO.siteUrl).toMatch(/^https:\/\//);
    expect(PERSONAL_INFO.linkedin).toMatch(/^https:\/\/www\.linkedin\.com/);
    expect(PERSONAL_INFO.github).toMatch(/^https:\/\/github\.com/);
  });

  it('has stats object', () => {
    expect(PERSONAL_INFO.stats.projects).toBeDefined();
    expect(PERSONAL_INFO.stats.countries).toBeDefined();
    expect(PERSONAL_INFO.stats.passion).toBeDefined();
  });
});
