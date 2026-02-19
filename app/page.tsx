import Link from 'next/link';
import DotGrid from '@/components/DotGrid';
import { ThemeTogglerButton } from '@/components/animate-ui/components/buttons/theme-toggler';

export default function LandingPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden p-8">
      {/* Theme Toggler */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeTogglerButton variant="outline" size="sm" />
      </div>

      {/* Background DotGrid */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <DotGrid
          dotSize={4}
          gap={24}
          baseColor="#3b82f6"
          activeColor="#60a5fa"
          proximity={120}
        />
      </div>

      <main className="max-w-2xl text-center space-y-6 relative z-10">
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to <span className="text-primary">Structify</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore and visualize GitHub repositories with ease.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/docs"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Go to Docs
          </Link>
        </div>
      </main>
    </div>
  );
}