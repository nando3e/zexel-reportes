import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function DepartmentDistribution() {
  // Esto normalmente obtendría datos de su base de datos
  const data = [
    { name: "Ventas", value: 12, color: "#0ea5e9" },
    { name: "Marketing", value: 8, color: "#8b5cf6" },
    { name: "Ingeniería", value: 15, color: "#10b981" },
    { name: "Finanzas", value: 5, color: "#f59e0b" },
    { name: "RRHH", value: 2, color: "#ef4444" },
  ]

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

