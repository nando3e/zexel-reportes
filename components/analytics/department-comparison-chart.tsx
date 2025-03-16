import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function DepartmentComparisonChart() {
  // Esto normalmente obtendría datos de tu base de datos
  const data = [
    {
      name: "Ventas",
      revenue: 750000,
      employees: 12,
      avgRevenue: 62500,
    },
    {
      name: "Marketing",
      revenue: 450000,
      employees: 8,
      avgRevenue: 56250,
    },
    {
      name: "Ingeniería",
      revenue: 350000,
      employees: 15,
      avgRevenue: 23333,
    },
    {
      name: "Finanzas",
      revenue: 200000,
      employees: 5,
      avgRevenue: 40000,
    },
    {
      name: "RRHH",
      revenue: 100000,
      employees: 4,
      avgRevenue: 25000,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value / 1000}k €`} />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip
          formatter={(value, name) => {
            if (name === "revenue") return [`${value.toLocaleString()} €`, "Ingresos Totales"]
            if (name === "avgRevenue") return [`${value.toLocaleString()} €`, "Ingresos Promedio"]
            return [value, name]
          }}
        />
        <Legend />
        <Bar yAxisId="left" dataKey="revenue" name="Ingresos Totales" fill="#0ea5e9" />
        <Bar yAxisId="right" dataKey="employees" name="Empleados" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

