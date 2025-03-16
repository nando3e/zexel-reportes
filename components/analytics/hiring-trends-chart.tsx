import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function HiringTrendsChart() {
  // Esto normalmente obtendría datos de tu base de datos
  const data = [
    { name: "Ene", hires: 2, departures: 1 },
    { name: "Feb", hires: 3, departures: 0 },
    { name: "Mar", hires: 1, departures: 1 },
    { name: "Abr", hires: 0, departures: 2 },
    { name: "May", hires: 2, departures: 0 },
    { name: "Jun", hires: 4, departures: 1 },
    { name: "Jul", hires: 2, departures: 0 },
    { name: "Ago", hires: 1, departures: 1 },
    { name: "Sep", hires: 3, departures: 0 },
    { name: "Oct", hires: 2, departures: 2 },
    { name: "Nov", hires: 5, departures: 1 },
    { name: "Dic", hires: 2, departures: 0 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="hires"
          name="Nuevas Contrataciones"
          stackId="1"
          stroke="#10b981"
          fill="#10b981"
        />
        <Area type="monotone" dataKey="departures" name="Salidas" stackId="2" stroke="#ef4444" fill="#ef4444" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

