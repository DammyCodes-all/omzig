# Omgiz Project

## Overview

This is a sample entry file for testing **markitdown-ts**.

### Features

- Converts various file formats to Markdown
- Supports PDF, DOCX, XLSX, HTML, and more
- Works with local files, URLs, and in-memory buffers

### Code Example

```typescript
import { MarkItDown } from "markitdown-ts";

const markitdown = new MarkItDown();
const result = await markitdown.convert("path/to/file.pdf");
console.log(result?.markdown);
```

### Notes

> This file will be used to verify that markitdown-ts is working correctly.

| Format | Supported |
|--------|-----------|
| PDF    | ✅        |
| DOCX   | ✅        |
| HTML   | ✅        |
| XLSX   | ✅        |
| PPTX   | ❌        |

---

*Generated for testing purposes.*