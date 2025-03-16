"use client"

import { useState } from "react"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown, MoreHorizontal, Pencil, Trash, Eye } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import { deleteEmployee } from "@/lib/actions"
import { useToast } from "@/components/ui/use-toast"

// This would typically come from your database
const data = [
  {
    id: "1",
    name: "Juan Pérez",
    employeeId: "EMP-001",
    department: "Ventas",
    position: "Gerente de Ventas",
    email: "juan.perez@ejemplo.com",
    phone: "+34 612 345 678",
    hireDate: new Date("2020-01-15"),
    revenue: 250000,
  },
  {
    id: "2",
    name: "María García",
    employeeId: "EMP-002",
    department: "Marketing",
    position: "Especialista en Marketing",
    email: "maria.garcia@ejemplo.com",
    phone: "+34 623 456 789",
    hireDate: new Date("2021-03-10"),
    revenue: 180000,
  },
  {
    id: "3",
    name: "Carlos Rodríguez",
    employeeId: "EMP-003",
    department: "Ingeniería",
    position: "Desarrollador Senior",
    email: "carlos.rodriguez@ejemplo.com",
    phone: "+34 634 567 890",
    hireDate: new Date("2019-06-22"),
    revenue: 320000,
  },
  {
    id: "4",
    name: "Ana Martínez",
    employeeId: "EMP-004",
    department: "RRHH",
    position: "Gerente de RRHH",
    email: "ana.martinez@ejemplo.com",
    phone: "+34 645 678 901",
    hireDate: new Date("2022-01-05"),
    revenue: 150000,
  },
  {
    id: "5",
    name: "Roberto Fernández",
    employeeId: "EMP-005",
    department: "Finanzas",
    position: "Analista Financiero",
    email: "roberto.fernandez@ejemplo.com",
    phone: "+34 656 789 012",
    hireDate: new Date("2021-09-15"),
    revenue: 200000,
  },
]

export function EmployeeTable() {
  const router = useRouter()
  const { toast } = useToast()
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "employeeId",
      header: "ID Empleado",
    },
    {
      accessorKey: "department",
      header: "Departamento",
      cell: ({ row }) => {
        const department = row.getValue("department") as string
        return <Badge variant="outline">{department}</Badge>
      },
    },
    {
      accessorKey: "position",
      header: "Cargo",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "hireDate",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Fecha Contratación
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = row.getValue("hireDate") as Date
        return <div>{format(date, "PP")}</div>
      },
    },
    {
      accessorKey: "revenue",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Ingresos
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue("revenue"))
        const formatted = new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(amount)
        return <div className="font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const employee = row.original

        const handleDelete = async () => {
          try {
            await deleteEmployee(employee.id)
            toast({
              title: "Empleado eliminado",
              description: "El empleado ha sido eliminado con éxito.",
            })
            router.refresh()
          } catch (error) {
            toast({
              title: "Error",
              description: "Algo salió mal. Por favor, inténtalo de nuevo.",
              variant: "destructive",
            })
          }
        }

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menú</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={`/employees/${employee.id}`}>
                <DropdownMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  Ver
                </DropdownMenuItem>
              </Link>
              <Link href={`/employees/${employee.id}/edit`}>
                <DropdownMenuItem>
                  <Pencil className="mr-2 h-4 w-4" />
                  Editar
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleDelete}>
                <Trash className="mr-2 h-4 w-4" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No hay resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Anterior
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Siguiente
        </Button>
      </div>
    </div>
  )
}

