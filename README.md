# Tutor Management App

Aplicación para gestión de tutores, usuarios y reservas desarrollada con Angular e Ionic.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v18.x o superior)
- [npm](https://www.npmjs.com/) (v9.x o superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (v7.x o superior)

## Instalación

1. Clonar repositorio:
```bash
- git clone `https://github.com/samjes1/Angular-Ionic-front-test.git`
```
```
- cd Angular-Ionic-front-test
```

2. Instalar dependencias 
``` bash
npm install 
```
3. Instalar CLI Angular y Ionic (Si no estan instalados) 
```bash
npm install -g @angular/cli@latest @ionic/cli@latest 
```

## Configuración 

4. Configurar variables de entorno
```
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // URL de tu API
};
```

## Levantar APP 

5. Ejecuta el comando
```ionic serve``` ó ```ng serve```  

## Emulación en local android
1. Hacer build de la App 
```bash
ionic build 
npx cap sync android
```
2. Levantar en android
 ```
 npx cap open android
 ```