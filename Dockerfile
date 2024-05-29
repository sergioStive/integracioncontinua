# Usa una imagen base oficial de OpenJDK 11
FROM openjdk:11-jre-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo JAR de la aplicación al directorio de trabajo
COPY target/myapp.jar /app/myapp.jar

# Expone el puerto en el que la aplicación va a correr (por ejemplo, 8080)
EXPOSE 8080

# Define el comando por defecto a ejecutar cuando se inicie el contenedor
CMD ["java", "-jar", "myapp.jar"]
