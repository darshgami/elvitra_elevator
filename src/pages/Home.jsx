import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AboutPreview from '../components/home/AboutPreview';
import FeaturesGrid from '../components/home/FeaturesGrid';
import ProductsPreview from '../components/home/ProductsPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import ProjectsPreview from '../components/home/ProjectsPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogPreview from '../components/home/BlogPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FeaturesGrid />
      <ProductsPreview />
      <WhyChooseUs />
      <ServicesPreview />
      <ProjectsPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
