# pwa-parcial-2-dwn3av-alsinet-nicolas

Parcial 2: Trabajo práctico domiciliario

Consignas para la entrega del parcial:
● Para la entrega del presente parcial, debe hacerse el desarrollo y entrega sobre un repositorio de
github.
■ [apellido]-[nombre]
○ TODO EN MINÚSCULAS Y UTILIZANDO EL GUIÓN MEDIO COMO SEPARADOR. ○
Ejemplos:
■ pwa-parcial-2-dwm3bv-medina-sergio
○ En caso de incumplir con el formato del nombre, se restarán automáticamente dos
puntos, pudiendo desaprobar por este error el parcial.

● La entrega será mediante Classroom, en la actividad correspondiente que genere el docente.
● Fecha de entrega:
○ La fecha de entrega será la que indique el docente en la actividad del Classroom

Consigna del trabajo
Realizar una aplicación web que funciona completamente offline. Se debe tomar como base lo
realizado en el parcial 1.
Obligatorio (verificar uno a uno):
interfaz amigable con el usuario, con uso de Service Worker
precaching todos los elementos necesarios para la carga inicial
incluir manifiesto correctamente
navegación principal (home)
listado de artículos
vista ampliada o detalle de artículos (en subpágina o bien en modal)

Diseño y Programación Web
Aplicaciones web progresivas

Profesor Medina Sergio
sergiod.medina@davinci.edu.ar

pwa-parcial-2-dwm3av-

Página 2/2

uso de persistencia (localStorage) que se vea reflejado en la interacción
uso de async/await por lo menos una vez
debe haber algún formulario que esté validado.
al menos un consumo de datos a servidor por GET usando api externa, o api php propia
(no es válido consumir un json pero se puede leer el json devolverlo desde el backend).
al menos un envío de datos a servidor por POST (por ejemplo api php)
botón de instalación (que se oculte post instalación)

Adicionales:
interacción funcional (si el envío o recepción HTTP falla debería saberlo el usuario, por
ejemplo mostrando un mensaje)
uso de notificaciones (testeable)
navegación secundaria (subpágina)
Uso combinado de promise y asyc-await
Validación de datos en el back (con fines de testeo).
Validación de datos del formulario (front) con el back (los datos son válidos para el envío, pero en
la práctica son inválidos, por ejemplo un nombre que incluya letras o caracteres especiales como
el @) .
Configuración de notificaciones usando fcm

Plus:
- Uso apropiado de github para registro de cambios (commit a commit)
- Uso apropiado de convenciones de nomenclatura js
- Uso de convenciones para estilos.