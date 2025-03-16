import { notFound } from "next/navigation"
import { getEmployeeById } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"
import { EmployeeDetails } from "@/components/employees/employee-details"
import { DeleteEmployeeButton } from "@/components/employees/delete-employee-button"

interface EmployeePageProps {
  params: {
    id: string
  }
}

export default async function EmployeePage({ params }: EmployeePageProps) {
  try {
    const employee = await getEmployeeById(params.id)

    if (!employee) {
      return notFound()
    }

    return (
      <div className="container mx-auto py-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/employees">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">{employee.name}</h1>
          <div className="ml-auto flex items-center gap-2">
            <Link href={`/employees/${employee.id}/edit`}>
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
            </Link>
            <DeleteEmployeeButton id={employee.id} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Detalles del Empleado</CardTitle>
              <CardDescription>Información personal y laboral</CardDescription>
            </CardHeader>
            <CardContent>
              <EmployeeDetails employee={employee} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Métricas de Rendimiento</CardTitle>
              <CardDescription>Datos de ingresos y rendimiento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Ingresos Generados</span>
                  <span className="font-bold">${employee.revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Rango en Departamento</span>
                  <span className="font-bold">#3 de 12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Antigüedad</span>
                  <span className="font-bold">2 años, 3 meses</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error al cargar el empleado:", error)
    return notFound()
  }
}

