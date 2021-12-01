Aplicación creada por Esteban Fredes
https://github.com/estebancitoito

El contexto de este problema es poder desarrollar un sitio web funcional, que permita rellenar formularios para agendar horas médicas. Es importante que los campos de los formularios cumplan ciertas restricciones y validaciones. 

Para dar solución a este problema, decidí utilizar para el backend el framework Flask


Instalaciones:

Backend: Las instalaciones que requerí en el backend fueron relacionadas con el comando pip que otorga Python, utilizo la versión 3.1. Primero crée un entorno virtual con el comando pip install virtualenv, una vez instalado el entorno, lo cree en la carpeta de backend obteniendo mi entorno "venv" con el comando virtualenv. Luego instalé diferentes módulos para mi aplicación, en este caso instalé: el framework Flask en su versión 2.0.2, el enlace de conexión con la base de datos PyMongo en su versión 2.3 y cors para utilizar como servidor en su versión 3.0.10.

Frontend: Para esta sección utilicé React, se instalaron los módulos react-router-dom y bootswatch.

Base de datos: La base de datos utilizada fue mongoDB en su versión 5.0.4. 


Instrucciones para abrir el sitio:

Para realizar todas las instruscciones utilicé distintas consolas de comando.

1.- Para acceder a la página desde el frontend se utiliza el comando npm start en la ruta C:\Users\Esteban\Desktop\Vista-web-consultora\frontend

2.- Para prerarar la conexión a la base de datos se utiliza el comando mongod en la ruta C:\Users\Esteban\Desktop\Vista-web-consultora\backend

3.- Para conectar con el backend primero realizo establezco un entorno virtual venv, donde escribo el comando venv\Scripts\activate.bat en la ruta C:\Users\Esteban\Desktop\Vista-web-consultora\backend, luego en otra línea de comando en la misma ruta, python src/app.py


El sitio recibe los datos rellenados en los campos y lo guarda en la base de datos, no se puede validar los campos. La funcionalidad extra de buscar una cita agendada por rut no alcanzó a desarrollarse. 
Considerado en terminar el sitio a futuro.
