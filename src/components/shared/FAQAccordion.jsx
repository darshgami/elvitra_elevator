import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={index} 
            className={`premium-card overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'border-elvitra-accent ring-1 ring-elvitra-accent shadow-md' : 'border-elvitra-border hover:border-gray-300'}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-bold pr-8 ${isOpen ? 'text-elvitra-accent' : 'text-elvitra-text-main'}`}>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-elvitra-accent text-white' : 'bg-elvitra-secondary text-elvitra-text-main'}`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-5 text-elvitra-text-muted leading-relaxed border-t border-elvitra-border pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
