"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

export function DataTableToolbar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar empleados..." className="pl-8" />
        </div>
        <Button variant="ghost" size="sm" className="h-8 px-2 lg:px-3">
          <X className="h-4 w-4" />
          <span className="ml-2 hidden lg:inline-block">Restablecer</span>
        </Button>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Seleccionar departamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los Departamentos</SelectItem>
            <SelectItem value="Sales">Ventas</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Engineering">Ingeniería</SelectItem>
            <SelectItem value="Finance">Finanzas</SelectItem>
            <SelectItem value="HR">Recursos Humanos</SelectItem>
            <SelectItem value="Operations">Operaciones</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Seleccionar rango de fechas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todo el Tiempo</SelectItem>
            <SelectItem value="today">Hoy</SelectItem>
            <SelectItem value="yesterday">Ayer</SelectItem>
            <SelectItem value="week">Esta Semana</SelectItem>
            <SelectItem value="month">Este Mes</SelectItem>
            <SelectItem value="year">Este Año</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

