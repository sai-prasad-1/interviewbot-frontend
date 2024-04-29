
export function Interviews() {
  return (
    <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Interviews</h1>
      </div>
      <div className="grid gap-4 md:gap-6">
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium md:text-xl">Product Design Interview</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Created by Jane Doe on April 15, 2023</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium md:text-xl">Frontend Developer Interview</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Created by John Smith on March 28, 2023</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium md:text-xl">Backend Engineer Interview</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Created by Sarah Lee on February 12, 2023</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium md:text-xl">Data Analyst Interview</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Created by Michael Chen on January 20, 2023</p>
          </div>
        </div>
      </div>
    </main>
  )
}
