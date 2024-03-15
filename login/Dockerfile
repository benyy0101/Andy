# Base image
FROM openjdk:17

# Set the working directory
WORKDIR /app

# Copy the built JAR file into the container
COPY login.jar /app/

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "login.jar"]

