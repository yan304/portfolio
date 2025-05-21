import { Navbar } from "./components";
import './globals.css'

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex flex-col min-h-screen text-white">
        <body>
          <Navbar />
          <main className="z-10" >{children}</main>
        </body>
      </div>
    </html>
  )
}
