import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function LaborCostChart() {
  // Esto normalmente obtendría datos de su base de datos
  const data = [
    { name: "May '24", actual: 15000, plan: 14000 },
    { name: "Jun '24", actual: 18000, plan: 16000 },
    { name: "Jul '24", actual: 22000, plan: 20000 },
    { name: "Ago '24", actual: 25000, plan: 24000 },
    { name: "Sep '24", actual: 30000, plan: 28000 },
    { name: "Oct '24", actual: 35000, plan: 32000 },
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

