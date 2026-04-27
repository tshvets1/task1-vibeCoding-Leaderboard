# Leaderboard

A modern, interactive leaderboard application built with React and Vite. Display rankings with advanced filtering capabilities, including search by name, filtering by year, quarter, and activity category.

## Features

- **Responsive Leaderboard**: Display ranked employees/contributors with real-time filtering
- **Advanced Filtering**: Filter by year, quarter, and activity category
- **Search Functionality**: Quick search by name or surname
- **Podium Display**: Highlight top 3 performers with a visual podium design
- **Activity Details**: Expandable rows showing detailed activity history with dates and points
- **Category Metrics**: Visual breakdown of points across multiple categories (Education, University Partnership, Public speaking)
- **Accessible**: Built with semantic HTML and ARIA labels for inclusive navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot module replacement
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint to check code quality
npm run lint
```

## Project Structure

```
src/
├── App.jsx           # Main leaderboard component with filtering logic
├── App.css           # Component styling
├── main.jsx          # React entry point
├── index.css         # Global styles
├── data/
│   └── leaderboard.js # Leaderboard data source
└── assets/           # Static assets
```

## Configuration

- **Vite**: Fast build tool configured in `vite.config.js`
- **ESLint**: Code quality rules in `eslint.config.js`
- **React**: Latest React 19 with React DOM

## Tech Stack

- **React 19**: UI library
- **Vite 8**: Next-generation frontend build tool
- **ESLint 10**: Code quality and linting

## License

[Add your license here]

## Contributing

[Add contribution guidelines here]
