import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function RunwayChart() {
  // Esto normalmente obtendría datos de su base de datos
  const data = [
    { name: "Mar '24", actual: 12, plan: 10 },
    { name: "Abr '24", actual: 14, plan: 12 },
    { name: "May '24", actual: 16, plan: 14 },
    { name: "Jun '24", actual: 18, plan: 16 },
    { name: "Jul '24", actual: 20, plan: 18 },
    { name: "Ago '24", actual: 22, plan: 20 },
    { name: "Sep '24", actual: 24, plan: 22 },
    { name: "Oct '24", actual: 26, plan: 24 },
    { name: "Nov '24", actual: 28, plan: 26 },
    { name: "Dic '24", actual: 30, plan: 28 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
        <YAxis />
        <Tooltip
          formatter={(value) => [`${value} meses`, value === data[0].actual ? "Actual" : "Plan"]}
          labelFormatter={(label) => `Mes: ${label}`}
        />
        <Bar dataKey="actual" name="Actual" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        <Bar dataKey="plan" name="Plan" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

