
create TABLE persons(
    id SERIAL UNIQUE,
    name character varying(50),
    surname character varying(50)
);

create TABLE posts(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at DATE,
    updated_at DATE,
    FOREIGN KEY (user_id) REFERENCES persons (id)
);