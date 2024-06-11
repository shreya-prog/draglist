import Head from 'next/head';

import DraggableList from "@components/DraggableList";

export default function Home() {
  return (
      <div>
        <Head>
          <title>Draggable List</title>
          <meta name="description" content="Draggable list with Next.js and Tailwind CSS" />
        </Head>
        <main className="flex justify-center items-center min-h-screen bg-gray-800">
          <div className="w-full max-w-md">
            <DraggableList />
          </div>
        </main>
      </div>
  );
}
