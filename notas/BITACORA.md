# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción                  | Que cambio en la pantalla                                  | Se mantiene al recargar (Si/No) |
| ---------------------------- | ---------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | Cambió el texto del título en tiempo real                  | No                              |
| textContent desde app.js     | El título cambió a "Hola TECSUP"                           | Sí                              |
| style.color                  | El color del título cambió a azul                          | Sí                              |
| classList.add                | Se le aplicó fondo amarillo al párrafo (clase "destacado") | Sí                              |
| createElement + appendChild  | Se creó y agregó el elemento "JavaScript" a la lista       | Sí                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                     | Cuanto suma por accion |
| -------------- | ----------------------------------------- | ---------------------- |
| click          | Dar un clic simple sobre el botón         | Suma 1                 |
| dblclick       | Dar un doble clic rápido sobre el botón   | Suma 1                 |
| mouseover      | Pasar el puntero del ratón sobre el botón | Suma 1                 |

- `evento.type`: Muestra el nombre o tipo de evento que se acaba de activar (por ejemplo, "click").
- `evento.target`: Muestra el elemento HTML exacto que recibió la interacción (en este caso, `<button id="btnSumar">Sumar 1</button>`).

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                     | Se recargo la pagina (Si/No) |
| --------------------------------------- | ----------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El saludo cambia en tiempo real letra por letra             | No                           |
| Enviar sin preventDefault               | El mensaje de enviado aparece solo un instante y desaparece | Sí                           |
| Enviar con preventDefault, correo sin @ | Muestra en rojo el mensaje "Correo no valido: falta @"      | No                           |
| Enviar con preventDefault, correo con @ | Muestra el mensaje "Enviado: " seguido del correo           | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875               |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90                 |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510                |

Usar una clase permite reutilizar la misma estructura de datos y métodos (como calcular descuentos o formatear texto) para cualquier cantidad de productos.
Además, facilita generar y renderizar dinámicamente los elementos HTML en la pantalla mediante un bucle, evitando modificar manualmente el documento HTML cada vez que se agregue un nuevo elemento[cite: 13, 14].

## Ejercicio 6: DOM, eventos y objetos juntos

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina                              | Correcto (Si/No) |
| --------------- | -------------------------------------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                                                    | Sí               |
| + Lapicero 3.20 | 15.70                                                    | Sí               |
| + Mochila 89.90 | 105.60                                                   | Sí               |
| Sin Number()    | Error en consola (this.precio.toFixed is not a function) | No               |

| Pieza  | Linea de tu codigo donde aparece                         | Para que sirve                                                                               |
| ------ | -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| DOM    | document.querySelector, createElement("li"), textContent | Seleccionar los elementos HTML e insertar los productos y el total en pantalla               |
| Evento | formProducto.addEventListener("submit", ...)             | Escuchar el envío del formulario para procesar la entrada sin recargar la página             |
| Objeto | new Producto(...), new Carrito(), carrito.agregar(...)   | Estructurar la información de cada producto y manipular la lista del carrito con sus totales |
