CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY NOT NULL AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
    id INT PRIMARY KEY NOT NULL AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    likes INT DEFAULT 0,
);