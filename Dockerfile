#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["App.csproj", "."]
RUN dotnet restore "./App.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "App.csproj" -c Release -o /app/build

# Instalar o Node.js e npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

FROM build AS publish
RUN dotnet publish "App.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/out .
ENTRYPOINT ["dotnet", "App.dll"]


FROM mcr.microsoft.com/dotnet/core/sdk AS build-env
WORKDIR /app

# Copy csproj and restore
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build


# Build runtime image
FROM mcr.microsoft.com/dotnet/core/runtime
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "DockerTest.dll"]