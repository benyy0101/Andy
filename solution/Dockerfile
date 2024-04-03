FROM openjdk:17

ARG JAR_FILE=*.jar
COPY ./build/libs/*.jar app.jar
COPY ./src/main/resources/certs/j10a102.p.ssafy.io.crt /tmp/j10a102.p.ssafy.io.crt

# KeyStore에 인증서 추가
RUN keytool -importcert -alias your-alias -keystore /usr/java/openjdk-17/lib/security/cacerts -storepass changeit -file /tmp/j10a102.p.ssafy.io.crt -noprompt

ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8080
