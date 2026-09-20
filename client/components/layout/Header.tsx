"use client"
import Link from 'next/link'
import Nav from './Nav'
import Button from '../ui/Button'
import { Search, ShoppingBasket, UserRound } from 'lucide-react'
import { useNavDropMenu } from '@/context/NavContext'

export default function Header() {
  const { toggleMenu } = useNavDropMenu()
  return (
    <header className='flex z-50 relative items-center justify-center w-full'>
      <div className='max-w-330 justify-between py-2 w-full mx-auto px-5 md:gap-10 xl:gap-23.5 md:py-8 xl:py-5 flex items-center'>
        <Link href={'/'} className='capitalize font-bold text-6 leading-8 text-[#000000]'>
          f<span className='text-[Primary color]'>oo</span>dtuck
        </Link>

        <Nav />

        <div className='flex items-center gap-4'>
          <Button >
            <Search size={16} className='w-5 h-5 md:w-4 md:h-4 ' />
          </Button>
          <Button  className='hidden md:block'>
            <UserRound size={16} className='w-4 h-4 ' />
          </Button>
          <Button className='fixed bottom-15 md:static bg-white md:bg-transparent p-3 md:p-0 md:shadow-none right-6  md:border-noneborder shadow-xl border-gray-200 rounded-full'>
            <ShoppingBasket size={16} className='w-5 h-5 md:w-4 md:h-4 text-blue-500  md:text-gray-700' />
          </Button>
          <Button handleClick={toggleMenu} className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-2 duration-200 rounded-lg hover:bg-gray-100 focus:outline-none md:hidden"
            aria-label="Toggle menu">
            <span className="w-6 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="w-6 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="w-6 h-0.5 bg-gray-700 rounded-full"></span>
          </Button>
        </div>
     </div>
    </header>
  )
}

