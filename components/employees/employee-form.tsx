"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { createEmployee, updateEmployee } from "@/lib/actions"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  employeeId: z.string().min(1, {
    message: "El ID de empleado es obligatorio.",
  }),
  department: z.string().min(1, {
    message: "El departamento es obligatorio.",
  }),
  position: z.string().min(1, {
    message: "El cargo es obligatorio.",
  }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de email válida.",
  }),
  phone: z.string().min(1, {
    message: "El número de teléfono es obligatorio.",
  }),
  hireDate: z.date({
    required_error: "La fecha de contratación es obligatoria.",
  }),
  revenue: z.coerce.number().min(0, {
    message: "Los ingresos deben ser un número positivo.",
  }),
  notes: z.string().optional(),
})

type EmployeeFormValues = z.infer<typeof formSchema>

interface EmployeeFormProps {
  employee?: any
}

export function EmployeeForm({ employee }: EmployeeFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const defaultValues: Partial<EmployeeFormValues> = employee
    ? {
        name: employee.name,
        employeeId: employee.employeeId,
        department: employee.department,
        position: employee.position,
        email: employee.email,
        phone: employee.phone,
        hireDate: new Date(employee.hireDate),
        revenue: employee.revenue,
        notes: employee.notes || "",
      }
    : {
        name: "",
        employeeId: "",
        department: "",
        position: "",
        email: "",
        phone: "",
        hireDate: new Date(),
        revenue: 0,
        notes: "",
      }

  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  async function onSubmit(data: EmployeeFormValues) {
    setIsLoading(true)

    try {
      if (employee) {
        await updateEmployee(employee.id, data)
        toast({
          title: "Empleado actualizado",
          description: "El empleado ha sido actualizado con éxito.",
        })
        router.push(`/employees/${employee.id}`)
      } else {
        await createEmployee(data)
        toast({
          title: "Empleado creado",
          description: "El empleado ha sido creado con éxito.",
        })
        router.push("/employees")
      }
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Algo salió mal. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employeeId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID de Empleado</FormLabel>
                <FormControl>
                  <Input placeholder="EMP-001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departamento</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar departamento" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Sales">Ventas</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Engineering">Ingeniería</SelectItem>
                    <SelectItem value="Finance">Finanzas</SelectItem>
                    <SelectItem value="HR">Recursos Humanos</SelectItem>
                    <SelectItem value="Operations">Operaciones</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo</FormLabel>
                <FormControl>
                  <Input placeholder="Desarrollador Senior" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="juan.perez@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="+34 612 345 678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hireDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de Contratación</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Seleccionar fecha</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="revenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingresos</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormDescription>Ingresos generados por este empleado (en EUR)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notas</FormLabel>
              <FormControl>
                <Textarea placeholder="Información adicional sobre el empleado" className="min-h-[100px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Guardando..." : employee ? "Actualizar Empleado" : "Crear Empleado"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

