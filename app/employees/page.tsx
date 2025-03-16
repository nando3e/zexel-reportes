import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { EmployeeTable } from "@/components/employees/employee-table"
import { EmployeeTableSkeleton } from "@/components/employees/employee-table-skeleton"
import { DataTableToolbar } from "@/components/employees/data-table-toolbar"

export const metadata = {
  title: "Empleados",
  description: "Gestiona tus empleados",
}

export default function EmployeesPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Empleados</h1>
        <Link href="/employees/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Añadir Empleado
          </Button>
        </Link>
      </div>

      <DataTableToolbar />

      <div className="mt-4">
        <Suspense fallback={<EmployeeTableSkeleton />}>
          <EmployeeTable />
        </Suspense>
      </div>
    </div>
  )
}

