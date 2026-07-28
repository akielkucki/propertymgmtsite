/**
 * Scroll-reveal system built on Motion.
 * Elements opt in via data attributes:
 *   data-reveal          — soft fade + vertical rise when scrolled into view
 *   data-reveal-delay    — optional delay in seconds for data-reveal
 *   data-reveal-group    — container whose [data-reveal-item] children stagger in
 *   data-reveal-scale    — image treatment: gentle settle from 1.06x scale
 *   data-scroll-text     — words warm up one by one, tied to scroll position
 *
 * The `motion-ok` class is added in <head> only when the visitor has not
 * requested reduced motion; without it, nothing is hidden and nothing animates.
 */
import { animate, inView, scroll, stagger } from 'motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** How faint a word sits before the scroll reaches it. */
const DIM = 0.16;

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

  /*
    Scroll-linked word fill. Each word starts faint and warms to full strength
    as the block travels up the viewport, so reading pace and scroll pace line
    up. Opacity rather than an explicit colour pair: it inherits whatever tone
    the section already set, so the same treatment works on the porcelain and
    navy fields without being told which it is.

    Words are wrapped as plain inline spans separated by real text nodes, which
    leaves line-breaking, text selection, and the accessibility tree untouched.
  */
  document.querySelectorAll<HTMLElement>('[data-scroll-text]').forEach((el) => {
    // Only safe on leaf text — wrapping would otherwise destroy child markup.
    if (el.childElementCount > 0) return;
    const source = el.textContent?.trim().replace(/\s+/g, ' ');
    if (!source) return;

    const parts = source.split(' ');
    el.textContent = '';
    const words = parts.map((part, i) => {
      const span = document.createElement('span');
      span.textContent = part;
      span.style.opacity = String(DIM);
      el.append(span);
      if (i < parts.length - 1) el.append(document.createTextNode(' '));
      return span;
    });

    scroll(
      animate(
        words,
        { opacity: [DIM, 1] },
        { duration: 1, ease: 'linear', delay: stagger(1.8 / words.length) },
      ),
      { target: el, offset: ['start 0.9', 'end 0.6'] },
    );
  });
}
