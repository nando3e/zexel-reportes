"use client"
import { usePathname } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/user-nav"

export function SiteHeader() {
  const pathname = usePathname()

  // No mostrar el encabezado en la página de inicio de sesión
  if (pathname === "/login") {
    return null
  }

  // Para fines de demostración, asumiremos que el usuario siempre está conectado
  const user = {
    name: "Usuario Admin",
    email: "admin@example.com",
    image: null,
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <UserNav user={user} />
          </nav>
        </div>
      </div>
    </header>
  )
}

