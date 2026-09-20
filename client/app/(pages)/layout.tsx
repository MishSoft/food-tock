import Header from '@/components/layout/Header'
import { NavContextProvider } from '@/context/NavContext'
import React, { ReactNode } from 'react'

export default function layout({children}: {children: ReactNode}) {
  return (
    <>
      <NavContextProvider>
        <Header />
      </NavContextProvider>
      {children}
    </>
  )
}

