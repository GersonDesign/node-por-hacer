const argv = require('./config/yargs').argv;
const porHacer  = require('./tareas/');
const colors = require('colors');
let commando = argv._[0];

switch (commando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion)
    console.log(tarea);
    break;
  case 'listar':
    let listado = porHacer.getListado();
    listado.forEach((item) => {
      console.log('Por hacer'.green);
      console.log(item.descripcion);
      console.log("Estado:",item.completado);
      console.log('---------'.green);
    });

    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    let borrado = porHacer.actualizar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log('No hay nada');
}
