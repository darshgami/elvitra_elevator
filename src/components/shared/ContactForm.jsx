import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="premium-card p-12 text-center bg-white"
      >
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-elvitra-text-main mb-3">Message Sent Successfully</h3>
        <p className="text-elvitra-text-muted">
          Thank you for reaching out. Our engineering team will contact you shortly to discuss your requirements.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card p-8 md:p-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold tracking-wider uppercase text-elvitra-text-main mb-2">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full bg-elvitra-secondary border border-elvitra-border rounded-lg px-4 py-3 text-elvitra-text-main focus:outline-none focus:border-elvitra-accent focus:ring-1 focus:ring-elvitra-accent transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold tracking-wider uppercase text-elvitra-text-main mb-2">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            required
            className="w-full bg-elvitra-secondary border border-elvitra-border rounded-lg px-4 py-3 text-elvitra-text-main focus:outline-none focus:border-elvitra-accent focus:ring-1 focus:ring-elvitra-accent transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-bold tracking-wider uppercase text-elvitra-text-main mb-2">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full bg-elvitra-secondary border border-elvitra-border rounded-lg px-4 py-3 text-elvitra-text-main focus:outline-none focus:border-elvitra-accent focus:ring-1 focus:ring-elvitra-accent transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-bold tracking-wider uppercase text-elvitra-text-main mb-2">City / Location</label>
          <input 
            type="text" 
            id="city" 
            className="w-full bg-elvitra-secondary border border-elvitra-border rounded-lg px-4 py-3 text-elvitra-text-main focus:outline-none focus:border-elvitra-accent focus:ring-1 focus:ring-elvitra-accent transition-colors"
            placeholder="Ahmedabad, Gujarat"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="buildingType" className="block text-sm font-bold tracking-wider uppercase text-elvitra-text-main mb-2">Building Type</label>
        <select 
          id="buildingType"
          className="w-full bg-elvitra-secondary border border-elvitra-border rounded-lg px-4 py-3 text-elvitra-text-main focus:outline-none focus:border-elvitra-accent focus:ring-1 focus:ring-elvitra-accent transition-colors appearance-none"
        >
          <option value="">Select Building Type</option>
          <option value="residential">Residential Complex</option>
          <option value="commercial">Commercial Tower</option>
          <option value="hospital">Hospital / Healthcare</option>
          <option value="industrial">Industrial / Warehouse</option>
          <option value="hotel">Hotel / Hospitality</option>
          <option value="villa">Private Villa / Bungalow</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-bold tracking-wider uppercase text-elvitra-text-main mb-2">Project Requirements</label>
        <textarea 
          id="message" 
          rows="4"
          className="w-full bg-elvitra-secondary border border-elvitra-border rounded-lg px-4 py-3 text-elvitra-text-main focus:outline-none focus:border-elvitra-accent focus:ring-1 focus:ring-elvitra-accent transition-colors resize-none"
          placeholder="Please describe your elevator requirements, number of floors, capacity needed, etc."
        ></textarea>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        fullWidth 
        icon={Send}
        className={status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}
      >
        {status === 'submitting' ? 'Sending Request...' : 'Submit Enquiry'}
      </Button>
    </form>
  );
}
