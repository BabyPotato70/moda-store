export default function SkeletonLoader() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="skeleton h-10 w-1/2 mb-6 bg-surface-200 dark:bg-ink-700"></div>
      <div className="skeleton h-[400px] w-full mb-8 bg-surface-200 dark:bg-ink-700"></div>
      <div className="grid grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="skeleton h-64 w-full bg-surface-200 dark:bg-ink-700"></div>
            <div className="skeleton h-4 w-3/4 bg-surface-200 dark:bg-ink-700"></div>
            <div className="skeleton h-4 w-1/2 bg-surface-200 dark:bg-ink-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}