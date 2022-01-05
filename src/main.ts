import {createConnection} from "typeorm/browser";
import {Items, User} from "./core/database";


createConnection({
    type: 'postgres',
    url: 'postgress://username:password@localhost:5432/dbName?schema=public',
    entities: [User, Items] // you could also use a glob pattern but I usually just import them
})