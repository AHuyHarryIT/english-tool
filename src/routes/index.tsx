import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App
});

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
        <p className="text-5xl font-bold text-red-500 uppercase">
          Hello world :V
        </p>
      </div>
    </>
  );
}
