import { Coffee } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { subscribeNewsletter } from '../api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await subscribeNewsletter(email);
      toast.success('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Coffee className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">KOODHAA CAFE</span>
            </div>
            <p className="text-amber-200">
              Crafting perfect moments, one cup at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-amber-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-amber-200 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-amber-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-amber-200 mb-4">Subscribe to get special offers and updates.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-amber-700 px-4 py-2 rounded-r-md hover:bg-amber-600 transition-colors disabled:opacity-50"
              >
                {loading ? '...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-amber-800 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} KOODHAA CAFE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}