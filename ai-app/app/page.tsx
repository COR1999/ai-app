import Image from "next/image"
import { ReactNode } from 'react'
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <h1>Contact Page</h1>
        {/* Page content */}
        <div className="bg-red-500 text-white p-4 m-4">
          If you see a red box with white text, Tailwind is working!
        </div>
      </div>
      <Footer />
    </div>
  );
}


