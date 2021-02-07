import { getHeroeById } from "./repasoJS/02impExport";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea, importar
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe) : reject("No se encontro el heroe");
        }, 2000);
    });
};

//Cuando quieres utilizar el parametro recibido automaticamente del then y catch
getHeroeByIdAsync(1).then(console.log).catch(console.warn);

//Ejemplo de código no tan optimizado

/*
getHeroeByIdAsync(10)
    .then((heroe) => {
        console.log("El heroe seleccionado es: " + heroe.name);
    })
    .catch((err) => console.warn(err));
*/
