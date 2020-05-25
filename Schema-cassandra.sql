
DROP TABLE IF EXISTS rest;

CREATE TABLE rest (
  rest_uuid uuid PRIMARY KEY,
  rest_pub_id int,
  rest_restaurant text,
  rest_location text,
  rest_cuisine text
);

COPY rest(rest_uuid, rest_pub_id, rest_restaurant, rest_location, rest_cuisine)
FROM '/data/data.csv'
WITH HEADER = TRUE;
