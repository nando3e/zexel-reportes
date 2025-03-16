import { EmployeeForm } from "@/components/employees/employee-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Añadir Empleado",
  description: "Añadir un nuevo empleado al sistema",
}

export default function NewEmployeePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Añadir Nuevo Empleado</h1>
        <p className="text-muted-foreground">Crear un nuevo registro de empleado en el sistema</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información del Empleado</CardTitle>
          <CardDescription>Introduce los detalles del nuevo empleado</CardDescription>
        </CardHeader>
        <CardContent>
          <EmployeeForm />
        </CardContent>
      </Card>
    </div>
  )
}

