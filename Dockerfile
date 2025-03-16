# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Instala pnpm de manera global
RUN npm install -g pnpm

# Copia package.json y pnpm-lock.yaml para aprovechar la caché
COPY package.json pnpm-lock.yaml ./

# Instala todas las dependencias (incluyendo devDependencies)
RUN pnpm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación (ejecuta "pnpm build" definido en package.json)
RUN pnpm build


# Etapa 2: Imagen final de producción
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Instala pnpm de manera global
RUN npm install -g pnpm

# Copia package.json y pnpm-lock.yaml para instalar solo dependencias de producción
COPY package.json pnpm-lock.yaml ./

# Instala solo dependencias necesarias para producción
RUN pnpm install --prod

# Copia desde la etapa builder los archivos construidos
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# (Opcional) Si necesitas copiar otros archivos estáticos o de configuración, agrégalos aquí
# COPY --from=builder /app/... ./...

# Expone el puerto por defecto de Next.js (3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["pnpm", "start"]
