const breakpoints = [576, 768, 992, 1200];
export const minq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
export const maxq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);