// Este archivo normalmente contendría funciones para interactuar con servicios de IA
// Para este ejemplo, estamos usando datos simulados

export async function generateAIReport(reportType: string, timeFrame: string, department = "all") {
  // Simular llamada a API a un servicio de IA
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // En una aplicación real, esto llamaría a un servicio de IA como OpenAI
  const reports = {
    monthly: {
      month: `
        <div class="max-w-4xl mx-auto">
          <div class="mb-8">
            <p class="text-sm text-muted-foreground">16/01/2025, 10:54 - Zexel CRM</p>
            <h1 class="text-3xl font-bold mb-2">Actualización de Octubre</h1>
            <p class="text-lg">por <span class="font-medium">Clara Herrera</span></p>
            <p class="text-sm text-muted-foreground">15 de Nov, 2024 - 4 min. de lectura</p>
            <p class="mt-4 text-lg">¡Estimados accionistas! Espero que estén teniendo un gran momento.</p>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Progreso y Éxito</h2>
            
            <h3 class="text-xl font-semibold mb-2">Mejoras Operacionales</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Enfoque en Estandarización y Automatización:</strong>
                <p>Este mes, continuamos enfocándonos en estandarizar y automatizar procesos clave en toda la empresa. La implementación de la incorporación automatizada ha sido un éxito, con tiempos de integración más rápidos y mayor eficiencia. Estos avances nos han permitido escalar operaciones sin problemas, optimizando costos y mejorando la experiencia del cliente.</p>
              </li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Mejoras de Producto</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Zexel Pay:</strong>
                <p>Hemos continuado optimizando Zexel Pay con varias nuevas características que mejoran tanto la funcionalidad como la experiencia del usuario. Las mejoras de rendimiento, tiempos de respuesta más rápidos y nuevas funcionalidades se implementaron en octubre, asegurando que la plataforma siga siendo líder del mercado para satisfacer las necesidades de los clientes de manera efectiva.</p>
              </li>
              <li>
                <strong>Usuarios y ventas:</strong>
                <p>Octubre mantuvo la tendencia al alza en ingresos, con un fuerte desempeño basado en los meses anteriores. Estamos avanzando con nuestros leads en el pipeline, expandiendo presupuestos en preparación para las próximas campañas de Black Friday y Navidad.</p>
              </li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Principales acuerdos en progreso</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Nuevos Clientes Incorporados:</strong>
                <p>Incorporamos con éxito a Territory Influence y Multimarkts, asegurando un proceso de integración fluido y solidificando su confianza como clientes clave.</p>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Aspectos Financieros Destacados</h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Crecimiento de Ingresos:</strong>
                <p>En septiembre, nuestros ingresos alcanzaron los €74K, continuando el impulso de crecimiento visto en meses anteriores.</p>
              </li>
              <li>
                <strong>Costos Laborales:</strong>
                <p>Tras ajustes estratégicos en la fuerza laboral en septiembre, los costos laborales aumentaron debido a gastos de indemnización y la contratación de talento especializado. Además, la resolución de un problema de subsidio del programa Investigo requirió el reembolso de €3,000, que se finalizó mediante un acuerdo en CMAC. Este asunto ahora está completamente resuelto, asegurando que no haya más responsabilidades.
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Financiación</h2>
            <p class="mb-4">Todos los tickets de inversores, excepto el de Demium, pero mientras tanto, el Acuerdo de Accionistas (SHA) y todos los documentos relacionados han sido firmados, preparando el escenario para que el aumento de capital se finalice en noviembre.</p>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Planes y Prioridades</h2>
            
            <h3 class="text-xl font-semibold mb-2">Ventas</h3>
            <p class="mb-2"><strong>Plan de Gestión de Leads:</strong></p>
            <p class="mb-4">Estamos refinando nuestros procesos de ventas con un fuerte enfoque en la automatización y el compromiso. Octubre fue particularmente impactante, ya que expandimos nuestro pipeline y profundizamos el compromiso con clientes potenciales después de la feria de marketing de influencers más grande de Europa.</p>
            
            <h3 class="text-xl font-semibold mb-2">Usuarios</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Integraciones API:</strong>
                <p>Nuestro trabajo continuo en integraciones API está abriendo nuevas oportunidades de crecimiento, lo que lleva a un aumento en las transacciones de usuarios. Esto jugará un papel clave en el escalado a medida que incorporamos más clientes.</p>
              </li>
              <li>
                <strong>Aumentos de Presupuesto de Clientes:</strong>
                <p>Los clientes existentes han mostrado mayor confianza al expandir sus presupuestos para campañas de influencers, demostrando el valor que Zexel Pay agrega a sus operaciones.</p>
              </li>
            </ul>
            
            <h3 class="text-xl font-semibold mb-2">Producto</h3>
            <p class="mb-4">Hemos continuado optimizando Zexel Pay con varias nuevas características que mejoran tanto la funcionalidad como la experiencia del usuario. Las mejoras de rendimiento, tiempos de respuesta más rápidos y nuevas funcionalidades se implementaron en octubre, asegurando que la plataforma siga siendo líder del mercado en la satisfacción efectiva de las necesidades de los clientes.</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Nuevo Flujo de Registro de Clientes:</strong>
                <p>Estamos actualizando el proceso de registro para nuevos clientes. Ahora, se creará un contacto en nuestro CRM antes de que comiencen a usar la plataforma. Esto nos permite conectarnos con ellos, negociar si es necesario y darles una introducción antes de que se sumerjan.</p>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Solicitud de Apoyo</h2>
            <p class="mb-4">Buscamos continuar escalando, y agradeceríamos su ayuda en las siguientes áreas:</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Talento de Ventas:</strong>
                <p>Si conoce a profesionales de ventas con experiencia en startups y empresas en fase de crecimiento, nos encantaría saber de ellos. Por favor, envíe sus CVs directamente, o siéntase libre de preguntar si no está seguro sobre su idoneidad.</p>
              </li>
              <li>
                <strong>Contactos de Agencias de Influencers:</strong>
                <p>Si tiene conexiones en agencias que trabajan con influencers, agradeceríamos una introducción. Estamos seguros de que podemos ayudar a estas agencias a estandarizar y automatizar sus procesos de pago, proporcionando un valor significativo.</p>
              </li>
            </ul>
            <p class="mb-4">Quiero agradecerles por su atención y por su continuo apoyo. Estaré encantada de responder cualquier pregunta que puedan tener.</p>
            <p class="mb-4">Saludos cordiales,</p>
            <p class="font-medium">Clara Herrera.</p>
          </div>
        </div>
      `,
    },
    quarterly: {
      quarter: `
        <div class="max-w-4xl mx-auto">
          <div class="mb-8">
            <p class="text-sm text-muted-foreground">16/01/2025, 10:54 - Zexel CRM</p>
            <h1 class="text-3xl font-bold mb-2">Informe Trimestral - Q3 2024</h1>
            <p class="text-lg">por <span class="font-medium">Clara Herrera</span></p>
            <p class="text-sm text-muted-foreground">15 de Oct, 2024 - 5 min. de lectura</p>
            <p class="mt-4 text-lg">Estimados accionistas y miembros del consejo, me complace presentar nuestro informe trimestral para el tercer trimestre de 2024.</p>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Resumen Ejecutivo</h2>
            <p class="mb-4">El tercer trimestre de 2024 ha sido un período de crecimiento sostenido y expansión estratégica para Zexel. Hemos logrado un aumento del 18% en ingresos en comparación con el trimestre anterior, superando nuestras proyecciones en un 5%. Nuestras iniciativas de optimización operativa han comenzado a dar frutos, con una reducción del 7% en costos operativos por cliente atendido.</p>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Logros Clave</h2>
            
            <h3 class="text-xl font-semibold mb-2">Crecimiento de Clientes</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <p>Incorporamos 12 nuevos clientes empresariales, incluyendo dos empresas Fortune 500.</p>
              </li>
              <li>
                <p>La tasa de retención de clientes aumentó al 94%, un incremento de 3 puntos porcentuales respecto al trimestre anterior.</p>
              </li>
              <li>
                <p>El valor promedio por cliente aumentó un 15%, reflejando el éxito de nuestra estrategia de venta cruzada.</p>
              </li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Innovación de Producto</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <p>Lanzamos 3 nuevas funcionalidades principales en nuestra plataforma, incluyendo análisis predictivo avanzado y automatización de flujos de trabajo.</p>
              </li>
              <li>
                <p>Completamos la integración con 5 plataformas de terceros, ampliando significativamente nuestro ecosistema.</p>
              </li>
              <li>
                <p>Redujimos el tiempo de carga de la plataforma en un 40%, mejorando significativamente la experiencia del usuario.</p>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Resultados Financieros</h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Ingresos:</strong>
                <p>€210K para el trimestre, un aumento del 18% respecto al Q2 2024.</p>
              </li>
              <li>
                <strong>Margen Bruto:</strong>
                <p>72%, un aumento de 3 puntos porcentuales respecto al trimestre anterior.</p>
              </li>
              <li>
                <strong>EBITDA:</strong>
                <p>€45K, representando un margen del 21%.</p>
              </li>
              <li>
                <strong>Efectivo Disponible:</strong>
                <p>€879K al final del trimestre, proporcionando un runway de 26 meses al ritmo actual de gasto.</p>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Desafíos y Mitigación</h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Competencia Creciente:</strong>
                <p>Hemos observado un aumento en la actividad competitiva. En respuesta, hemos acelerado nuestra hoja de ruta de producto y reforzado nuestras iniciativas de retención de clientes.</p>
              </li>
              <li>
                <strong>Escasez de Talento:</strong>
                <p>El mercado laboral sigue siendo competitivo para roles técnicos clave. Hemos implementado un programa de referencia mejorado y establecido asociaciones con instituciones educativas para crear un pipeline de talento sostenible.</p>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Perspectivas para Q4 2024</h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <p>Proyectamos un crecimiento de ingresos del 20-25% para Q4, impulsado por la temporada de compras navideñas y el lanzamiento de nuevas funcionalidades.</p>
              </li>
              <li>
                <p>Planeamos finalizar nuestra ronda de financiación Serie A en noviembre, con compromisos ya asegurados para el 80% del objetivo.</p>
              </li>
              <li>
                <p>Lanzaremos nuestra expansión a dos nuevos mercados europeos, con equipos locales ya en proceso de formación.</p>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Solicitud de Apoyo</h2>
            <p class="mb-4">A medida que nos preparamos para un fuerte cierre de año y un ambicioso 2025, valoramos su apoyo en las siguientes áreas:</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Conexiones Estratégicas:</strong>
                <p>Introducción a potenciales clientes empresariales en los sectores de retail y finanzas.</p>
              </li>
              <li>
                <strong>Asesoramiento en Expansión Internacional:</strong>
                <p>Orientación sobre consideraciones regulatorias y estrategias de entrada al mercado para nuestros planes de expansión europea.</p>
              </li>
              <li>
                <strong>Talento Ejecutivo:</strong>
                <p>Recomendaciones para nuestras búsquedas activas de un Director de Operaciones y un Vicepresidente de Ventas Internacionales.</p>
              </li>
            </ul>
            <p class="mb-4">Estamos profundamente agradecidos por su continuo apoyo y confianza en nuestro equipo. Esperamos con interés discutir este informe en nuestra próxima reunión de consejo.</p>
            <p class="mb-4">Atentamente,</p>
            <p class="font-medium">Clara Herrera<br>CEO, Zexel</p>
          </div>
        </div>
      `,
    },
  }

  // Devolver el informe apropiado basado en tipo y período
  return {
    content:
      reports[reportType as keyof typeof reports]?.[timeFrame as keyof typeof reports.monthly] ||
      `<h2>${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Informe - Último ${timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}</h2>
       <p>Este es un marcador de posición para el informe ${reportType} que cubre el último ${timeFrame}.</p>`,
  }
}

