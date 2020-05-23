
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurant VARCHAR,
  location VARCHAR,
  cuisine VARCHAR
);

COPY restaurants(restaurant,location,cuisine)
FROM '/data/data.csv'
DELIMITER ',' CSV HEADER;
