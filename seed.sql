CREATE TABLE users(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT,
  bio TEXT,
  favorites TEXT,
  likes_id INT REFERENCES likes(id),
  clerk_id TEXT
);

CREATE TABLE review(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content TEXT,
  title TEXT,
  users_id INT REFERENCES users(id),
  types_id INT REFERENCES types(id),
  likes_id INT REFERENCES likes(id),
  clerk_id TEXT,
  movie_id INT
  );

  CREATE TABLE comment(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    comment TEXT,
    users_id INT REFERENCES users(id),
    review_id INT REFERENCES review(id),
    likes_id INT REFERENCES likes(id),
    clerks_id TEXT 
  );

  CREATE TABLE types(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    type TEXT
  );

  CREATE TABLE genres(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre TEXT,
    type_id INT REFERENCES types(id)
  );

  CREATE TABLE likes(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    likes INT,
    dislikes INT,
    clerk_id TEXT
  );

  /*altered likes TABLE*/
  

  CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    review_id INT NULL REFERENCES review(id),
    vote SMALLINT CHECK (vote IN (-1, 1)),
    vote_type VARCHAR(255) CHECK (vote_type IN ('review', 'comment')),
    UNIQUE(user_id, post_id, vote_type)