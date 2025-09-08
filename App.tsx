import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants/slides';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import DownloadIcon from './components/icons/DownloadIcon';
import EnterFullscreenIcon from './components/icons/EnterFullscreenIcon';
import ExitFullscreenIcon from './components/icons/ExitFullscreenIcon';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleToggleFullscreen = async () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      try {
        await element.requestFullscreen();
      } catch (err) {
        console.error(`Error attempting to enable full-screen mode: ${err instanceof Error ? err.message : err}`);
      }
    } else {
      try {
        await document.exitFullscreen();
      } catch (err) {
        console.error(`Error attempting to exit full-screen mode: ${err instanceof Error ? err.message : err}`);
      }
    }
  };
  
  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    
    // Allow UI to update to show loading state
    await new Promise(resolve => setTimeout(resolve, 100));

    const { jsPDF } = (window as any).jspdf;
    const html2canvas = (window as any).html2canvas;

    if (!jsPDF || !html2canvas) {
        console.error("PDF generation libraries not loaded!");
        setIsGeneratingPdf(false);
        return;
    }

    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [16, 9] // 16:9 aspect ratio
    });

    const slideElements = document.querySelectorAll('.slide-container');
    if (slideElements.length === 0) {
        console.error("Could not find slide elements to capture.");
        setIsGeneratingPdf(false);
        return;
    }

    const originalSlide = currentSlide;
    const appElement = document.getElementById('presentation-container');
    appElement?.classList.add('pdf-generating');

    for (let i = 0; i < SLIDES.length; i++) {
        setCurrentSlide(i);
        
        // Wait for React to re-render. A short delay is enough since transitions are disabled.
        await new Promise(resolve => setTimeout(resolve, 50));

        const elementToCapture = slideElements[i] as HTMLElement;
        if (!elementToCapture) continue;

        const canvas = await html2canvas(elementToCapture, {
            scale: 2, // Higher resolution
            backgroundColor: '#111827', // Match slide background
            useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        
        if (i < SLIDES.length - 1) {
            pdf.addPage();
        }
    }

    pdf.save('bitcoin-utxo-deck.pdf');
    
    appElement?.classList.remove('pdf-generating');
    setCurrentSlide(originalSlide);
    setIsGeneratingPdf(false);
  };


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div id="presentation-container" className="flex flex-col h-screen w-full bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white antialiased overflow-hidden">
       <header className="w-full p-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-xl font-bold text-gray-200">Bitcoin UTXO Deck</h1>
        </div>
        <div className="flex items-center space-x-2">
            <ProgressBar current={currentSlide + 1} total={SLIDES.length} />
             <button
                onClick={handleToggleFullscreen}
                className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold flex items-center justify-center transition-colors duration-300 hover:bg-gray-700"
                aria-label={isFullscreen ? 'Exit full screen' : 'Enter full screen'}
                title={isFullscreen ? 'Exit full screen' : 'Enter full screen'}
            >
                {isFullscreen ? <ExitFullscreenIcon className="w-5 h-5" /> : <EnterFullscreenIcon className="w-5 h-5" />}
            </button>
            <button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold flex items-center justify-center transition-colors duration-300 enabled:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-wait"
                aria-label="Download as PDF"
                title="Download as PDF"
            >
                {isGeneratingPdf ? (
                    <span className="text-sm px-2 animate-pulse">Generating...</span>
                ) : (
                    <DownloadIcon className="w-5 h-5" />
                )}
            </button>
        </div>
       </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full h-full max-w-5xl max-h-[600px]">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`slide-container absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Slide
                title={slide.title}
                content={slide.content}
                isActive={currentSlide === index}
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full p-4 z-10">
        <Navigation
          onPrev={goToPrevSlide}
          onNext={goToNextSlide}
          current={currentSlide}
          total={SLIDES.length}
        />
      </footer>
    </div>
  );
};

export default App;