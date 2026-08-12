'use client';
import { useEffect } from 'react';

/**
 * TableScroll — makes every table on the page behave on a phone.
 *
 * Mounted once in the root layout. Progressive enhancement only: without it
 * the tables still render and still scroll inside the wrappers the pages
 * already have. What it adds is the information CSS cannot work out on its
 * own — how many columns a table has (drives the mobile min-width), whether
 * it currently has anything off-screen, and which edge that is on.
 *
 * It does not reparent anything unless a table has no scroll wrapper at all.
 */
export default function TableScroll() {
  useEffect(() => {
    const tables = Array.from(document.querySelectorAll('table'));
    if (!tables.length) return;

    const entries = [];

    for (const table of tables) {
      let scroller = table.parentElement;
      if (!scroller) continue;

      // Reuse the page's own wrapper when it is already a scroll container;
      // rewrapping would break selectors like `.cab-table-wrap table`.
      const scrolls = /auto|scroll/.test(getComputedStyle(scroller).overflowX);
      if (!scrolls || scroller.children.length > 1) {
        scroller = document.createElement('div');
        table.parentNode.insertBefore(scroller, table);
        scroller.appendChild(table);
      }
      scroller.classList.add('tbl-scroll');

      const firstRow = table.querySelector('tr');
      scroller.dataset.cols = String(firstRow ? firstRow.children.length : 0);

      const hint = document.createElement('p');
      hint.className = 'tbl-hint';
      hint.textContent = 'Swipe the table to see the rest';
      hint.hidden = true;
      scroller.insertAdjacentElement('afterend', hint);

      entries.push({ scroller, hint, nudged: false });
    }

    const update = () => {
      for (const e of entries) {
        const max = e.scroller.scrollWidth - e.scroller.clientWidth;
        const at = max <= 1 ? 'none'
          : e.scroller.scrollLeft <= 1 ? 'start'
          : e.scroller.scrollLeft >= max - 1 ? 'end'
          : 'mid';
        e.scroller.dataset.scroll = at;
        // The hint answers "is there more?", so it goes once you have looked.
        e.hint.hidden = at === 'none' || e.nudged;
      }
    };

    const onScroll = e => {
      const hit = entries.find(x => x.scroller === e.currentTarget);
      if (hit && e.currentTarget.scrollLeft > 4) hit.nudged = true;
      update();
    };

    for (const e of entries) e.scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    // Fonts landing late change column widths, so measure again after load.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(update).catch(() => {});
    update();

    return () => {
      for (const e of entries) e.scroller.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return null;
}
