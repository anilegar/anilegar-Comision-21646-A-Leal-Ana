import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize('db_task', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


export const startDb = async () => {
    try {
        await sequelize.authenticate();
        //borrar base de datos//
        await sequelize.sync({ force: true});
        await sequelize.sync();
        console.log('Conexion establecida correctamente.');
      } catch (error) {
        console.error('Error al establecer conexion:', error);
      }
}