export default function RugsLoading() {
  return (
    <div className="bg-[#FAF9F6] w-full min-h-screen pb-20">
      {/* Hero Skeleton */}
      <div className="w-full h-[300px] bg-[#1A1512] flex items-center justify-center">
        <div className="w-64 h-8 bg-white/10 rounded animate-pulse" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Skeleton */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Grid Skeletons */}
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-48 mb-8 animate-pulse" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 h-[420px] flex flex-col justify-between animate-pulse">
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl mb-4" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-8 bg-gray-200 rounded w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}