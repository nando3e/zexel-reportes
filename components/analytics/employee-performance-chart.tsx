import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function EmployeePerformanceChart() {
  // Esto normalmente obtendría datos de tu base de datos
  const data = [
    { name: "Juan Pérez", revenue: 120000 },
    { name: "María García", revenue: 105000 },
    { name: "Carlos Rodríguez", revenue: 95000 },
    { name: "Ana Martínez", revenue: 85000 },
    { name: "Roberto Fernández", revenue: 75000 },
    { name: "Laura Sánchez", revenue: 70000 },
    { name: "Miguel López", revenue: 65000 },
    { name: "Carmen Ruiz", revenue: 60000 },
    { name: "Javier Torres", revenue: 55000 },
    { name: "Elena Moreno", revenue: 50000 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 20,
          right: 30,
          left: 70,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={(value) => `${value / 1000}k €`} />
        <YAxis dataKey="name" type="category" width={100} />
        <Tooltip formatter={(value) => [`${value.toLocaleString()} €`, "Ingresos"]} />
        <Bar dataKey="revenue" fill="#0ea5e9" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

