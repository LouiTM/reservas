# 1. ビルド用の環境（Java 17）
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Mavenのラッパーと設定ファイルをコピー
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN chmod +x mvnw

# ソースコードをコピーしてビルド（テストはスキップ）
COPY src ./src
RUN ./mvnw clean package -DskipTests

# 2. 実行用の環境（軽量なJava 17 JRE）
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# ビルドしたJARファイルをコピー
COPY --from=build /app/target/reservas-0.0.1-SNAPSHOT.jar app.jar

# Renderが使うポートを開放
EXPOSE 8080

# アプリケーションの起動
ENTRYPOINT ["java", "-jar", "app.jar"]