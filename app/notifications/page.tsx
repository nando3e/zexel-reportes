import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, FileText, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export const metadata = {
  title: "Notificaciones",
  description: "Gestiona tus notificaciones",
}

export default function NotificationsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Notificaciones</h1>
        <p className="text-muted-foreground">Ver y gestionar tus notificaciones</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="unread">No leídas</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Todas las Notificaciones</CardTitle>
              <CardDescription>Ver todas tus notificaciones recientes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Nuevo empleado añadido</p>
                  <p className="text-sm text-muted-foreground">Juan Pérez fue añadido al departamento de Ventas</p>
                </div>
                <div className="text-xs text-muted-foreground">Hace 2 horas</div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Informe generado</p>
                  <p className="text-sm text-muted-foreground">El informe mensual de rendimiento está listo para ver</p>
                </div>
                <div className="text-xs text-muted-foreground">Ayer</div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Informe programado</p>
                  <p className="text-sm text-muted-foreground">
                    Informe trimestral de ingresos programado para la próxima semana
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">Hace 2 días</div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Actualización de departamento</p>
                  <p className="text-sm text-muted-foreground">
                    El departamento de Ingeniería ha superado sus objetivos trimestrales
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">Hace 3 días</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones No Leídas</CardTitle>
              <CardDescription>Notificaciones que aún no has leído</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4 bg-muted/50">
                <div className="rounded-full bg-primary/10 p-2">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Nuevo empleado añadido</p>
                  <p className="text-sm text-muted-foreground">Juan Pérez fue añadido al departamento de Ventas</p>
                </div>
                <div className="text-xs text-muted-foreground">Hace 2 horas</div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border p-4 bg-muted/50">
                <div className="rounded-full bg-primary/10 p-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Informe generado</p>
                  <p className="text-sm text-muted-foreground">El informe mensual de rendimiento está listo para ver</p>
                </div>
                <div className="text-xs text-muted-foreground">Ayer</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Notificaciones</CardTitle>
              <CardDescription>Configura cómo recibes las notificaciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificaciones por Email</h3>
                <div className="flex items-center justify-between space-y-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="email-employees">Actualizaciones de Empleados</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir emails cuando se añadan, actualicen o eliminen empleados
                    </p>
                  </div>
                  <Switch id="email-employees" defaultChecked />
                </div>

                <div className="flex items-center justify-between space-y-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="email-reports">Notificaciones de Informes</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir emails cuando se generen o programen informes
                    </p>
                  </div>
                  <Switch id="email-reports" defaultChecked />
                </div>

                <div className="flex items-center justify-between space-y-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="email-performance">Alertas de Rendimiento</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir emails sobre cambios significativos en el rendimiento
                    </p>
                  </div>
                  <Switch id="email-performance" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificaciones en la Aplicación</h3>
                <div className="flex items-center justify-between space-y-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="app-employees">Actualizaciones de Empleados</Label>
                    <p className="text-sm text-muted-foreground">Mostrar notificaciones para cambios de empleados</p>
                  </div>
                  <Switch id="app-employees" defaultChecked />
                </div>

                <div className="flex items-center justify-between space-y-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="app-reports">Notificaciones de Informes</Label>
                    <p className="text-sm text-muted-foreground">Mostrar notificaciones para informes</p>
                  </div>
                  <Switch id="app-reports" defaultChecked />
                </div>

                <div className="flex items-center justify-between space-y-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="app-performance">Alertas de Rendimiento</Label>
                    <p className="text-sm text-muted-foreground">Mostrar notificaciones para cambios de rendimiento</p>
                  </div>
                  <Switch id="app-performance" defaultChecked />
                </div>
              </div>

              <Button>Guardar Configuración</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

