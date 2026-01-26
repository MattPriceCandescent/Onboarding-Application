# Marketplace Onboarding Application

A fully interactive Vue.js onboarding application built for user testing. This application implements a three-step onboarding process with form validation, progress tracking, and state management.

## Features

- **Three-Step Onboarding Flow**: Step 1 (Sandbox Access) with 3 pages
- **Real-time Progress Tracking**: Page-level and form block-level progress indicators
- **Form Components**: Radio buttons, select menus, text fields, text areas, and file uploads
- **State Persistence**: All form answers persist as users navigate between pages
- **Responsive Layout**: Fixed navigation sidebar and progress indicator with scrollable main content
- **GitHub Pages Ready**: Configured for easy deployment

## Technology Stack

- **Vue.js 3** with Composition API
- **Vite** for build tooling
- **Vue Router** for navigation
- **Pinia** for state management
- **Tailwind CSS** for styling

## Project Structure

```
onboarding-app/
├── src/
│   ├── components/
│   │   ├── layout/        # Header, LeftNav, ProgressIndicator, PageNavigation
│   │   ├── forms/         # Form components (RadioGroup, SelectMenu, etc.)
│   │   └── overview/     # StepCard component
│   ├── views/
│   │   ├── Overview.vue   # Home page with step cards
│   │   └── Step1/         # Step 1 pages (Page1, Page2, Page3)
│   ├── stores/            # Pinia store for state management
│   ├── data/              # Form data structure
│   ├── router/            # Vue Router configuration
│   └── utils/             # Utility functions
├── public/
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to your repository and GitHub Actions will automatically deploy.

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Configure your repository:
   - Go to Settings > Pages
   - Select source: "GitHub Actions" or "Deploy from a branch"
   - If using branch, select `gh-pages` branch and `/` folder

3. If deploying manually:
```bash
# Install gh-pages if needed
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Important: Base Path Configuration

The `vite.config.js` is configured with `base: '/onboarding-app/'`. If your repository name is different, update this value:

```js
// vite.config.js
export default defineConfig({
  base: '/your-repo-name/'
})
```

And update the router:

```js
// src/router/index.js
const router = createRouter({
  history: createWebHistory('/your-repo-name/'),
  // ...
})
```

## Form Data Structure

Form questions are defined in `src/data/formData.js`. To update questions:

1. Edit the `formData` object in `src/data/formData.js`
2. Each form block contains an array of questions
3. Question types: `radio`, `select`, `textarea`, `file`

Example:
```javascript
{
  id: "data-history",
  title: "Data History",
  questions: [
    {
      id: "q1",
      type: "textarea",
      label: "Question text here"
    },
    {
      id: "q2",
      type: "radio",
      label: "Yes/No question?",
      options: ["Yes", "No"]
    }
  ]
}
```

## State Management

The application uses Pinia for state management. The store (`src/stores/onboardingStore.js`) handles:

- Form answers storage
- Progress calculation
- Page/step completion tracking

## Customization

### Styling

The application uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- `src/style.css` - Global styles

### Components

All components are in `src/components/`. They follow Vue 3 Composition API patterns and can be easily customized.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for user testing purposes.
