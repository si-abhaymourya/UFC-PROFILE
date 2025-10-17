# UFC Fighter Profile - Alex Pereira

A modern, responsive UFC fighter profile built with Next.js, React, TypeScript, and Tailwind CSS. This project showcases Alex Pereira's fighting statistics, history, and achievements

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **Charts**: Chart.js with react-chartjs-2
- **API**: JSON Server for mock data
- **Icons**: Custom SVG icons stored in JSON

## 🏗️ Project Structure

```
ufc-profile-app/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind config
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── charts/              # Chart components
│   │   │   └── UnifiedChart.tsx # Single unified chart component
│   │   ├── Hero.tsx             # Hero section with video
│   │   ├── Spotlight.tsx        # Carousel section
│   │   ├── StatsSection.tsx     # Statistics and charts
│   │   ├── FightHistory.tsx     # Fight history table
│   │   └── InfoTabs.tsx         # Tabbed information
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   └── utils/
│       └── api.ts               # Consolidated API utility functions
├── data/                        # JSON data files
│   └── db.json                  # Consolidated JSON Server database
└── public/
    ├── alex-pereira.mp4         # Hero video
    └── ufc320.mp4               # Additional video
```

## 🎨 Components

### Hero Section
- Video background with hover effects
- Mute/unmute functionality
- Fighter information overlay

### Spotlight Carousel
- News and video cards
- Smooth transitions
- Navigation controls

### Statistics Section
- Unified chart component supporting multiple chart types (Doughnut, Bar, Pie)
- Key performance metrics
- Strike distribution analysis
- Consolidated chart management for better maintainability

### Fight History
- Responsive data table
- Fight records and results
- Action buttons

### Information Tabs
- Bio information
- Fighter facts
- UFC history timeline
- Q&A section

## 📊 Data Management

All data is managed through JSON Server with a single consolidated endpoint:

- `GET /api` - Complete fighter profile data including:
  - Fighter information
  - Spotlight carousel items
  - Fighting statistics
  - Fight records
  - Tab content
  - SVG icon paths
    
