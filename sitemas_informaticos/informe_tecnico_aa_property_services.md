#  Informe Técnico – Entorno de Ejecución
## AA Property Services

---

##  Descripción

Este documento describe el entorno necesario para ejecutar la aplicación desarrollada para **AA Property Services**, un sistema de gestión de villas, propietarios e incidencias.

La aplicación está desarrollada en **Java** y conectada a una base de datos **MySQL** mediante **JDBC**, permitiendo la gestión de datos reales del negocio.

---

## 1️ Tipo de sistema

El sistema se ejecuta en:

>  **PC de usuario con servidor local (XAMPP)**

 **Justificación**

- Proyecto de nivel académico (FP Superior – 1º DAW)
- No requiere despliegue en servidor real
- Permite desarrollo, pruebas y ejecución en un mismo entorno
- Fácil instalación y mantenimiento

---

## 2️ Requisitos de hardware

###  Mínimos

| Componente | Especificación |
|---|---|
| CPU | Intel i3 / Ryzen 3 |
| RAM | 4 GB |
| Almacenamiento | 10 GB libres |

###  Recomendados

| Componente | Especificación |
|---|---|
| CPU | Intel i5 / Ryzen 5 o superior |
| RAM | 8 GB o más |
| Almacenamiento | SSD recomendado |

---

## 3️ Sistema operativo

 **Principal**
- Windows 11

 **Alternativa**
- Linux (Ubuntu)

 **Justificación**

Windows 11 es el entorno utilizado durante el desarrollo y garantiza compatibilidad total con IntelliJ, Java y XAMPP.

---

## 4️ Instalación del entorno

###  Paso 1: Instalar Java (JDK)

- Descargar **JDK 17** o superior
- Configurar variable de entorno `JAVA_HOME`

###  Paso 2: Instalar IntelliJ IDEA

- Descargar versión **Community**
- Abrir el proyecto Java

###  Paso 3: Instalar XAMPP

- Descargar **XAMPP**
- Iniciar el servicio **MySQL**

###  Paso 4: Crear base de datos

1. Abrir **phpMyAdmin**
2. Crear base de datos:

```
aa_property_services
```

3. Ejecutar los scripts SQL:
   - `01_creacion_tablas.sql`
   - `02_inserts.sql`

###  Paso 5: Configurar conexión

Editar la clase `ConexionBD`:

```java
String url = "jdbc:mysql://localhost:3306/aa_property_services";
String user = "root";
String password = "";
```

###  Paso 6: Ejecutar aplicación

- Ejecutar `MenuPrincipal.java`
- Interactuar mediante menú por consola

---

## 5️ Usuarios, permisos y estructura

###  Tipos de usuarios

#### Administrador
- Acceso completo (CRUD)
- Gestión total del sistema

#### Propietario
- Acceso limitado
- Consulta de datos
- Gestión de incidencias

###  Estructura del proyecto

El repositorio está organizado por **asignaturas** del ciclo formativo:

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

###  Almacenamiento de datos

- Base de datos **MySQL**

###  Copias de seguridad

- Exportación desde **phpMyAdmin**
- Archivos `.sql`

Ruta recomendada:

```
/backups/
```

---

## 6️ Mantenimiento

###  Actualizaciones

- Java (JDK)
- IntelliJ IDEA
- XAMPP / MySQL

**Frecuencia:** cada 2–3 meses

###  Revisiones

- Estado de la base de datos
- Conexión JDBC
- Errores en consola

###  En caso de fallo

1. Verificar que MySQL está activo
2. Revisar conexión en `ConexionBD`
3. Comprobar errores en consola
4. Restaurar backup si es necesario

---

## 7️ Seguridad básica

- Sistema de login por consola
- Separación de roles
- Control de acceso a datos

###  Mejoras futuras

- Encriptación de contraseñas
- Sistema de autenticación real
- Uso de HTTPS

---

## 8️ Evidencias

Se incluyen capturas de pantalla dentro de la carpeta de la asignatura:

```
sistemas_informaticos/
└── capturas/
    ├── funcionamiento_web
    ├── funcionamiento_java
    ├── funcionamiento bbdd
    
```

Ejemplos:

- Ejecución del programa
- Login funcionando
- Gestión de datos
- Base de datos en phpMyAdmin

---

##  Conclusión

El sistema está diseñado para ejecutarse en un **entorno local controlado**, cumpliendo los requisitos del proyecto y permitiendo una gestión completa de la aplicación sin necesidad de infraestructura compleja.
