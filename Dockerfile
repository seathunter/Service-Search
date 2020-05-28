
FROM cassandra:latest

WORKDIR /

RUN mkdir -p /data

COPY ./data/data.csv /data

EXPOSE 9042