// This file would typically contain functions to fetch data from your database
// For this example, we're using mock data

export async function getEmployeeStats() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    totalEmployees: 42,
    totalRevenue: 1250000,
    averageRevenue: 29762,
    newHires: 5,
  }
}

// Modificar la función getEmployeeById para asegurarnos de que siempre devuelve datos
// y que los IDs coincidan con los que se usan en la tabla de empleados

export async function getEmployeeById(id: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  const employees = [
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
      notes: "Mejor rendimiento durante 3 trimestres consecutivos.",
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

  // Buscar el empleado por ID
  const employee = employees.find((employee) => employee.id === id)

  // Si no se encuentra el empleado, devolver el primero para evitar errores
  // En una aplicación real, deberías manejar esto de manera diferente
  return employee || employees[0]
}

