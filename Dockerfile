FROM maven:3.6 AS builder
WORKDIR /control-e-backend
COPY / .
RUN mvn package -s ./.m2/settings.xml

FROM openjdk:8-jdk-alpine
COPY --from=builder control-e-backend/target/*.jar control-e-0.0.1-SNAPSHOT.jar
CMD ["java", "-jar", "control-e-0.0.1-SNAPSHOT.jar"]
