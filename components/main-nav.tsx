"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Users, BarChart3, FileText, Bell, Home } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6 text-primary" />
        <span className="hidden font-bold sm:inline-block text-primary">Zexel CRM</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <Home className="h-4 w-4" />
            <span className="hidden md:block">Panel</span>
          </div>
        </Link>
        <Link
          href="/employees"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/employees") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <Users className="h-4 w-4" />
            <span className="hidden md:block">Empleados</span>
          </div>
        </Link>
        <Link
          href="/analytics"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/analytics") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden md:block">Analítica</span>
          </div>
        </Link>
        <Link
          href="/reports"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/reports") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:block">Informes</span>
          </div>
        </Link>
        <Link
          href="/notifications"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/notifications") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <Bell className="h-4 w-4" />
            <span className="hidden md:block">Notificaciones</span>
          </div>
        </Link>
      </nav>
    </div>
  )
}

