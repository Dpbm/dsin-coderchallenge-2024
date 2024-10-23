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
                    name TEXT NOT NULL,
                    size TEXT NOT NULL,
                    color TEXT NOT NULL,
                    damage TEXT NOT NULL,
                    gas TEXT NOT NULL,
                    lat NUMERIC NOT NULL,
                    lng NUMERIC NOT NULL,
                    danger INTEGER NOT NULL,
                    survivors INTEGER NOT NULL,
                    survivors_description TEXT NOT NULL,
                    value INTEGER NOT NULL,
                    military_power INTEGER NOT NULL,
                    classification TEXT NOT NULL,

                    CHECK(typeof("name") = "text" AND length("name") >= 1 AND length("name") <= 30),
                    CHECK(typeof("size") = "text" AND length("size") >= 1 AND length("size") <= 8),
                    CHECK(typeof("color") = "text" AND length("color") >= 1 AND length("color") <= 8),
                    CHECK(typeof("damage") = "text" AND length("damage") >= 1 AND length("damage") <= 22),
                    CHECK(typeof("gas") = "text" AND length("gas") >= 1 AND length("gas") <= 14),
                    CHECK(typeof("survivors") = "integer" AND survivors >= 0 AND survivors <= 200),
                    CHECK(typeof("survivors_description") = "text" AND length("survivors_description") >= 0 AND length("survivors_description") <= 400),
                    CHECK(typeof("value") = "integer" AND value >= 0 AND value <= 10),
                    CHECK(typeof("danger") = "integer" AND danger >= 0 AND danger <= 10),
                    CHECK(typeof("military_power") = "integer" AND military_power >= 0 AND military_power <= 10),
                    CHECK(typeof("classification") = "text" AND length("classification") >= 1 AND length("classification") <= 28)
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
                    
                    FOREIGN KEY(spaceship_id) REFERENCES spaceships(id),

                    CHECK(typeof("name") = "text" AND length("name") >= 1 AND length("name") <= 30),
                    CHECK(typeof("power") = "integer" AND power >= 1 AND power <= 10)
                );
            `,
            logError
        );
    });
    db.close();
}

migrate();