# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS. Features include dark mode support, animated sections, skills showcase, and project displays.

## Features

- 🌓 Dark/Light mode support
- 🎨 Customizable theme and gradients
- 📱 Fully responsive design
- ⚡ Server-side rendering
- 🔤 Custom font support (Maple Mono)
- 🎯 Animated sections
- 🐍 GitHub contribution snake animation
- 💼 Project showcase
- 📊 Skills visualization

## Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

All site configurations are managed through the `config.yaml` file:

### Personal Information
```yaml
user:
  name: "Your Name"
  title: "Your Title"
  location: "Your Location"
  email: "your.email@example.com"
  bio: "Your bio"
```

### Social Media Links
```yaml
social:
  github: "https://github.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
  twitter: "https://twitter.com/yourusername"
  instagram: "https://instagram.com/yourusername"
```

### Projects
```yaml
projects:
  - title: "Project Name"
    description: "Project description"
    tags: ["Tech1", "Tech2"]
    image: "/projects/image.png"
    github: "https://github.com/..."
    demo: "https://demo-url.com"
    featured: true
```

### Skills
```yaml
skills:
  technical:
    - name: "Skill Name"
      icon: "icon-name"  # Uses Simple Icons naming
```

### Theme Customization
```yaml
site:
  theme:
    gradients:
      light:
        from: "#4F46E5"
        to: "#06B6D4"
      dark:
        from: "#00DC82"
        to: "#36E4DA"
```

### Feature Toggles
```yaml
site:
  features:
    darkMode: true
    animations: true
    contactForm: true
    newsletter: false
    blog: false
```

## Deployment

### Deploy to Vercel (Recommended)

1. Fork this repository
2. Enable GitHub Actions:
   - Go to your forked repository's Settings > Actions > General
   - Under "Actions permissions", select "Allow all actions and reusable workflows"
   - Click "Save"
   - This is required for the GitHub contribution snake animation
3. Create a new project on [Vercel](https://vercel.com)
4. Import your forked repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

Note: The GitHub snake contribution graph will be automatically generated and updated daily through GitHub Actions.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. Start the production server:
   ```bash
   npm run start
   # or
   yarn start
   # or
   pnpm start
   ```

### Environment Variables (Optional)

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Project Structure

```
├── app/                   # Next.js 13+ app directory
│   ├── components/       # React components
│   ├── context/         # React context providers
│   ├── config/         # Configuration utilities
│   └── types.ts        # TypeScript definitions
├── public/              # Static assets
│   ├── assets/         # Images and media
│   └── fonts/          # Custom fonts
└── config.yaml         # Site configuration
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [GPL v3.0 License](LICENSE).
