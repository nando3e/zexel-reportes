import { auth } from "@/auth"

export default auth((req) => {
  // req.auth tiene la sesión
  const isLoggedIn = !!req.auth

  const isOnProtectedRoute =
    req.nextUrl.pathname.startsWith("/employees") ||
    req.nextUrl.pathname.startsWith("/reports") ||
    req.nextUrl.pathname.startsWith("/analytics")

  if (isOnProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/login", req.nextUrl))
  }
})

// Opcionalmente, no invocar Middleware en algunas rutas
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

