# Qur'an Memorizer

A modern web application for memorizing the Qur'an with spaced repetition and progress tracking.

## Features

- **Dashboard**: Track your memorization progress with beautiful metrics
- **Study Sessions**: Organized learning with different categories
- **Progress Tracking**: Visual progress bars for each Surah
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works on all devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/DarkeyedDev/QuranMindMap.git
   cd QuranMindMap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard page
├── components/
│   ├── dashboard/         # Dashboard components
│   ├── ui/               # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    ├── mock-data.ts      # Sample data
    ├── types.ts          # TypeScript types
    └── utils.ts          # Utility functions
```

## Dashboard Components

- **MetricsOverview**: Daily progress, verses mastered, study time, current focus
- **StudySession**: Different study categories (review, practice, new)
- **ProgressTracker**: Surah-by-surah progress visualization
- **QuickActions**: Quick access to common actions
- **RecentActivity**: Timeline of recent memorization activities

## Development

### Adding New Components

1. Create component in appropriate directory
2. Export from index file if needed
3. Add TypeScript types in `lib/types.ts`
4. Update mock data in `lib/mock-data.ts` if needed

### Styling Guidelines

- Use Tailwind CSS classes
- Follow shadcn/ui component patterns
- Maintain responsive design (mobile-first)
- Use consistent spacing (multiples of 4)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.