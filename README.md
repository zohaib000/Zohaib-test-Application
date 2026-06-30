# Zohaib-test-Application

A modern, multilingual web application featuring dark mode support and internationalization capabilities. This platform demonstrates best practices for building accessible, user-friendly web interfaces with theme switching and multi-language support.

## Features

- **Dark Mode Support**: Seamless theme switching with persistent user preferences
- **Multi-Language Support**: Built-in internationalization (i18n) for English, Spanish, French, and German
- **Responsive Design**: Clean, modern interface that adapts to different screen sizes
- **Persistent Settings**: User preferences stored in localStorage for consistent experience across sessions
- **Accessible UI**: ARIA labels and semantic HTML for improved accessibility

## Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS transitions and custom properties
- **Vanilla JavaScript**: No framework dependencies for lightweight performance
- **LocalStorage API**: Client-side persistence for user preferences

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zohaib000/Zohaib-test-Application.git
   cd Zohaib-test-Application
   ```

2. Open the application:
   - **Option 1**: Open `index.html` directly in your web browser
   - **Option 2**: Use a local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

### Usage

#### Theme Switching
- Click the theme toggle button (🌙/☀️) in the top-right corner to switch between light and dark modes
- Your theme preference is automatically saved and restored on subsequent visits

#### Language Selection
- Use the language dropdown in the top-right corner to select your preferred language
- Available languages: English, Spanish (Español), French (Français), German (Deutsch)
- Language preference is persisted across browser sessions

## Project Structure

```
Zohaib-test-Application/
│
├── index.html          # Main HTML structure with semantic markup
├── style.css           # Styling including dark mode and responsive design
├── script.js           # Application logic for theme and language switching
└── README.md           # Project documentation
```

## File Descriptions

### index.html
Main HTML file containing:
- Semantic HTML5 structure
- Theme toggle button with ARIA labels
- Language selector dropdown
- Content sections with i18n data attributes

### style.css
Stylesheet featuring:
- CSS custom properties for theming
- Smooth transitions for theme switching
- Dark mode styles
- Responsive design patterns
- Modern UI components (buttons, dropdowns, cards)

### script.js
JavaScript module handling:
- Theme initialization and toggling
- Language switching functionality
- Translation management
- LocalStorage persistence
- DOM manipulation

## Internationalization (i18n)

The application supports multiple languages through a simple yet effective translation system:

```javascript
const translations = {
  en: { title: "Hello World", ... },
  es: { title: "Hola Mundo", ... },
  fr: { title: "Bonjour le Monde", ... },
  de: { title: "Hallo Welt", ... }
};
```

### Adding New Languages

1. Add a new language object to the `translations` object in `script.js`
2. Add a new `<option>` to the language dropdown in `index.html`
3. Ensure all translation keys are present for consistency

### Adding New Translatable Content

1. Add a `data-i18n="key"` attribute to the HTML element
2. Add the corresponding key-value pairs to all language objects in `script.js`

## Theme System

The dark mode implementation uses:
- CSS classes for theme switching
- LocalStorage for persistence
- Smooth CSS transitions for visual feedback
- System-wide color scheme adjustments

### Customizing Themes

Edit the CSS variables and dark mode classes in `style.css`:

```css
body.dark-mode {
  background-color: #1a1a1a;
  color: #e0e0e0;
}
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Opera: Latest 2 versions

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Commit Convention

This project follows conventional commit messages:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test additions or modifications
- `chore:` Maintenance tasks

## Performance Considerations

- **Zero Dependencies**: No external libraries required, resulting in minimal load time
- **Optimized Assets**: Minimal CSS and JavaScript for fast rendering
- **Client-Side Rendering**: All interactions handled client-side for instant feedback
- **LocalStorage**: Efficient preference storage without server calls

## Accessibility

This application follows WCAG 2.1 guidelines:
- Semantic HTML elements
- ARIA labels for interactive elements
- Sufficient color contrast in both themes
- Keyboard navigation support
- Screen reader friendly

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Zohaib**
- GitHub: [@zohaib000](https://github.com/zohaib000)

## Acknowledgments

- Built with modern web standards
- Inspired by contemporary UI/UX design principles
- Focused on accessibility and user experience

## Future Enhancements

- [ ] Add more language options
- [ ] Implement additional theme variations
- [ ] Add user preference export/import
- [ ] Integrate with backend API
- [ ] Add animation preferences
- [ ] Implement RTL (Right-to-Left) language support

## Support

For issues, questions, or contributions, please open an issue on the [GitHub repository](https://github.com/zohaib000/Zohaib-test-Application/issues).
