FROM openjdk:17

ARG JAR_FILE=*.jar
COPY ./build/libs/*.jar app.jar

# 예: 프로젝트의 src/main/resources/certs/yourcert.cer 파일을 복사
COPY ./src/main/resources/certs/yourcert.cer /tmp/yourcert.cer

# KeyStore에 인증서 추가
RUN keytool -importcert -alias your-alias -keystore /usr/lib/jvm/java-17-openjdk-amd64/lib/security/cacerts -storepass changeit -file /tmp/yourcert.cer -noprompt

ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8080

