# Contributing to Creative Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/creative-portfolio.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit: `git commit -m "Add your feature"`
6. Push: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Check for TypeScript errors
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Code Style

- Use TypeScript for type safety
- Follow existing naming conventions
- Use functional components with hooks
- Add comments for complex logic
- Keep components focused and reusable

## File Structure

- Components go in `src/components/`
- Data/constants go in `src/data/`
- Styles use Tailwind CSS classes (no additional CSS files needed)
- Keep component files under 300 lines when possible

## Commit Messages

Use clear, descriptive commit messages:

```
✨ Add new feature description
🐛 Fix bug description
📝 Update documentation
🎨 Improve code/styles
♻️ Refactor code
🚀 Performance improvements
```

## Pull Request Process

1. Ensure your code passes linting: `npm run lint`
2. Test your changes thoroughly
3. Update README.md if needed
4. Reference any related issues
5. Provide clear description of changes

## Reporting Issues

When reporting bugs, please include:
- Step-by-step reproduction
- Expected vs actual behavior
- Browser and OS information
- Any error messages or console logs
- Screenshots if relevant

## Questions?

Feel free to open a discussion or issue if you have questions!

---

Thank you for contributing! 🙌
