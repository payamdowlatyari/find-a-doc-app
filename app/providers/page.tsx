"use client";

import TableView from "../components/TableView";

export default function ProviderPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start px-4">
      <div className="mb-32 mt-8 lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <TableView />
      </div>
    </main>
  );
}
