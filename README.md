# Challenge BuscaMina Backend
## _Documentación_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Building in Heroku, 
Desarrollado con NodeJs and MongoDB
Pasos a seguir para correr la aplicación.

## Instalación

Se requiere [Node.js](https://nodejs.org/) v10+ to run.

Instalación de dependencias y servidor en local.
```sh
npm install
npm run dev --desarrollo
```

- en el archivo .env se encuentra el puerto y la conexión al cluster de MongoDB para realizar pruebas locales
- Dentro del repo se encuentra la colección de postman con todos los metodos listo para probar al entorno online
- Para fines de pruebas resulta mas sencillo probar desde postman al entorno antes mencionado.
- Para correr los test es necesario tener instalado MongoCompass y conectar con la coleccion de bases que se encuentra en el archivo .env

## Testing
Ejecutar para realizar los test
```sh
npm run test
```

-------------------------------------