import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header - Black Bar */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-lg">MD</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:opacity-70 transition-opacity">
                about
              </a>
              <a href="#book" className="text-sm hover:opacity-70 transition-opacity">
                book
              </a>
              <a href="#portfolio" className="text-sm hover:opacity-70 transition-opacity">
                portfolio
              </a>
              <a href="#blog" className="text-sm hover:opacity-70 transition-opacity">
                blog
              </a>
              <a href="#contact" className="text-sm hover:opacity-70 transition-opacity">
                contact
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Image */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/min.png"
            alt="Portrait"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-top"
            priority
          />
          {/* Abstract brushstrokes overlay on left half */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute left-0 top-0 w-1/2 h-full">
              <div className="absolute top-10 left-4 w-32 h-20 bg-yellow-400/50 rounded-full blur-2xl"></div>
              <div className="absolute top-32 left-8 w-24 h-32 bg-blue-300/50 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-12 w-28 h-24 bg-pink-400/50 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-6 w-20 h-20 bg-black/30 rounded-full blur-xl"></div>
              <div className="absolute top-20 left-2 w-16 h-16 bg-yellow-300/60 rounded-full blur-lg"></div>
            </div>
          </div>
          {/* Extended design elements on right side to fill screen and continue aesthetic */}
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div className="absolute top-16 right-8 w-40 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-12 w-28 h-40 bg-pink-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-24 right-16 w-36 h-28 bg-yellow-300/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-4 w-24 h-24 bg-purple-200/25 rounded-full blur-2xl"></div>
            <div className="absolute bottom-12 right-8 w-20 h-20 bg-blue-300/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-zinc-500 text-sm uppercase tracking-wider mb-12">
            SOME OF MY LATEST WORK
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏉</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Canberra vs South Sydney</h3>
                <p className="text-sm text-zinc-600 mb-4">11 May, 8:00PM, 120 markets</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full mb-2"></div>
                    <span className="text-sm font-medium">1.52</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full mb-2"></div>
                    <span className="text-sm font-medium">2.32</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 mb-2">Creating a lean design system</p>
                <span className="inline-block text-xs text-zinc-500 uppercase tracking-wide">Design system</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-full h-48 bg-zinc-200 mb-4 rounded"></div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  What today&apos;s home buyer wants from their renovation
                </h3>
                <p className="text-xs text-zinc-500 mb-4">remodelista.com 2 mins ago</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs text-zinc-600">❤️ 123</span>
                  <span className="text-xs text-zinc-600">💬 0</span>
                  <span className="text-xs text-zinc-600">📤 11</span>
                </div>
                <p className="text-sm text-zinc-600 mb-2">Interior design news feed</p>
                <span className="inline-block text-xs text-zinc-500 uppercase tracking-wide">Side project</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-full h-48 bg-zinc-100 rounded mb-4 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-xs text-zinc-600">From * 100,000 PTS</p>
                    <p className="text-xs text-zinc-600">65 Australia</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 mb-2">Qantas map search</p>
                <span className="inline-block text-xs text-zinc-500 uppercase tracking-wide">Product design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-100 mt-16 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Mihini. All rights reserved.
            </p>
            <nav className="flex items-center gap-6 text-sm text-zinc-600">
              <a href="#about" className="hover:text-zinc-900 transition-colors">about</a>
              <a href="#book" className="hover:text-zinc-900 transition-colors">book</a>
              <a href="#featured" className="hover:text-zinc-900 transition-colors">featured</a>
              <a href="#portfolio" className="hover:text-zinc-900 transition-colors">portfolio</a>
              <a href="#blog" className="hover:text-zinc-900 transition-colors">blog</a>
              <a href="#contact" className="hover:text-zinc-900 transition-colors">contact</a>
            </nav>
            <button className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
        </div>
        </div>
      </footer>
    </div>
  );
}
