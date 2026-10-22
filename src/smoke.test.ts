import { describe, expect, it } from 'vitest';

// These two tests depend on running in file order: the second proves the
// per-test localStorage reset in vitest.setup.ts.
describe('test environment', () => {
  it('runs in Europe/Amsterdam, jsdom, with jest-dom matchers', () => {
    expect(process.env.TZ).toBe('Europe/Amsterdam');
    expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe(
      'Europe/Amsterdam',
    );
    expect(typeof window).toBe('object');
    const el = document.createElement('div');
    document.body.append(el);
    expect(el).toBeInTheDocument();
    localStorage.setItem('smoke', '1');
    expect(localStorage.length).toBe(1);
  });

  it('starts every test with an empty localStorage', () => {
    expect(localStorage.length).toBe(0);
  });
});
