import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold tracking-tighter text-black mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        We couldn't find the page you're looking for. It might have been moved, renamed, or temporarily hidden.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
