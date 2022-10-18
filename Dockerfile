FROM maven:3.6 AS builder
WORKDIR /app
COPY / .
RUN mvn package

FROM openjdk:8-jdk-alpine
COPY --from=builder app/target/*.jar control-e-0.0.1-SNAPSHOT.jar
CMD ["java", "-jar", "control-e-0.0.1-SNAPSHOT.jar"]
