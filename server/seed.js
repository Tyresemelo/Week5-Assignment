import Database from "better-sqlite3";
const db = new Database("database.db"); // either creates a db, or gets the existing one

// create reviews table
db.exec(`
    CREATE TABLE IF NOT EXISTS guestbook (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        holidayType TEXT NOT NULL,
        messageReview TEXT NOT NULL
    )
`);

// populate the reviews table
const insertReview = db.prepare(`
    INSERT INTO review (holidayType, messageReview) VALUES (?, ?)
`);

insertReview.run(
  "Greece",
  "A must-visit destination! Stunning beaches, rich history, and delicious cuisine. Unforgettable experiences await!"
);
insertReview.run(
  "Portugal",
  "Definitely a hidden treasure. From golden beaches to historic cities, and delectable cuisine, it's a traveler's paradise!"
);
