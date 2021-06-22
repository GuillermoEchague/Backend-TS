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
npm install uniqid 
# Depencias para reconocer sintaxis
npm i --save-dev @types/express --save-dev
npm i --save-dev @types/mongoose --save-dev
npm i --save-dev @types/bcrypt --save-dev
npm i --save-dev @types/jsonwebtoken --save-dev
npm i --save-dev @types/express-fileupload --save-dev
npm i --save-dev @types/uniqid --save-dev
```

## Archivo desde Repositorio
```bash
# Una vez que se tiene el archivo desde el repo
npm install
# Subir base de datos de mongo

# TS modo de escucha
tsc -w
# Ejecución en el servidor
nodemon dist/
```

## Codigos GIT
```bash
# Revisar logs
git log --pretty=oneline
#Cargar cambios y versiones
git branch -M main
git push -u origin main
# Generar Tags
           (Version) 
git tag -a V1.0.0 -m "Mensaje"
git push --tags
#branches (Ramas)
git add .
git checkout -b room
git commit -m "Agregado de dependencias"
git push origin room
#Unir Ramas a main
git checkout main
git merge <Nombre Rama> -m "Mensaje rama"
```