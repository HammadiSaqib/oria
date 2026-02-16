import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Shield, ArrowLeft, Mail, Key } from 'lucide-react';
import Button from '../components/ui/Button';

const ClientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login
    setTimeout(() => {
      setIsLoading(false);
      alert('This is a demo. Login functionality would integrate with backend/CRM.');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-brand-navy relative overflow-hidden items-center justify-center">
         <div className="absolute inset-0 bg-brand-navy z-0">
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
         </div>
         
         <div className="relative z-10 text-center px-12">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm border border-white/10">
                 <Shield className="w-10 h-10 text-brand-gold" />
             </div>
             <h2 className="text-4xl font-bold text-white mb-6 font-serif">Welcome Back</h2>
             <p className="text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
                 Access your secure dashboard to track your progress, upload documents, and communicate with your dedicated specialist.
             </p>
         </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mb-10">
                <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-brand-navy mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <h2 className="text-3xl font-bold text-brand-navy font-serif">Client Portal</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Please sign in to your account
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full pl-10 sm:text-sm border-gray-300 rounded-lg focus:ring-brand-gold focus:border-brand-gold py-3"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Key className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full pl-10 sm:text-sm border-gray-300 rounded-lg focus:ring-brand-gold focus:border-brand-gold py-3"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-brand-navy focus:ring-brand-navy border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-brand-navy hover:text-brand-gold transition-colors">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div>
                    <Button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-brand-navy hover:bg-brand-charcoal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-navy transition-all hover:-translate-y-1"
                        isLoading={isLoading}
                    >
                        <Lock className="w-4 h-4 mr-2" />
                        Secure Sign In
                    </Button>
                </div>
            </form>

            <div className="mt-8">
                 <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Secure 256-bit Encryption
                      </span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
