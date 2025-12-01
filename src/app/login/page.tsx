'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import codes from '@/lib/codes.json';

type Codes = { [key: string]: number };

export default function LoginPage() {
  const [username, setUsername] = useState('airbnb@kyriba.com');
  const [password, setPassword] = useState('demo123');
  const [customerCode, setCustomerCode] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const getCurrentCode = () => {
      const now = new Date();
      const minuteOfDay = now.getHours() * 60 + now.getMinutes();
      const currentCode = (codes as Codes)[minuteOfDay.toString()];
      setCustomerCode(currentCode ? currentCode.toString() : '');
    };

    getCurrentCode();
    const interval = setInterval(getCurrentCode, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const minuteOfDay = now.getHours() * 60 + now.getMinutes();
    const correctCode = (codes as Codes)[minuteOfDay.toString()]?.toString();

    if (username === 'airbnb@kyriba.com' && password === 'demo123' && customerCode === correctCode) {
      router.push('/home');
    } else {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Invalid username, password, or customer code.',
      });
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white">
          <div 
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '150px solid transparent',
              borderRight: '150px solid transparent',
              borderBottom: '100px solid #2c3e50'
            }}
          ></div>
        </div>
        <div className="w-full max-w-sm z-10">
          <div className="flex justify-center mb-8">
            <Image src="/kyriba-logo.svg" alt="Kyriba Logo" width={120} height={40} className="filter brightness-0 invert" />
          </div>
          <h1 className="text-sm font-semibold text-gray-500 mb-6 text-center">ACCOUNT LOGIN</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-xs text-gray-600">Username</Label>
              <Input 
                id="username" 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-100 border-none text-black"
              />
            </div>
            <div>
              <Label htmlFor="customerCode" className="text-xs text-gray-600">Customer Code</Label>
              <Input 
                id="customerCode" 
                type="text"
                value={customerCode}
                onChange={(e) => setCustomerCode(e.target.value)}
                className="bg-gray-100 border-none text-black"
              />
            </div>
            <div>
              <Label htmlFor="password"  className="text-xs text-gray-600">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 border-none text-black"
              />
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMe" />
                <Label htmlFor="rememberMe">Remember Me</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="singleSignOn" />
                <Label htmlFor="singleSignOn">Single Sign On</Label>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">Show Virtual Keyboard</Button>
            <Button type="submit" className="w-full bg-gray-800 text-white hover:bg-gray-900">Log In</Button>
          </form>
          
          <div className="mt-8 text-xs text-gray-500">
            <p className="font-semibold mb-2">Trouble logging in?</p>
            <p className='mb-4'>By signing in, you agree to our <a href="#" className="underline">terms of use policy</a>.</p>
            <p>We use cookies to ensure that our website and services work properly. These cookies are dropped to provide core services. These services and features won't work without them and are therefore used automatically.</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#2c3e50] flex items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-[150%] h-[120%]">
          <div className="absolute w-full h-full bg-[#34495e] transform -rotate-12 origin-bottom-left"></div>
          <div className="absolute w-full h-full bg-[#bdc3c7] transform -rotate-12 origin-bottom-left" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}></div>
          <div className="absolute w-full h-full bg-[#2c3e50] transform -rotate-12 origin-bottom-left" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-white text-6xl font-light">Welcome <br />to Liquidity <br />Performance.</h2>
        </div>
      </div>
    </div>
  );
}
