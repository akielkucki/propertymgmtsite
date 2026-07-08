/**
 * Scroll-reveal system built on Motion.
 * Elements opt in via data attributes:
 *   data-reveal          — soft fade + vertical rise when scrolled into view
 *   data-reveal-delay    — optional delay in seconds for data-reveal
 *   data-reveal-group    — container whose [data-reveal-item] children stagger in
 *   data-reveal-scale    — image treatment: gentle settle from 1.06x scale
 *
 * The `motion-ok` class is added in <head> only when the visitor has not
 * requested reduced motion; without it, nothing is hidden and nothing animates.
 */
import { animate, inView, stagger } from 'motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

if (document.documentElement.classList.contains('motion-ok')) {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], y: [28, 0] },
          { duration: 0.9, ease: EASE, delay: Number(el.dataset.revealDelay ?? 0) },
        );
      },
      { amount: 0.2 },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = Array.from(group.querySelectorAll<HTMLElement>('[data-reveal-item]'));
    if (items.length === 0) return;
    inView(
      group,
      () => {
        animate(
          items,
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.8, ease: EASE, delay: stagger(0.1) },
        );
      },
      { amount: 0.12 },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-scale]').forEach((el) => {
    inView(
      el,
      () => {
        animate(el, { opacity: [0, 1], scale: [1.06, 1] }, { duration: 1.5, ease: EASE });
      },
      { amount: 0.2 },
    );
  });
}
