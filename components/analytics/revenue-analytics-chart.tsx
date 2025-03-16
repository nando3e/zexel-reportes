import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function RevenueAnalyticsChart() {
  // Esto normalmente obtendría datos de tu base de datos
  const data = [
    { name: "Ene", revenue: 65000, target: 60000 },
    { name: "Feb", revenue: 78000, target: 65000 },
    { name: "Mar", revenue: 90000, target: 70000 },
    { name: "Abr", revenue: 81000, target: 75000 },
    { name: "May", revenue: 95000, target: 80000 },
    { name: "Jun", revenue: 110000, target: 85000 },
    { name: "Jul", revenue: 125000, target: 90000 },
    { name: "Ago", revenue: 135000, target: 95000 },
    { name: "Sep", revenue: 150000, target: 100000 },
    { name: "Oct", revenue: 140000, target: 105000 },
    { name: "Nov", revenue: 160000, target: 110000 },
    { name: "Dic", revenue: 180000, target: 115000 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value / 1000}k €`} />
        <Tooltip formatter={(value) => [`${value.toLocaleString()} €`]} />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Ingresos Reales"
          stroke="#0ea5e9"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="target"
          name="Ingresos Objetivo"
          stroke="#f59e0b"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

