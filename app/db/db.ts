import * as path from "path";
import * as sqlite3 from "sqlite3";

const dbFilePath = path.join(process.cwd(), "data.db");

function logError(error:Error|null){
    if(!error) return;
    console.error(`An Error occurred on DB: ${error}`);
}

const db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, logError);
export default db;