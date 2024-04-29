"use client"
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { API_BASE_URL } from '@/utils/config';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Make the POST request to your login endpoint
      const response = await axios.post(API_BASE_URL+ 'login', {
        email,
        password,
      });
      
      
      
      fetch(API_BASE_URL+ 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status!=200) {
        throw new Error('Failed to login');
      }
      localStorage.setItem('userId', response.data.id);
      router.push('/interviews')
      console.log(response);
    } catch (error) {
      setError('Failed to login. Please try again.'+error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid max-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Image */}
      <div className="relative hidden lg:block">
        <img
          alt="Login Image"
          className="h-screen w-full object-cover"
          height="400"
          src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fHww"
          style={{
            aspectRatio: "600/800",
            objectFit: "cover",
          }}
          width="600"
        />
        <div className="absolute top-8 left-8">
          <MountainIcon className="h-8 w-8 text-gray-900 " />
          <span className="ml-2 text-2xl font-bold text-gray-900 font-[Montserrat, sans-serif]">
            Acme Inc
          </span>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          <div>
            <MountainIcon className="mx-auto h-12 w-12 text-gray-900 " />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900  font-[Montserrat, sans-serif]">
              Sign in to your account
            </h2>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label className="font-[Montserrat, sans-serif]" htmlFor="email">
                Email address
              </Label>
              <Input
                autoComplete="email"
                className="font-[Montserrat, sans-serif]"
                id="email"
                placeholder="name@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label className="font-[Montserrat, sans-serif]" htmlFor="password">
                Password
              </Label>
              <Input
                autoComplete="current-password"
                className="font-[Montserrat, sans-serif]"
                id="password"
                placeholder="Enter your password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full font-[Montserrat, sans-serif]" type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
            <p className='text-sm'>Don&apos;t have a account?<Link href="/auth/register" className='ml-1  underline text-black'>Signin</Link></p>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default Page
