import Header from '@/components/Header';
import Hero from '@/components/Hero';
import News from '@/components/News';
import About from '@/components/About';
import Activities from '@/components/Activities';
import Members from '@/components/Members';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <About />
      <Activities />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
}