# CXEP - Speed Insights Demo

A Next.js application demonstrating Vercel Speed Insights integration for performance monitoring.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fabiofilhoff/CXEP.git
cd CXEP
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Speed Insights Integration

This project includes Vercel Speed Insights integration to track Core Web Vitals and performance metrics. The `SpeedInsights` component is automatically included in the root layout (`app/layout.tsx`).

### Building for Production

To build the application for production:

```bash
npm run build
npm start
```

### Linting

To run the linter:

```bash
npm run lint
```

## Deployment

This application is configured to be deployed on Vercel. To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel at [https://vercel.com](https://vercel.com)
3. Enable Speed Insights in the project settings
4. Vercel will automatically deploy your application

For more information about deploying to Vercel, visit the [Vercel Documentation](https://vercel.com/docs).

## Speed Insights Documentation

For more information about Speed Insights, visit the [official documentation](https://vercel.com/docs/speed-insights).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Speed Insights Package](https://github.com/vercel/speed-insights)

## License

This project is open source and available under the MIT License.
