# API de películas y cines

API REST con Node.js, Express y MongoDB para gestionar **películas** y **cines**, con búsquedas por título, género y año.

## Endpoints

### Películas (`/movies`)

| Método | Ruta | Qué hace |
|---|---|---|
| `GET` | `/movies` | Todas las películas. |
| `GET` | `/movies/id/:id` | Por id. |
| `GET` | `/movies/title/:title` | Por título. |
| `GET` | `/movies/genre/:genre` | Por género. |
| `GET` | `/movies/year/:year` | Películas de 2010 en adelante (ahora el año está fijo en el código y se ignora `:year`). |
| `POST` | `/movies` | Crea una película. |
| `PUT` | `/movies/:id` | La modifica. |
| `DELETE` | `/movies/:id` | La borra. |

### Cines (`/cinema`)

`GET`, `POST`, `PUT /:id` y `DELETE /:id`. Cada cine tiene nombre, ubicación y la lista de películas que proyecta (referencias a `movies`).

## Cómo arrancarlo

1. Crea un `.env` con `DB_URL` (cadena de conexión de MongoDB).
2. Carga las películas de ejemplo y arranca:

```bash
npm install
npm run movies-seed
npm run dev      # http://localhost:8000
```

## Tecnologías

Node.js, Express, MongoDB y Mongoose.

## Autor

Sergio Bernabé
