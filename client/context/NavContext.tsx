"use client"
import { ReactNode, useContext, useState, createContext } from "react"

interface NavContextType {
  isOpen: boolean
  toggleMenu: () => void
  openMenu: () => void
  closeMenu: () => void
}

const NavContext = createContext<NavContextType | undefined>(undefined)

interface NavContextProviderProps {
  children: ReactNode
}

export const NavContextProvider: React.FC<NavContextProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  return (
    <NavContext.Provider value={{isOpen, toggleMenu, openMenu, closeMenu}}>
      {children}
    </NavContext.Provider>
  )
}


export const useNavDropMenu = (): NavContextType => {
  const context = useContext(NavContext)

  if (!context) {
    throw new Error("useNavDropMenu must be used within a NavDropDownProvider")
  }

  return context
}
