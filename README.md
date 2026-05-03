#  AA Property Services

Sistema de gestión para villas, propietarios e incidencias desarrollado como proyecto intermodular del ciclo **Desarrollo de Aplicaciones Web (DAW)**.

---

##  Descripción del proyecto

AA Property Services es una aplicación diseñada para gestionar el mantenimiento y control de propiedades de lujo, permitiendo:

- Gestión de propietarios
- Gestión de villas
- Registro y seguimiento de incidencias
- Control de servicios asociados

El proyecto simula el funcionamiento real de una empresa de mantenimiento de propiedades, integrando base de datos, lógica de negocio y documentación técnica.

---

##  Problema que resuelve

Las propiedades requieren un control constante de:

- Estado general
- Mantenimiento
- Incidencias técnicas
- Servicios contratados

Este sistema centraliza toda la información y permite gestionarla de forma estructurada.

---

##  Tipo de usuarios

| Rol | Permisos |
|-----|----------|
| **Administrador** | Acceso completo al sistema. Gestión total de datos (CRUD). |
| **Propietario** | Consulta de su villa. Visualización de datos. Gestión de incidencias. |

---

##  Funcionalidades implementadas

- Alta, baja y modificación de propietarios, villas e incidencias
- Búsqueda de datos y listados completos
- Sistema de login por consola
- Control de roles (admin / propietario)
- Conexión real con base de datos

---

##  Tecnologías utilizadas

- **Java** — lógica de negocio y aplicación principal
- **MySQL** — base de datos relacional
- **JDBC** — conexión Java con MySQL
- **XAMPP** — servidor local
- **IntelliJ IDEA** — entorno de desarrollo
- **HTML + CSS** — portal web
- **Git & GitHub** — control de versiones

---

##  Estructura del proyecto

```
AA_PROPERTY_SERVICES/
│
├── bbdd/                          ← Base de Datos
│   ├── 01_creacion_tablas.sql
│   ├── 02_insercion_datos.sql
│   ├── 03_consultas.sql
│   ├── modelo-er.png
│   ├── modelo-relacional.drawio.png
│   └── README.md
│
├── docs/
│   └── cliente/
│
├── ITP/                           ← Itinerario / Trabajo Personal
│   ├── Perfil_profesional.md
│   ├── Portfolio_personal.md
│   ├── Presentacion_proyecto.md
│   └── Reflexión.md
│
├── lenguaje_de_marcas/
│   └── web/                       ← Página web del proyecto
│       ├── assets/img/
│       │   ├── AAP-S.svg
│       │   ├── favicon.png
│       │   └── (imágenes de villas .webp / .jpg)
│       ├── css/
│       │   └── styles.css
│       ├── js/
│       │   └── menu.js
│       ├── index.html
│       ├── contacto.html
│       ├── login-clientes.html
│       ├── login-personal.html
│       ├── panel-clientes.html
│       ├── panel-personal.html
│       ├── servicios.html
│       └── sobre-nosotros.html
│
├── MPO/                           ← Módulo Profesional Optativo
│   └── README.md
│
├── programacion/                  ← Programación (Java)
│   ├── aa_programcion_robles/     ← Proyecto Java principal
│   └── README.md
│
├── sistemas_informaticos/         ← Sistemas Informáticos
│   ├── capturas/                  ← Evidencias de funcionamiento
│   └── informe_tecnico.md         ← Este documento
│
├── .gitignore
├── desktop.ini
└── README.md
```

---

##  Base de datos

La base de datos está diseñada para representar el funcionamiento real del negocio.

**Entidades principales:**

- Propietario
- Villa
- Incidencia
- Servicios *(conceptualmente)*

**Relaciones:**

- Un propietario → tiene una o varias villas
- Una villa → puede tener múltiples incidencias

---

##  Sistema de login

- Implementado por consola
- Validación mediante base de datos
- Diferenciación de roles: Administrador / Propietario
- Restricción de funcionalidades según el tipo de usuario

---

##  Flujo de la aplicación

```
Inicio del programa (MenuPrincipal)
        ↓
   Login de usuario
        ↓
Acceso a menú según rol
        ↓
 Gestión de datos (CRUD)
        ↓
  Consulta de información
        ↓
   Salida del sistema
```

---

##  Decisiones técnicas

- Arquitectura por capas: Controller → Service → DAO → Model
- Separación de responsabilidades
- Uso de JDBC para conexión real con base de datos
- Aplicación orientada a consola para simplificar la interacción

---

##  Cómo ejecutar el proyecto

### 1. Requisitos previos

- Java JDK 17+
- XAMPP (MySQL)
- IntelliJ IDEA

### 2. Configurar la base de datos

1. Iniciar MySQL desde XAMPP
2. Crear la base de datos:
   ```sql
   CREATE DATABASE aa_property_services;
   ```
3. Ejecutar los scripts en orden:
   ```
   01_creacion_tablas.sql
   02_inserts.sql
   ```

### 3. Configurar la conexión

Editar la clase `ConexionBD` con los datos del entorno local:

```java
String url  = "jdbc:mysql://localhost:3306/aa_property_services";
String user = "root";
String password = "";
```

### 4. Ejecutar

Lanzar `MenuPrincipal.java` e interactuar mediante el menú por consola.

---

##  Entorno de ejecución

- PC local (Windows 11)
- Servidor local con XAMPP

---

##  Evidencias

Se incluyen capturas de ejecución, vídeos de funcionamiento y pruebas del sistema en:

```
sistemas_informaticos/
programacion/
```

---


##  Autor

**Jaime Robles Valverde** — Proyecto intermodular DAW

---

