# PaperScope

A clean, paper-textured theme for personal websites and project documentation.

PaperScope is a lightweight, accessible CSS/JS theme designed for developers building personal websites, project documentation, or technical blogs. It features a warm paper-like texture, automatic dark mode that follows system preferences, macOS-style code blocks with copy buttons, and seamless highlight.js integration.


## Features

- Paper-like texture - warm background, easy on the eyes
- Dark mode - follows system preference, manual toggle, remembers your choice
- macOS-style code blocks - traffic light dots, clean header
- One-click copy - copy code with visual feedback
- highlight.js integration - syntax highlighting, auto-switches with theme
- Fully responsive - looks great on any screen size
- Print-friendly - optimized for printing
- Font Awesome 6 ready - icons included
- Accessible - ARIA labels for screen readers


## Dependencies

- Font Awesome 6 - Free version (icons)
- highlight.js - Optional (syntax highlighting)


## Quick Start

1. Include CSS and JS:

   ```html
   <link rel="stylesheet" href="paper-scope.css" />
   <script src="paper-scope.js"></script>
   ```

2. Add HTML structure:

   See [example.html](example.html) for a complete demo.


## CSS Classes

| Class | Purpose |
|-------|---------|
| .site-header | Top navigation bar |
| .site-brand | Site name / logo |
| .accent | Accent-colored text |
| .site-nav | Navigation links container |
| .theme-toggle | Dark mode toggle button |
| .content | Main content area |
| .card | Card container with shadow |
| .btn | Primary button |
| .btn-accent | Accent button |
| .tag | Tag / badge |
| .tag-accent | Accent tag |
| .code-block-wrapper | Code block container |
| .code-header | Code block title bar |
| .code-dots | Traffic light container |
| .code-dot | Individual dot |
| .code-lang | Language label |
| .code-copy-btn | Copy button |
| .site-footer | Footer |


## Dark Mode

- Automatically follows system preference
- User can manually toggle with the theme button
- Preference is saved in localStorage
- Code highlighting switches colors automatically


## Browser Support

- Chrome / Edge / Firefox / Safari (latest versions)
- Internet Explorer - Not supported


## Print Styles

PaperScope includes print-optimized styles that:
- Remove interactive elements (theme toggle, copy buttons)
- Simplify backgrounds and shadows
- Use black text on white background


## License

MIT
