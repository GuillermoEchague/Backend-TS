import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import userRoutes from './routes/usuario';
import postRoutes from './routes/post';

const server = new Server();


// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// FileUpload
server.app.use(fileUpload({useTempFiles: true}));

// Rutas de mi app
server.app.use('/user', userRoutes );
server.app.use('/posts', postRoutes );

// Conectar DB
// db
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE_CLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false 
        });
        console.log('DB Connected');
    } catch (error) {
        console.log('DB Connection Error', error);
    }
};

// executes database connection
db();


// Levantar express
server.start( () => {
    console.log(`Servidor corriendo en puerto ${ server.port }`);
});
