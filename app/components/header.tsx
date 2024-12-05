import { Headset, House, LayoutList, ShoppingBasket } from "lucide-react"
import Link from "next/link"

type TitleProps = {
  title: string
}

const navigation = [
  { title: "Home", href: "/", icon: <House size={18} strokeWidth={1.5} /> },
  {
    title: "Products",
    href: "/about",
    icon: <LayoutList size={18} strokeWidth={1.5} />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <Headset size={18} strokeWidth={1.5} />,
  },
  {
    title: "Bagg",
    href: "/bagg",
    icon: <ShoppingBasket size={18} strokeWidth={1.5} />,
  },
]

export default function Header({ title }: TitleProps) {
  return (
    <header className="flex items-center justify-between bg-gray-700 min-h-20 px-6 rounded-b-xl shadow-lg [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white">
      <h2>{title}</h2>
      <ul className="flex items-center gap-2">
        {navigation.map(({ title, href, icon }) => (
          <li
            key={title}
            className="px-2 py-1 hover:bg-gray-200 text-gray-100 hover:text-black transition-all duration-200 rounded-sm"
          >
            <Link href={href} className="flex items-center gap-1">
              <span>{icon}</span>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
