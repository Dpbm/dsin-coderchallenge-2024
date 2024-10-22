import db from "./db";

function logError(error:Error|null){
    if(!error) return;
    console.error(`Error on DB migration: ${error}`);
}


function migrate(){
    db.serialize(() => {
        db.run(
            `
                CREATE TABLE IF NOT EXISTS spaceships (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    size TEXT NOT NULL,
                    color TEXT NOT NULL,
                    damage TEXT NOT NULL,
                    lat NUMERIC NOT NULL,
                    lng NUMERIC NOT NULL,
                    survivors INTEGER NOT NULL,
                    survivors_description TEXT NOT NULL,
                    value INTEGER NOT NULL,
                    military_power INTEGER NOT NULL                    
                );            
            `,
            logError
        );
        db.run(
            `
                CREATE TABLE IF NOT EXISTS weapons (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    spaceship_id INTEGER,
                    name TEXT NOT NULL,
                    power INTEGER NOT NULL,
                    FOREIGN KEY(spaceship_id) REFERENCES spaceships(id)
                );
            `,
            logError
        );
    });
    db.close();
}

migrate();