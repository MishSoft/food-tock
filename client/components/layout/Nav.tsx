"use client"
import { useNavDropMenu } from "@/context/NavContext"
import Link from "next/link"
import { usePathname } from "next/navigation"


const LINK = [
  {
    lable: "home",
    link: "/"
  },
  {
    lable: "menu",
    link: "/menu"
  },
  {
    lable: "blog",
    link: "/blog"
  },
  {
    lable: "pages",
    link: "/pages"
  },
  {
    lable: "about",
    link: "/about"
  },
  {
    lable: "shop",
    link: "/shop"
  },
  {
    lable: "contact",
    link: "/contact"
  }
]



export default function Nav() {
  const pathname = usePathname()
  const { isOpen, closeMenu } = useNavDropMenu()
  return (
    <div className={`fixed bg-white ${isOpen ? "translate-x-0 " : "-translate-x-full md:translate-x-0"} duration-200 ease-in-out md:static md:min-h-0 top-14  z-50 w-full left-0 min-h-screen`}>
      <nav className={`
      flex
    lg:flex-1
    flex-col
    md:flex-row
    md:items-center
    justify-start
    gap-8
    max-w-100
    pl-5
    transition-opacity duration-300
        ${isOpen ? "opacity-100 " : "opacity-0 md:opacity-100"}
      `}
      >
        {
          LINK.map(lnk => (
            <Link onClick={closeMenu} key={lnk.lable}
              href={lnk.link}
              className={`
               w-fit
              font-normal
              text-[16px]
              capitalize
              leading-6
              relative
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[1.5px]
              after:rounded-full
              hover:after:w-full
              after:duration-200
              after:bg-[#195A00]
              ${pathname === lnk.link ? "after:w-[50%]" : "after:w-0"}
            `}
            >
              {lnk.lable}
            </Link>
          ))
        }
      </nav>
    </div>
  )
}

