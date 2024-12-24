import React from 'react'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LayoutDashboardIcon, PenBoxIcon } from 'lucide-react'
import checkUser from '@/lib/checkUser'
const Header = async() => {
    await checkUser()
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/">
          <Image
            src={'/logo.png'}
            alt="logo"
            width={60}
            height={200}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboardIcon size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link
              href="/transcation/create"
              className="flex items-center gap-2"
            >
              <Button>
                <PenBoxIcon size={18} />
                <span className="hidden md:inline">transcation</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
