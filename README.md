# Desarrollo Servidor con Node - TS


## Inicio del proyecto
```bash
# Inicio del proyecto
npm init -y
# Ejecución de index.ts
tsc index.ts
node index.js
# Archivo de inicialización
tsc --init
# Modo observación
tsc -w
# Ejecución Server
node dist/
# Ejecición con nodemon
nodemon dist/
```

## Instalación dependencias
```bash
# nodemon
npm i nodemon
# Instalaciones
npm install express body-parser cors mongoose express-fileupload jsonwebtoken bcrypt 

npm i --save-dev @types/express --save-dev
npm i --save-dev @types/mongoose --save-dev
npm i --save-dev @types/bcrypt --save-dev
npm i --save-dev @types/jsonwebtoken --save-dev
```