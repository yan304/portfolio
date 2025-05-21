import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-5xl">
        Welcome to my Portfolio
        <a
          className="text-2xl rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/home"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </main>
    </div>
  );
}
