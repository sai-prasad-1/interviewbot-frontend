"use client"
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "@/utils/config";

interface User {
    id: number;
    username: string;
    password: string;
}

interface Question {
    id: number;
    question: string;
    score: number;
    answer: string;
}

interface Interview {
    id: number;
    role: string;
    level: string;
    user: User;
    questions: Question[];
}

type InterviewsData = Interview[];


export default function Interviews() {
    const [interviews, setInterviews] = useState<InterviewsData>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const response = await axios.get(API_BASE_URL + 'interviews');
                setInterviews(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching interviews:', error);
                setLoading(false);
            }
        };

        fetchInterviews();
    }, []);

    return (
        <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <div className="mb-6 md:mb-8">
                <h1 className="text-2xl font-bold md:text-3xl">Interviews</h1>
            </div>
            {loading ? (
                <p>Loading interviews...</p>
            ) : (

                <div className="grid gap-4 md:gap-6">
                    {!interviews ? <>Soory NoInteviews</> :

                        interviews.map(interview => (
                            <div className="flex" key={interview.id}>
                                <div  >
                                    <div className="rounded-lg bg-white p-4 shadow-sm block">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-lg font-medium md:text-xl">{interview.role}</h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Created by {interview.user.username} on April 29, 2024
                                                <br />
                                                <Link href={`/interviews/${interview.id}`} className="px-2 py-1 rounded bg-black text-white">View</Link>
                                                <Link href={`/attend-interview/${interview.id}`} className="px-2 py-1 ml-2 rounded border border-black text-black">Attend</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </main>
    );
}
