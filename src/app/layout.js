import { Navbar } from "./components";
import './globals.css'

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex flex-col min-h-screen bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 text-white">
        <body>
          <Navbar />
          <main className="flex-1 overflow-auto">{children}</main>
        </body>
      </div>
    </html>
  )
}
