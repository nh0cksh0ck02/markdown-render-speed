# Markdown Render Speed

Optimized high-performance Markdown parser compatible with marked 18.1.3 (GFM default specifications).

## Overview
- Standard-compliant drop-in parser module exporting `parse(markdown)`
- Fast-path memory caching for duplicate chunks and sub-blocks
- Direct zero-overhead streaming evaluation in `main.ts`
- Verified against CommonMark and GFM test sets
