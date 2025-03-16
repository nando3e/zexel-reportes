"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      // Para fines de demostración, solo verificaremos si las credenciales coinciden con nuestro usuario codificado
      if (email === "admin@example.com" && password === "password123") {
        // Éxito - redirigir al panel
        router.push("/")
      } else {
        // Credenciales inválidas
        toast({
          title: "Error",
          description: "Credenciales inválidas. Por favor, inténtelo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Algo salió mal. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6 text-primary" />
          <h1 className="text-2xl font-semibold tracking-tight">Bienvenido de nuevo</h1>
          <p className="text-sm text-muted-foreground">Ingrese sus credenciales para acceder a su cuenta</p>
        </div>
        <Card>
          <form onSubmit={onSubmit}>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="nombre@ejemplo.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading && <Icons.logo className="mr-2 h-4 w-4 animate-spin" />}
                Iniciar sesión
              </Button>
            </CardFooter>
          </form>
        </Card>
        <div className="text-center text-sm text-muted-foreground">
          <p>Credenciales de demostración:</p>
          <p>Correo: admin@example.com</p>
          <p>Contraseña: password123</p>
        </div>
      </div>
    </div>
  )
}

