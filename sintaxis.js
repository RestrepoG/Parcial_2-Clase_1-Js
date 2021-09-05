// Variable Primitivas
let Nombre= undefined
let Apellido= 'Restrepo'
let Edad= 20
let Estado= true

// Costantes
// Arreglos
const Numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Objetos
const Articulos= {
    Descripcion: 'Coca-Cola 3L',
    Precio: 3.00,
    Stock: 1000
}
//console.log('Articulo: ', Articulos)

// Accesar A Los Elementos De Un Objeto
Articulos.Precio= 2.50
Articulos.Estado= true
/* console.log('Articulo: ', Articulos)
console.log('Descripcion: ', Articulos.Descripcion, '    Precio: ', Articulos.Precio) */

const Notas= [
    {
        Nombre: 'Guillermo', Promedio: 35,
        Parciales:[
            {PrimerParcial: [20, 20]},
            {SegndoParcial: [15, 15]}
        ]
    },
    {
        Nombre: 'Alejandro', Promedio: 40,
        Parciales: [
            {PrimerParcial: [20, 20]},
            {SegundoParcial: [20, 20]}
        ]
    },
    {
        Nombre: 'Javier', Promedio: 45,
        Parciales: [
            {PrimerParcial: [25, 25]},
            {SegundoParcial: [20, 20]}
        ]
    }
]

// Estructuras Condicionales
/* if (Nombre)
    console.log("Nombe:", Nombre, "Edad:", Edad)
else
    console.log("No Ha Ingresado Ningun Nombre: ", Nombre) */

// Null, Undefined, '', "": Equivalentes al momento de decir que no existe cotenido en una variable.

// Otra Forma De Escribir Una Estructura Condicional
/* let Resp= (Nombre == undefined)? 'No Ha Ingresado Ningun Nombre' : Nombre
console.log(Resp) */
