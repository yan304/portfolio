'use client'
import { usePathname } from "next/navigation"

const navigation = [
  { name: 'Home', link: '/home', current: true },
  { name: 'About', link: '/about', current: false },
  { name: 'Portfolio', link: '/portfolio', current: false },
  // { name: 'Testimonials', link: '/testimonials', current: false },
  // { name: 'Contact', link: '/contact', current: false },
]

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed w-full bg-[#222222] border-gray-200 dark:bg-gray-900 h-[78px] pt-2 z-[99]">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Marcelino</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((item, key) => (
              <li key={key}>
                <a key={key} href={item.link} className={pathname.includes(item.link) ? "block text-xl font-semibold py-2 px-3 text-pink-600 bg-blue-700 rounded-sm md:bg-transparent md:text-pink-600 md:p-0" :
                  "block text-xl font-semibold py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} aria-current="page">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
