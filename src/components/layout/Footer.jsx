import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Share2, Globe, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const elevatorLinks = [
  { label: 'Passenger Elevator', href: '/products/passenger-auto' },
  { label: 'Capsule Elevator', href: '/products/capsule' },
  { label: 'Hospital Elevator', href: '/products/hospital' },
  { label: 'Home Lift', href: '/products/home-bungalow' },
  { label: 'MRL Elevator', href: '/products/mrl' },
  { label: 'Hydraulic Elevator', href: '/products/hydraulic' },
  { label: 'Goods Elevator', href: '/products/goods-freight' },
  { label: 'Car Elevator', href: '/products/car-automobile' },
];

const branches = ['Ahmedabad', 'Junagadh', 'Jamnagar', 'Rajkot', 'Surat', 'Valsad-Vapi', 'Vadodara', 'Navsari', 'Bhavnagar'];

export default function Footer() {
  return (
    <footer className="bg-elvitra-secondary pt-20 border-t border-elvitra-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Col 1 - Brand (spans 4 cols on large screens) */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6 inline-flex">
              <div className="w-10 h-10 bg-elvitra-text-main rounded-md flex items-center justify-center font-bold text-white text-xl">E</div>
              <div>
                <span className="text-xl font-bold tracking-wider text-elvitra-text-main block leading-none">ELVITRA</span>
                <span className="block text-[10px] tracking-[0.2em] text-elvitra-text-muted uppercase mt-1 font-medium">Elevator</span>
              </div>
            </Link>
            <p className="text-elvitra-text-muted text-base leading-relaxed mb-8 max-w-sm">
              Premium elevator solutions for modern India. Engineering trust and elevating lives across the nation with innovative vertical mobility.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2, href: '#', label: 'Facebook' },
                { icon: Globe, href: '#', label: 'Instagram' },
                { icon: MessageCircle, href: 'https://wa.me/918866643510', label: 'WhatsApp' },
                { icon: Share2, href: '#', label: 'Twitter' }
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white border border-elvitra-border flex items-center justify-center text-elvitra-text-main hover:text-white hover:bg-elvitra-accent hover:border-elvitra-accent transition-all shadow-sm">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links (spans 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase text-elvitra-text-main mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-base text-elvitra-text-muted hover:text-elvitra-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-elvitra-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Elevator Types (spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-widest uppercase text-elvitra-text-main mb-6">Elevator Types</h3>
            <ul className="space-y-4">
              {elevatorLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-base text-elvitra-text-muted hover:text-elvitra-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-elvitra-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact (spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-widest uppercase text-elvitra-text-main mb-6">Contact Info</h3>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-elvitra-border flex items-center justify-center shrink-0">
                   <MapPin size={18} className="text-elvitra-accent" />
                </div>
                <p className="text-base text-elvitra-text-muted leading-relaxed pt-2">Office No. 16, Laxmi Plaza, Beside Subh Hotel, Sanala Road, Morbi-363641, Gujarat</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-elvitra-border flex items-center justify-center shrink-0">
                   <Phone size={18} className="text-elvitra-accent" />
                </div>
                <div className="pt-1">
                  <a href="tel:+919979964474" className="block text-base font-medium text-elvitra-text-main hover:text-elvitra-accent transition-colors">+91 99799 64474</a>
                  <a href="tel:+918866643510" className="block text-base font-medium text-elvitra-text-main hover:text-elvitra-accent transition-colors mt-1">+91 88666 43510</a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-elvitra-border flex items-center justify-center shrink-0">
                   <Mail size={18} className="text-elvitra-accent" />
                </div>
                <a href="mailto:info.elvitraelevator@gmail.com" className="text-base text-elvitra-text-muted hover:text-elvitra-accent transition-colors pt-1">info.elvitraelevator@gmail.com</a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-elvitra-border">
              <p className="text-xs font-bold tracking-widest uppercase text-elvitra-text-main mb-3">Service Network</p>
              <p className="text-sm text-elvitra-text-muted leading-relaxed">{branches.join(' · ')}</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-elvitra-border bg-white py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-elvitra-text-muted">© {new Date().getFullYear()} Elvitra Elevator. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm font-medium text-elvitra-text-muted">
            <a href="#" className="hover:text-elvitra-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-elvitra-accent transition-colors">Terms of Service</a>
            <span className="px-3 py-1 bg-elvitra-secondary border border-elvitra-border rounded-full text-elvitra-accent text-xs font-bold tracking-wider">MAKE IN INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
