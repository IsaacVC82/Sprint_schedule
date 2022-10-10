import React from "react";


function Tasks(props){
    return(
        <><div className='card-container'>
            <h1>Sprint 1</h1>
            <div className="text-container">
                <p className="task">Reunión General 1</p>
                <p>- Preparar el material visual para la reunión con el cliente</p>
                <p>- Reunión con el equipo antes de la junta con el cliente</p>
                <p>- Reunión con el cliente</p>
                <p>Nota: En la reunión con el cliente se deberan acordar los criterios de \n aceptación del proyecto</p>
                <p className="task">Reunión Diseño 1</p>
                <p>- Reunión con el diseñador para una lluvia de ideas</p>
                <p>- Diseño de una nueva paleta de colores congruente con la imagen de la empresa </p>
                <p>- Bosquejar varias versiones de la página principal</p>
                <p>- Bosquejar todo el mapa del sitio</p>
                <p className="task">Reunión Coders 1</p>
                <p>- Reunión de coders para la planeación de la base de datos </p>
                <p>- Modelado de la Base de datos</p>
                <p>- Testear el modelado de la base de datos</p>
                <p className="task">Diseño borrador</p>
                <p>- Diseñar la tipografía y los headers para el catalogo</p>
                <p>- Diseñar la pagina principal y el menú de opciones</p>
                <p>- Diseñar el carrito de compras</p>
                <p>- Diseñar la vista de las páginas secundarias</p>

            <div className="card-container">
                <h1>Sprint 2</h1>
                <div className="text-container">
                    <p className="task">Desarrollo database</p>
                    <p>- Desarrollar el modelo de la base de datos</p>
                    <p>- Hacer pruebas de eficiencia de la base de datos </p>
                    <p className="task">Diseño Catalogo web</p>
                    <p>- Programar la página principal</p>
                    <p>- Programar el carrito de compras</p>
                    <p>- Programar las paginas secundarias o de los productos</p>
                    <p>Nota: En el diseño del catalogo se debera tomar muy en cuenta la  \n imagen de la empresa</p>
                    <p className="task">Test 1</p>
                    <p>- Testear la seguridad del catalogo web</p>
                    <p>- Testear la accesibilidad del catalogo web</p>
                    <p>Nota: La accesibilidad y la UX serán nuestro principal objetivo en esta \n parte del sprint</p>
                </div>
                </div>

                <div className="card-container">
                    <h1>Sprint 3</h1>
                    <div className="text-container">
                        <p className="task">Reunión General 2</p>
                        <p>- Preparar los avances a mostrar </p>
                        <p>- Reunión con el cliente para establecer ajustes</p>
                        <p className="task">Ajustes diseño</p>
                        <p>- Realizar los ajustes acordados con el cliente durante la segunda junta general</p>
                        <p>- Mandar los cambios al cliente para su aprobación</p>
                        <p className="task">Test final</p>
                        <p>- Realizar test de seguridad del catalogo</p>
                        <p>- Realizar test de accesibilidad del catalogo</p>
                        <p>- Reunión con el cliente para el lanzamiento del catalogo</p>
                        <p>Nota: Esta será la reunión clave donde sabremos si alcanzamos la meta</p>

                    </div>
                </div>


                
            </div>
            </div></>



    );
    }
    
export default Tasks;
