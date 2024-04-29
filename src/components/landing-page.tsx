
import Link from "next/link"

export function LandingPage() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex items-center" href="#">
          <BotIcon className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">Interview Bot</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            href="#"
          >
            Login
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-950"
            href="#"
          >
            Sign Up
          </Link>
        </div>
      </header>
      <main>
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-gray-100">
                  Ace Your Interviews with Our AI-Powered Interview Bot
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Our intelligent interview bot helps you prepare for your next job interview by providing personalized
                  feedback and practice sessions.
                </p>
                <div className="mt-6">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-950"
                    href="#"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  alt="Interview Bot"
                  className="mx-auto"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 sm:py-16 lg:py-20 dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-gray-100">
                Features of Our Interview Bot
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Our interview bot offers a range of features to help you ace your next interview.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900">
                  <FileQuestionIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">
                  Practice Interview Questions
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Our bot provides a wide range of practice interview questions to help you prepare.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900">
                  <ReplyIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">Personalized Feedback</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Our AI-powered bot provides personalized feedback on your responses to help you improve.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">Scheduling and Reminders</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Our bot helps you schedule practice sessions and sends reminders to keep you on track.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex items-center">
              <BotIcon className="h-6 w-6 mr-2 text-white" />
              <span className="text-white font-bold">Interview Bot</span>
            </div>
            <div className="text-gray-400 text-sm">© 2024 Interview Bot. All rights reserved.</div>
            <div className="flex items-center space-x-4">
              <Link className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                About
              </Link>
              <Link className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                Privacy
              </Link>
              <Link className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                Terms
              </Link>
              <Link className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function BotIcon(props:any) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function CalendarIcon(props:any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function FileQuestionIcon(props:any) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function ReplyIcon(props:any) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}
