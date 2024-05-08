"use client"
import { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import axios from 'axios';
import { API_BASE_URL } from '@/utils/config';
import { useRouter } from 'next/navigation';

export default function CreateInterview() {
  const [jobRole, setJobRole] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState('5');
  const [jobLevel, setJobLevel] = useState('Entry Level');
  const [additionalInstructions, setAdditionalInstructions] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e:any) => {

      const userID = localStorage.getItem('userId');
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Make the POST request to create the interview
      const response = await axios.post(API_BASE_URL + 'interview', {
        role : jobRole,
        count : numberOfQuestions,
        level : jobLevel,
        userId : parseInt(userID!),
        additionalInstructions,
      });

      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to create interview');
      }
      console.log(response.data);
      router.push('/interviews');

      // If interview creation is successful, perform any necessary action
      // For example, you can redirect the user to another page
    } catch (error :any) {
      router.push('/interviews');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
    <Card className="w-full max-w-3xl">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl">Job Interview Question Generator</CardTitle>
        <CardDescription>
          Enter the job role, number of questions, and job level to generate interview questions.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-6 px-6 py-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="job-role">Job Role</Label>
              <Input id="job-role" placeholder="Enter the job role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
            </div>
            <div className="space-y-2 flex-col flex">
              <Label htmlFor="job-level">Job Level</Label>
              <select id="job-level" value={jobLevel} onChange={(e) => setJobLevel(e.target.value)} className='p-2 rounded-md border border-gray-300'>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>
            <div className="space-y-2 flex-col flex">
              <Label htmlFor="number-of-questions">Number of Questions</Label>
              <select id="number-of-questions" value={numberOfQuestions} onChange={(e) => setNumberOfQuestions(e.target.value)} className='p-2 rounded-md border border-gray-300'>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additional-instructions">Additional Instructions</Label>
              <Textarea
                className="min-h-[100px]"
                id="additional-instructions"
                placeholder="Enter additional instructions"
                value={additionalInstructions}
                onChange={(e) => setAdditionalInstructions(e.target.value)}
              />
            </div>
            <Button size="lg" type="submit" disabled={loading} className='mt-2'>
              {loading ? 'Generating Questions...' : 'Generate Questions'}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
