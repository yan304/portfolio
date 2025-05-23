import Image from "next/image";

export const Home = () => {
  return <div className="flex justify-around items-center min-h-screen">
    <div className="flex flex-col ">
      <div className="text-3xl text-blue-400 font-light">
        Welcome to my porfolio!
      </div>
      <div className="text-7xl font-medium py-2 leading-[1.5]">
        Hello, my<br />
        name's Marcelino.
      </div>
      <div className="text-3xl font-light">
        I'm a visual designer in Philippines.<br />
        Working as a Software Engineer<br />
        for 4 years.
      </div>
      <div className="flex justify-around pt-16 gap-12">
        <button type="button" class="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 ">
          Download cv
        </button>
        <button type="button" class="text-white w-full hover:text-white border-4 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          See my work
        </button>
      </div>
    </div>
    <Image
      src="/Portfolio.png"
      alt="Personal Picture"
      width={700}
      height={38}
      priority
    />
    <div className="flex flex-col absolute right-12">
      <a
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2"
        href="https://www.linkedin.com/in/marcelino-yu-jr-216160212/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="rounded-xl"
          src="/linkedin.png"
          alt="Personal Picture"
          width={30}
          height={38}
          priority
        />
      </a>
      <a
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2"
        href="https://github.com/yan304"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
}
