
DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurant VARCHAR,
  location VARCHAR,
  cuisine VARCHAR
);

\COPY restaurants(id,restaurant,location,cuisine) FROM 'data/data.csv' DELIMITER ',' CSV HEADER;

-- psql -h ec2-54-212-148-185.us-west-2.compute.amazonaws.com -d sdc -U postgres -W -f Schema-create-and-copy.sql.sql