import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Users, BarChart3, BellRing } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { EmployeeStatsLoading, EmployeeStats } from "@/components/dashboard/employee-stats"
import { RecentEmployees } from "@/components/dashboard/recent-employees"
import { DepartmentDistribution } from "@/components/dashboard/department-distribution"
import { RevenueChart } from "@/components/dashboard/revenue-chart"

export default async function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <div className="container grid items-start gap-6 pb-8 pt-6 md:py-8">
          <div className="flex flex-col items-start justify-between gap-4 border-b pb-4 md:flex-row md:items-center md:gap-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Panel de Control</h1>
              <p className="text-muted-foreground">Resumen de su sistema de gestión de empleados.</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/employees/new">
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Añadir Empleado
                </Button>
              </Link>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="analytics">Analítica</TabsTrigger>
              <TabsTrigger value="reports">Informes</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<EmployeeStatsLoading />}>
                  <EmployeeStats />
                </Suspense>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Resumen de Ingresos</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <RevenueChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Distribución por Departamento</CardTitle>
                    <CardDescription>Distribución de empleados por departamentos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DepartmentDistribution />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Empleados Recientes</CardTitle>
                    <CardDescription>Empleados añadidos recientemente al sistema</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentEmployees />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Próximos Informes</CardTitle>
                    <CardDescription>Informes programados para los próximos 7 días</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="ml-2 space-y-1">
                          <p className="text-sm font-medium leading-none">Rendimiento Mensual por Departamento</p>
                          <p className="text-sm text-muted-foreground">Mañana a las 10:00 AM</p>
                        </div>
                        <div className="ml-auto font-medium">Automatizado</div>
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="ml-2 space-y-1">
                          <p className="text-sm font-medium leading-none">Análisis Trimestral de Ingresos</p>
                          <p className="text-sm text-muted-foreground">Viernes a las 11:30 AM</p>
                        </div>
                        <div className="ml-auto font-medium">Automatizado</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analítica</CardTitle>
                  <CardDescription>Análisis detallado sobre el rendimiento de empleados e ingresos</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">El contenido de analítica se mostrará aquí</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informes</CardTitle>
                  <CardDescription>Generar y ver informes potenciados por IA</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">El contenido de informes se mostrará aquí</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notificaciones</CardTitle>
                  <CardDescription>Notificaciones y alertas del sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <BellRing className="mr-2 h-4 w-4 text-muted-foreground" />
                      <div className="ml-2 space-y-1">
                        <p className="text-sm font-medium leading-none">Nuevo empleado añadido</p>
                        <p className="text-sm text-muted-foreground">
                          Juan Pérez fue añadido al departamento de Ventas
                        </p>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">Hace 2 horas</div>
                    </div>
                    <div className="flex items-center">
                      <BellRing className="mr-2 h-4 w-4 text-muted-foreground" />
                      <div className="ml-2 space-y-1">
                        <p className="text-sm font-medium leading-none">Informe generado</p>
                        <p className="text-sm text-muted-foreground">
                          El informe mensual de rendimiento está listo para ver
                        </p>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">Ayer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

