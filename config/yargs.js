const descrip = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea'
}

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente de la tarea'
}

const argv = require('yargs')
              .command('crear', 'Crear un elemento por hacer', {
                descripcion: descrip
              })
              .command('actualizar', 'Actualizar el estado de la tarea', {
                descripcion: descrip,
                completado //ES6 
              })
              .command('borrar', 'Borrando tarea',{
                descripcion: descrip
              })
              .help()
              .argv;


module.exports = {
  argv
}
