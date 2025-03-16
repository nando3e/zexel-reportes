import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function RevenueChart() {
  // Esto normalmente obtendría datos de su base de datos
  const data = [
    { name: "Ene", revenue: 65000 },
    { name: "Feb", revenue: 78000 },
    { name: "Mar", revenue: 90000 },
    { name: "Abr", revenue: 81000 },
    { name: "May", revenue: 95000 },
    { name: "Jun", revenue: 110000 },
    { name: "Jul", revenue: 125000 },
    { name: "Ago", revenue: 135000 },
    { name: "Sep", revenue: 150000 },
    { name: "Oct", revenue: 140000 },
    { name: "Nov", revenue: 160000 },
    { name: "Dic", revenue: 180000 },
  ]

  return (
    <div className="h-[300px] w-full">
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
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Ingresos"]} />
          <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

