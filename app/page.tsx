"use client";

import Doctors from "./components/Doctors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start px-4">
      <div className="mb-32 mt-8 lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Doctors />
      </div>
    </main>
  );
}
