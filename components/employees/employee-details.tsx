import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Badge } from "@/components/ui/badge"

interface EmployeeDetailsProps {
  employee: {
    id: string
    name: string
    employeeId: string
    department: string
    position: string
    email: string
    phone: string
    hireDate: Date
    revenue: number
    notes?: string
  }
}

export function EmployeeDetails({ employee }: EmployeeDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Nombre Completo</p>
          <p className="font-medium">{employee.name}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">ID de Empleado</p>
          <p className="font-medium">{employee.employeeId}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Departamento</p>
          <Badge variant="outline">{employee.department}</Badge>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Cargo</p>
          <p className="font-medium">{employee.position}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Email</p>
          <p className="font-medium">{employee.email}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Teléfono</p>
          <p className="font-medium">{employee.phone}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Fecha de Contratación</p>
          <p className="font-medium">{format(new Date(employee.hireDate), "PPP", { locale: es })}</p>
        </div>
      </div>

      {employee.notes && (
        <div>
          <p className="text-sm font-medium text-muted-foreground">Notas</p>
          <p className="text-sm">{employee.notes}</p>
        </div>
      )}
    </div>
  )
}

