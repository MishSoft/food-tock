"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { Volume2, VolumeOff } from 'lucide-react'

export default function Hero() {
  const [isPlay, setIsPlay] = useState(false)
  return (
    <section className='relative'>
      <div className='w-full h-150 relative after:absolute after:w-full after:h-full after:bg-linear-to-r after:from-black/80 after:via-black/0 after:to-black/80 after:top-0'>
        <video autoPlay loop muted={!isPlay} className='object-cover w-full h-full'>
          <source src="/assets/hero/restaurant.mp4" />
        </video>

      </div>
      <div className='max-w-330  absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] mx-auto flex w-full items-center justify-center px-5'>
        <div className='flex flex-col items-center w-full gap-8'>
          <div className='flex flex-col  relative '>
            <span className='font-bold text-[18px] leading-6.5 text-center  italic text-white'>Healthy & Testy Food</span>
            <h1 className='font-bold text-[60px] text-center leading-17 text-white '>
              Enjoy Healthy Life
              & Testy Food.
            </h1>
            {/* <Image src={'/assets/hero/stars.png'}
              width={83}
              height={83}
              alt='Stars Image'
              className='absolute right-10 top-24'
            /> */}
          </div>
          <p className='text-[16px] leading-6 text-center font-normal text-white max-w-106'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>

          <div className='flex items-center w-full justify-center gap-4 flex-col md:flex-row'>
            <Button className='py-4 w-full md:w-auto px-12 text-white bg-[#195A00]/20 backdrop-blur-2xl rounded-md font-bold text-[18px] leading-6.5'>
              show more
            </Button>
            <Button className='py-4 px-12 w-full md:w-auto border border-white  rounded-md bg-transparent text-white font-bold text-[18px] leading-6.5'>
              place an order
            </Button>
          </div>
        </div>


        {/* <div className='max-w-130 w-full h-130 rounded-full bg-green-700'>

        </div> */}


        {/* <div className='absolute -right-10 top-0'>
          <Image className='absolute' src={'/assets/hero/salad_background_effect.png'} width={750} height={978} alt='image' loading='lazy' />
          <Image className='object-cover' src={'/assets/hero/salad_background.png'} width={750} height={978} alt='image' loading='lazy' />
          <Image className='absolute z-10 right-30 top-30' src={'/assets/hero/salad.png'} width={712} height={665} alt='image' loading='lazy' />
          <Image className='absolute top-30 -rotate-70 right-100' src={'/assets/hero/salad_leaf_left.png'} width={514} height={276} alt='image' loading='lazy' />
          <Image className='absolute top-30 -rotate-70 right-100' src={'/assets/hero/salad_leaf_left.png'} width={514} height={276} alt='image' loading='lazy' />
          <Image className='absolute -bottom-5 rotate-10 right-80' src={'/assets/hero/salad_leaf_right.png'} width={314} height={276} alt='image' loading='lazy' />
          <Image className='absolute top-50  right-90' src={'/assets/hero/salad_leaf_middle.png'} width={514} height={276} alt='image' loading='lazy' />
        </div> */}
      </div>
      <Button handleClick={() => setIsPlay(prev => !prev)} className='absolute w-10 h-10 flex items-center justify-center bottom-5 md:bottom-10 md:right-10 left-10 p-2 bg-white/50 border border-white/60 backdrop-blur-2xl rounded-full'>
        {isPlay ? <Volume2 /> : <VolumeOff />}
      </Button>
    </section>
  )
}

