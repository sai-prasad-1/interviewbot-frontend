"use client"
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from 'axios';
import { API_BASE_URL } from '@/utils/config';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
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
      // Make the POST request to your registration endpoint
      const response = await axios.post(API_BASE_URL+"register", {
        username:name,
        email,
        password,
      });
      console.log(response);
      if (response.status!=200) {
        throw new Error('Failed to login');
      }
      localStorage.setItem('userId', response.data.id);
      router.push('/interviews')
    } catch (error : any) {
      setError(error.response?.data?.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 mx-auto w-full h-screen place-items-center">
      <div className="flex items-center justify-center">
        <img
          alt="Login Image"
          className="h-screen w-full object-cover"
          height="400"
          src="https://plus.unsplash.com/premium_photo-1678917191060-cc688f061f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D"
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width={500}
        />
      </div>
      <div className="mx-auto max-w-2xl w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
        </div>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Jane Doe" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="jane@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Create an account'}
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  )
}
