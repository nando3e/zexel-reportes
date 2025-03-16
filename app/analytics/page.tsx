import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EmployeePerformanceChart } from "@/components/analytics/employee-performance-chart"
import { DepartmentComparisonChart } from "@/components/analytics/department-comparison-chart"
import { RevenueAnalyticsChart } from "@/components/analytics/revenue-analytics-chart"

export const metadata = {
  title: "Analítica",
  description: "Ver análisis detallados sobre el rendimiento de tus empleados y negocio",
}

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Analítica</h1>
        <p className="text-muted-foreground">Información detallada sobre el rendimiento de tus empleados y negocio</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <Select defaultValue="month">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Seleccionar período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Última Semana</SelectItem>
            <SelectItem value="month">Último Mes</SelectItem>
            <SelectItem value="quarter">Último Trimestre</SelectItem>
            <SelectItem value="year">Último Año</SelectItem>
            <SelectItem value="all">Todo el Tiempo</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Seleccionar departamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los Departamentos</SelectItem>
            <SelectItem value="sales">Ventas</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="engineering">Ingeniería</SelectItem>
            <SelectItem value="finance">Finanzas</SelectItem>
            <SelectItem value="hr">Recursos Humanos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="employees">Empleados</TabsTrigger>
          <TabsTrigger value="departments">Departamentos</TabsTrigger>
          <TabsTrigger value="revenue">Ingresos</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Empleados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+5 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ingresos Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$29,762</div>
                <p className="text-xs text-muted-foreground">+2.5% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasa de Retención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">+1.2% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Promedio en la Empresa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.3 años</div>
                <p className="text-xs text-muted-foreground">+0.2 desde el año pasado</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Tendencias de Ingresos</CardTitle>
                <CardDescription>Ingresos mensuales a lo largo del tiempo</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <RevenueAnalyticsChart />
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Comparación de Departamentos</CardTitle>
                <CardDescription>Rendimiento por departamento</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <DepartmentComparisonChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rendimiento de Empleados</CardTitle>
              <CardDescription>Empleados con mejor rendimiento por ingresos</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <EmployeePerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analítica de Departamentos</CardTitle>
              <CardDescription>Métricas de rendimiento por departamento</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <DepartmentComparisonChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analítica de Ingresos</CardTitle>
              <CardDescription>Desglose detallado de ingresos y tendencias</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <RevenueAnalyticsChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

