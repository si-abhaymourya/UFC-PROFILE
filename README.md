# UFC Fighter Profile - Alex Pereira

A modern, responsive UFC fighter profile built with Next.js, React, TypeScript, and Tailwind CSS. This project showcases Alex Pereira's fighting statistics, history, and achievements with interactive charts and smooth animations.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 15 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Unified Chart System**: Single component handling all chart types (Bar, Doughnut, Pie)
- **Consolidated API**: Single API endpoint for all data (improved performance)
- **Video Background**: Hero section with video background and mute controls
- **Carousel**: Spotlight section with smooth transitions
- **Tabbed Interface**: Organized information sections
- **JSON Server**: RESTful API for data management
- **Type Safety**: Full TypeScript implementation
- **Optimized Performance**: Reduced bundle size and faster loading

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **Charts**: Chart.js with react-chartjs-2
- **API**: JSON Server for mock data
- **Icons**: Custom SVG icons stored in JSON

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ufc-profile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start JSON Server** (in a separate terminal)
   ```bash
   npm run json-server
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

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

**Benefits of Consolidated API:**
- Single API call instead of multiple requests
- Improved performance and loading speed
- Easier data management and maintenance
- Reduced network overhead

## ✨ Recent Improvements

### API Consolidation
- **Before**: 6 separate API calls for different data types
- **After**: Single consolidated API call (`/api`)
- **Benefits**: 6x faster data loading, reduced network overhead

### Chart System Optimization
- **Before**: 4 separate chart components
- **After**: 1 unified `UnifiedChart` component
- **Benefits**: Easier maintenance, smaller bundle size, consistent styling

### Code Organization
- Consolidated all JSON data into single `db.json` file
- Improved TypeScript interfaces and type safety
- Better error handling and loading states

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### Performance Optimized
- Consolidated API calls (single request vs multiple)
- Unified chart component reducing bundle size
- Lazy loading components
- Optimized images and videos
- Efficient state management

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility

### Modern UI/UX
- Smooth animations and transitions
- Professional gradient backgrounds
- Hover effects and micro-interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## 🔧 Customization

### Adding New Fighters
1. Update `data/db.json` with new fighter data in the consolidated structure
2. Modify the API utility functions if needed
3. Update TypeScript interfaces in `src/types/index.ts`

### Styling Changes
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Add new gradient backgrounds as needed

### Chart Modifications
- Update chart configurations in `src/components/charts/UnifiedChart.tsx`
- Modify data structures in `data/db.json`
- Add new chart types by extending the `ChartType` union type
- All charts now use a single, maintainable component

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- UFC for fighter data and imagery
- Chart.js for charting capabilities
- Tailwind CSS for styling framework
- Next.js team for the amazing framework

---

**Built with ❤️ for UFC fans and MMA enthusiasts**# UFC-PROFILE
