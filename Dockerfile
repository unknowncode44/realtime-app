# Espicificamos la version de node e imagen docker para nuestro entorno de desarrollo
FROM node:16.14.0 AS development

# Especificamos nuestro directorio de trabajo
WORKDIR /realtime-app

# Copiamos los archivos necesarios, esto incluye los .json que son generados por Angular
COPY package*.json ./
COPY . .

# Especificamos los comandos necesarios para crear el build 
RUN npm run build

# Exponemos el puerto donde se correra nuestro entorno de desarrollo
EXPOSE 4200

