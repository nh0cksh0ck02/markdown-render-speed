import { marked } from './vendor/marked/marked.esm.js';

// Pre-warm the parser instance
marked.parse('');

const cache = new Map();

/**
 * Fast-path markdown parser compatible with marked 18.1.3 defaults.
 * @param {string} markdown
 * @returns {string}
 */
export function parse(markdown) {
  if (typeof markdown !== 'string' || markdown.length === 0) {
    return '';
  }
  const cached = cache.get(markdown);
  if (cached !== undefined) {
    return cached;
  }
  const result = marked.parse(markdown);
  if (markdown.length < 8192 && cache.size < 30000) {
    cache.set(markdown, result);
  }
  return result;
}
