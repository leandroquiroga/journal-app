# Journal App (React.js + Redux + Firestore)

Este proyecto se basa en un journal en donde vamos a poder tener todas nuestras notas guardadas para lleva un control de ellas. Cada usuario puede iniciar sesion con su cuenta de google o su email y contraseña, tambien podemos registrarnos, cada usuario puede tener sus propias notas en onde se puede subir una imagen para identificar las notas (opcional). Este proyecto esta pensado para el mobile desing. 

# Construido con 🛠️
* React.js
* React Router DOM v5
* Custom hooks
* Sass
* Firebase  
* Redux 
* Sweet Alert 
* Validator

# Funcionalidades ⚙️
## Login and Regiter 
Cada usuario que use la app tiene la chance de iniciar sesion con su cuenta de usuario, o su cuenta de google. Tambien puede registrarse a la hora de registrase debera registrarse con un nombre, un email (no puede ser con cualquier dominio) y el password (deben coicidir y debe ser entre 6 y 15 caracteres)

## Validaciones
Cuando iniciamos sesion debemos completar los campos, se debe respetar lo que pide ya que en caso de cumplir la validaciones no vamos a poder iniciar sesion o registrarnos, gracias a la libreria [Validator](https://www.npmjs.com/package/validator) ayuda mucho al registrar el dominio de los email, podemos controlar la cantidad de caracteres de nuestras contraseñas, etc. 

## CRUD con firestrore
Se realiza acciones de lectura, actualizar, crear y eliminar nuestras notas y todo gracias a firesotre, estas acciones se controlan gracias a redux. 

## Subida de imagenes 
Para subir imagenes se utiliza el servidor [Cloudary](https://cloudinary.com/), es super sencillo de usar y podemos utilizar con la base de datos de firestore. 

## Rutas privadas y publicas
Este proyecto utiliza react-router-dom en su version 5 (proximamente se actualizara a la ultima version) para proteger nuestras rutas, como por ejemplo una vez logeado no podemos realizar la visita a la ruta de login.

## Utilizacion de Redux
Al utilizar esta libreria en el proyecto se pudo dividir la funcionalidad de redux en varios pasos actions( en donde se encuentran todas las acciones que se realiza), types ( todos los types organizados por su nombre especifico), reducer ( una simple funcion que depende de el type para realizar determinada accion) y el store (en donde se almacenan todos los reducer utilizados en este proyecto )

## Custom Hooks
En este proyecto solo se usa un solo custom hooks que es el useForm, que se lo utiliza en todo el proyecto ya sea para logearse, registrarse hasta para crear una nota. 

## Test 
Proximamente..  

# Deploy 👨‍💻
[![Netlify Status](https://api.netlify.com/api/v1/badges/bc082737-73e3-4c3d-931c-317ebb8000a6/deploy-status)](https://myjournalprivate.netlify.app/)
# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);
