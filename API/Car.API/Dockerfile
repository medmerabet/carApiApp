FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY "API.sln" "API.sln"
COPY "Car.API" "Car.API/"
RUN dotnet restore "Car.API/Car.API.csproj"
COPY . .
WORKDIR "/src/Car.API"
RUN dotnet build "Car.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Car.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Car.API.dll"]