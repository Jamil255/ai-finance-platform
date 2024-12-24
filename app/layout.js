import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'
export const metadata = {
  title: 'welth',
  description: 'ai finance ',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen"> {children}</main>
          <Toaster richColors />
          {/* Footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center px-4 text-gray-600">
              <p>Made with 📌Jamil Afzal</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}
