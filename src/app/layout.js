import { Navbar } from "./components";
import './globals.css'

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex flex-col min-h-screen text-white">
        <body>
          <Navbar />
          <main className="z-10 flex justify-center h-[calc(100vh-78px)]" >{children}</main>
        </body>
      </div>
    </html>
  )
}
