"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, BarChart, PieChart, LineChart, Calendar, Share2 } from "lucide-react"
import { generateAIReport } from "@/lib/ai"
import { useToast } from "@/components/ui/use-toast"
import { RevenueChart } from "@/components/reports/revenue-chart"
import { CostChart } from "@/components/reports/cost-chart"
import { LaborCostChart } from "@/components/reports/labor-cost-chart"
import { RunwayChart } from "@/components/reports/runway-chart"

export default function ReportsPage() {
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [reportType, setReportType] = useState("monthly")
  const [department, setDepartment] = useState("all")
  const [timeFrame, setTimeFrame] = useState("month")
  const [reportContent, setReportContent] = useState<string | null>(null)

  const handleGenerateReport = async () => {
    setIsGenerating(true)
    setReportContent(null)

    try {
      // En una aplicación real, esto llamaría a un endpoint de API que usa IA para generar un informe
      const result = await generateAIReport(reportType, timeFrame, department)
      setReportContent(result.content)

      toast({
        title: "Informe generado",
        description: "Su informe potenciado por IA ha sido generado con éxito.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo generar el informe. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Informes</h1>
        <p className="text-muted-foreground">Generar y ver informes potenciados por IA</p>
      </div>

      <Tabs defaultValue="generate" className="space-y-4">
        <TabsList>
          <TabsTrigger value="generate">Generar Informe</TabsTrigger>
          <TabsTrigger value="scheduled">Informes Programados</TabsTrigger>
          <TabsTrigger value="saved">Informes Guardados</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generar Informe con IA</CardTitle>
              <CardDescription>Utilice IA para analizar datos de empleados y generar informes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de Informe</label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo de informe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Actualización Mensual</SelectItem>
                      <SelectItem value="quarterly">Informe Trimestral</SelectItem>
                      <SelectItem value="performance">Rendimiento de Empleados</SelectItem>
                      <SelectItem value="financial">Análisis Financiero</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Departamento</label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger>
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

                <div className="space-y-2">
                  <label className="text-sm font-medium">Período</label>
                  <Select value={timeFrame} onValueChange={setTimeFrame}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Último Mes</SelectItem>
                      <SelectItem value="quarter">Último Trimestre</SelectItem>
                      <SelectItem value="year">Último Año</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleGenerateReport} disabled={isGenerating} className="w-full md:w-auto">
                {isGenerating ? "Generando..." : "Generar Informe"}
              </Button>
            </CardContent>
          </Card>

          {reportContent && (
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between border-b">
                <div>
                  <CardTitle>Informe Generado</CardTitle>
                  <CardDescription>Informe generado por IA basado en los parámetros seleccionados</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="prose max-w-none p-6 dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: reportContent }} />
                </div>

                {reportType === "monthly" && (
                  <div className="space-y-6 p-6 pt-0">
                    <h3 className="text-lg font-semibold">KPIs</h3>

                    <div>
                      <h4 className="mb-2 text-sm font-medium">Ingresos</h4>
                      <div className="h-[300px] w-full">
                        <RevenueChart />
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium">Costo Total</h4>
                      <div className="h-[300px] w-full">
                        <CostChart />
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium">Costo Laboral</h4>
                      <div className="h-[300px] w-full">
                        <LaborCostChart />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 text-sm font-medium">Efectivo Disponible</h4>
                        <div className="rounded-lg border p-4">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Oct 2024</p>
                            <p className="text-3xl font-bold text-primary">879 K EUR</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-2 text-sm font-medium">Número de Empleados</h4>
                        <div className="rounded-lg border p-4">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Oct 2024</p>
                            <p className="text-3xl font-bold text-primary">42</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium">Runway</h4>
                      <div className="h-[300px] w-full">
                        <RunwayChart />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  Generado el{" "}
                  {new Date().toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informes Programados</CardTitle>
              <CardDescription>Informes que se generan automáticamente según una programación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BarChart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Rendimiento por Departamento</p>
                      <p className="text-sm text-muted-foreground">Informe mensual</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Próximo: Mañana</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <LineChart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Análisis de Ingresos</p>
                      <p className="text-sm text-muted-foreground">Informe trimestral</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Próximo: En 2 semanas</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <PieChart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Distribución de Empleados</p>
                      <p className="text-sm text-muted-foreground">Informe semanal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Próximo: En 3 días</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informes Guardados</CardTitle>
              <CardDescription>Informes generados previamente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Revisión de Rendimiento Q1 2023</p>
                      <p className="text-sm text-muted-foreground">Generado el 2 de abril de 2023</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Análisis del Departamento de Ventas</p>
                      <p className="text-sm text-muted-foreground">Generado el 15 de marzo de 2023</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Informe Anual de Ingresos 2022</p>
                      <p className="text-sm text-muted-foreground">Generado el 10 de enero de 2023</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

