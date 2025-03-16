import { notFound } from "next/navigation"
import { getEmployeeById } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { EmployeeForm } from "@/components/employees/employee-form"

interface EditEmployeePageProps {
  params: {
    id: string
  }
}

export default async function EditEmployeePage({ params }: EditEmployeePageProps) {
  try {
    const employee = await getEmployeeById(params.id)

    if (!employee) {
      return notFound()
    }

    return (
      <div className="container mx-auto py-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href={`/employees/${employee.id}`}>
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Editar Empleado</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Editar Información del Empleado</CardTitle>
            <CardDescription>Actualizar los detalles del empleado</CardDescription>
          </CardHeader>
          <CardContent>
            <EmployeeForm employee={employee} />
          </CardContent>
        </Card>
      </div>
    )
  } catch (error) {
    console.error("Error al cargar el empleado para editar:", error)
    return notFound()
  }
}

