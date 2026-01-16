import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { MarketingQuiz } from './components/MarketingQuiz';
import { ChefTheory } from './components/ChefTheory';
import { Services } from './components/Services';
import { ROICalculator } from './components/ROICalculator';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Workflow } from './components/Workflow';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { ContentProvider } from './context/ContentContext';
import { AdminPanel } from './components/AdminPanel';
import { SEOManager } from './components/SEOManager';

function App() {
  return (
    <ContentProvider>
      <SEOManager />
      <div className="bg-cyberDark min-h-screen text-white font-sans selection:bg-brandOrange selection:text-white">
        <Navbar />
        
        <main>
          <Hero />
          <PainPoints />
          {/* New Interactive Section 1: Engage with a quiz */}
          <MarketingQuiz />
          
          <ChefTheory />
          
          <Services />
          
          {/* New Interactive Section 2: Show value with numbers */}
          <ROICalculator />
          
          <Portfolio />
          <Testimonials />
          <Workflow />
          <ContactForm />
        </main>

        <Footer />
        
        {/* Settings Panel for Content Management */}
        <AdminPanel />

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/60126539881?text=Hello%20Jentzen%2C%20I%20am%20interested%20in%20your%20marketing%20services." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 px-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_#25D366] hover:-translate-y-1 transition-all animate-bounce flex flex-col items-center gap-1"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp 联系我</span>
        </a>
      </div>
    </ContentProvider>
  );
}

export default App;