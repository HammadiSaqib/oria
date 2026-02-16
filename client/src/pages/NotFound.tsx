import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <Shield className="w-20 h-20 text-brand-navy mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-brand-navy mb-4 font-serif">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. 
          Please return to our home page to continue.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-brand-navy hover:bg-brand-charcoal">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
