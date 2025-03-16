import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function RevenueChart() {
  // Esto normalmente obtendría datos de su base de datos
  const data = [
    { name: "Mar '24", actual: 28400, plan: 25000 },
    { name: "Abr '24", actual: 37500, plan: 40000 },
    { name: "May '24", actual: 61100, plan: 55000 },
    { name: "Jun '24", actual: 61200, plan: 60000 },
    { name: "Jul '24", actual: 60900, plan: 65000 },
    { name: "Ago '24", actual: 65800, plan: 70000 },
    { name: "Sep '24", actual: 72500, plan: 75000 },
    { name: "Oct '24", actual: 74400, plan: 80000 },
    { name: "Nov '24", actual: 75900, plan: 85000 },
    { name: "Dic '24", actual: 80800, plan: 90000 },
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
        <YAxis tickFormatter={(value) => `${value / 1000}k`} />
        <Tooltip
          formatter={(value) => [`${value.toLocaleString()} EUR`, value === data[0].actual ? "Actual" : "Plan"]}
          labelFormatter={(label) => `Mes: ${label}`}
        />
        <Line
          type="monotone"
          dataKey="actual"
          name="Actual en EUR"
          stroke="#0ea5e9"
          strokeWidth={2}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="plan"
          name="Plan en EUR"
          stroke="#8b5cf6"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

