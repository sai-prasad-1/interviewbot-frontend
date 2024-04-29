"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { API_BASE_URL } from '@/utils/config';

export default function Details({ params }: { params: { id: number } }) {
  const [interview, setInterview] = useState<any>(null); // Define state for interview data

  useEffect(() => {
    // Function to fetch interview data
    const fetchInterview = async () => {
      try {
        const response = await axios.get(API_BASE_URL+`interview/${params.id}`); // Fetch interview data
        console.log(response.data);
        setInterview(response.data); // Set interview data in state
      } catch (error) {
        console.error('Error fetching interview:', error);
      }
    };

    fetchInterview(); // Call fetchInterview function when component mounts
  }, [params.id]); // Re-fetch interview data when params.id changes

  return (
    <section className="bg-gray-50 py-12 md:py-16 w-screen h-screen overflow-scroll">
      <div className=" px-4 md:px-6 grid gap-6 md:gap-8">
        <div className="flex flex-col gap-1 items-start">
          <h1 className="text-3xl font-bold tracking-tight">Interview Questions</h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
            Got a question? We&apos;ve got answers. If you have some other questions, see our support center.
          </p>
        </div>
        <div className="grid gap-6">
          {interview ?
          
          interview && interview.questions.map((question: any) => (
            <div key={question.id} className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold">{question.question}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {question.answer}
                  </p>
                </div>
                <div>
                  {question.score}
                </div>
              </div>
            </div>
          )):<>No Interviews</>}
        </div>
      </div>
    </section>
  );
}
