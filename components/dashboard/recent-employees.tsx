import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"

export function RecentEmployees() {
  // Esto normalmente obtendría datos de su base de datos
  const employees = [
    {
      id: "1",
      name: "Juan Pérez",
      department: "Ventas",
      position: "Gerente de Ventas",
      hireDate: new Date("2023-02-15"),
    },
    {
      id: "2",
      name: "María García",
      department: "Marketing",
      position: "Especialista en Marketing",
      hireDate: new Date("2023-03-10"),
    },
    {
      id: "3",
      name: "Carlos Rodríguez",
      department: "Ingeniería",
      position: "Desarrollador Senior",
      hireDate: new Date("2023-01-22"),
    },
    {
      id: "4",
      name: "Ana Martínez",
      department: "RRHH",
      position: "Gerente de RRHH",
      hireDate: new Date("2023-04-05"),
    },
  ]

  return (
    <div className="space-y-4">
      {employees.map((employee) => (
        <Link
          key={employee.id}
          href={`/employees/${employee.id}`}
          className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>
                {employee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{employee.name}</p>
              <p className="text-sm text-muted-foreground">{employee.position}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{employee.department}</Badge>
            <span className="text-sm text-muted-foreground">{format(employee.hireDate, "d MMM", { locale: es })}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

