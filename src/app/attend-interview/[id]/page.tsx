"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { API_BASE_URL } from '@/utils/config';

type Chat = {
  message: string;
  type: "question" | "answer";
}

export default function Page({ params }: { params: { id: number } }) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>();
  const [chats, setChats] = useState<Chat[]>([]); // Modified: state for chats
  const router = useRouter();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(API_BASE_URL + `interview/${params.id}`);
        setQuestions(response.data.questions);

        // Add the first question to chats
        const initialQuestion: Chat = {
          message: response.data.questions[currentQuestionIndex].question,
          type: "question"
        };
        setChats([initialQuestion]); // Modified: Set initial question in chats
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, [params.id]);

  const handleAnswerQuestion = async (answer: string) => {
    try {
      await axios.post(API_BASE_URL + 'interview/question', { questionId: questions[currentQuestionIndex].id, answer });
      setUserAnswers([...userAnswers, answer]);

      // Add user's answer to chats
      const userAnswerChat: Chat = {
        message: answer,
        type: "answer"
      };
      setChats([...chats, userAnswerChat]); // Modified: Add user's answer to chats

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        const initialQuestion: Chat = {
          message: questions[currentQuestionIndex].question,
          type: "question"
        };
        setChats([...chats, initialQuestion]);
      } else {
        router.push('/home');
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-14 items-center justify-between border-b bg-gray-100 px-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Hirewise Bot</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Online</div>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          {chats.map((chat, index) => (
            <div key={index} className={chat.type === "answer" ? "flex justify-end" : "flex"}>
              <div className="max-w-[75%] space-y-1">
                <div className={`rounded-lg px-4 py-3 shadow-sm ${chat.type === "question" ? "bg-gray-50 text-black" : "bg-gray-100 text-gray-900"}`}>
                  {chat.message}
                </div>
                <div className="text-xs text-gray-500">{/* Timestamp */}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t bg-gray-100 px-4 py-3 ">
        <div className="flex items-center gap-2">
          <Input
            className="flex-1 bg-transparent"
            placeholder="Type your message..."
            type="text"
            value={answer || ''} // Add value attribute to Input component
            onChange={(e) => setAnswer(e.target.value)} // Update setAnswer directly with the new value
          />
          <Button className="rounded-full" size="icon" variant="ghost" onClick={() =>{handleAnswerQuestion(answer!)}}>
            <SendIcon className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function MoreHorizontalIcon(props: any) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}


function PaperclipIcon(props: any) {
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
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SendIcon(props: any) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SmileIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function VideoIcon(props: any) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
