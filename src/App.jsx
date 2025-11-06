import Hero from './components/Hero';
import Story from './components/Story';
import Event from './components/Event';
import GiftsGalleryRSVP from './components/GiftsGalleryRSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0f0d0c] text-[#2a221f] antialiased">
      <Hero />
      <Story />
      <Event />
      <GiftsGalleryRSVP />
      <Footer />
    </div>
  );
}

export default App;
