export const CityPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* City Header Skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-300 rounded-md mb-4 w-64 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-md w-48 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded-md w-32 mt-2 animate-pulse"></div>
          </div>

          {/* Current Weather and Details Grid Skeleton */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Current Weather Skeleton */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="h-8 bg-gray-300 rounded-md mb-4 w-40 animate-pulse"></div>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-md mr-4 animate-pulse"></div>
                <div>
                  <div className="h-10 bg-gray-300 rounded-md mb-2 w-20 animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded-md w-24 animate-pulse"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded-md w-32 animate-pulse"></div>
            </div>

            {/* Weather Details Skeleton */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-8 bg-gray-300 rounded-md mb-4 w-20 animate-pulse"></div>
              <div className="space-y-3">
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded-md w-16 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-20 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Forecast Skeleton */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="h-8 bg-gray-300 rounded-md mb-4 w-40 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="h-6 bg-gray-300 rounded-md mb-2 w-20 mx-auto animate-pulse"></div>
                  <div className="w-12 h-12 bg-gray-300 rounded-md mx-auto mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-md mb-3 w-24 mx-auto animate-pulse"></div>

                  <div className="mb-3">
                    <div className="h-6 bg-gray-300 rounded-md mb-1 w-12 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-10 mx-auto animate-pulse"></div>
                  </div>

                  <div className="space-y-2">
                    {Array.from({ length: 4 }, (_, j) => (
                      <div
                        key={j}
                        className="flex justify-between items-center"
                      >
                        <div className="h-3 bg-gray-200 rounded-md w-8 animate-pulse"></div>
                        <div className="h-3 bg-gray-200 rounded-md w-10 animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <div className="h-3 bg-gray-200 rounded-md w-12 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded-md w-14 animate-pulse"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-3 bg-gray-200 rounded-md w-10 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded-md w-14 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button Skeleton */}
          <div className="mt-6">
            <div className="h-12 bg-gray-300 rounded-lg w-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
