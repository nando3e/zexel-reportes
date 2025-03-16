import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function CostChart() {
  // Esto normalmente obtendría datos de su base de datos
  const data = [
    { name: "Mar '24", actual: 20000, plan: 22000 },
    { name: "Abr '24", actual: 25000, plan: 26000 },
    { name: "May '24", actual: 30000, plan: 28000 },
    { name: "Jun '24", actual: 35000, plan: 32000 },
    { name: "Jul '24", actual: 40000, plan: 38000 },
    { name: "Ago '24", actual: 45000, plan: 42000 },
    { name: "Sep '24", actual: 50000, plan: 48000 },
    { name: "Oct '24", actual: 55000, plan: 52000 },
    { name: "Nov '24", actual: 60000, plan: 58000 },
    { name: "Dic '24", actual: 65000, plan: 62000 },
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

