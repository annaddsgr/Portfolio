import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CustomCursor } from './components/layout/CustomCursor';
import { NotFound } from './components/layout/NotFound';
import { PageLoader } from './components/layout/PageLoader';
import { Home } from './Home';

import { SmoothScroll } from './components/layout/SmoothScroll';

// Lazy loading for heavy features/pages
const BriefingPage = lazy(() => import('./components/features/BriefingPage').then(module => ({ default: module.BriefingPage })));

export default function App() {
  return (
    <HashRouter>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/briefing" element={
          <div className="min-h-screen bg-[#FCF6EF] dark:bg-[#1a1515] transition-colors duration-500 antialiased md:cursor-none selection:bg-[#795558] selection:text-[#FCF6EF] dark:selection:bg-[#FCF6EF] dark:selection:text-[#1a1515]">
            <CustomCursor />
            <Toaster position="top-center" />
            <Suspense fallback={<PageLoader />}>
              <BriefingPage />
            </Suspense>
          </div>
        } />
        <Route path="*" element={
          <div className="min-h-screen bg-white dark:bg-[#1a1515] antialiased cursor-none">
            <CustomCursor />
            <NotFound />
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}
