# Alpha Omega: Search Service

> Search service for the AO app.
> Inherited React client, re-architected server service to be consumed by the AO proxy app.

## Preliminary Database Benchmarking
### Postgres vs Cassandra
This project was used to explore and benchmark the two DBs locally. In a query by ID drag race Postgres eked out Cassandra, returning four times faster: ~6.01ms vs ~24.2ms. Both were very fast once various basic optimizations have been made like caching common queries, simple configuration and setting up indexes. There were also developer considerations like documentation and community support which leant in Postgresses favour.

Given the data in our use case could be classed as non-mission critical there was less requirement for ACID compliance. Our datas shape was also very simple and fits easily within either relational or non-relational DBs, not requiring any joins, but maybe search.As we are to keep to AWS’s TC2.micro tier any scaling will have to be horizontal, lending some credence to Cassandra which although may require more space will scale easier and more reliably than Postgres out of the box.Both technologies are very capable but as the Postgres benchmark read speed beat out Cassandra four times faster on average with a comparatively trivial setup, and so was deemed the proffered choice.

## Stress Testing
This service along with the [proxy](https://github.com/AlphaOmegaTeam/Paul-Proxy) was used to stress test a manually implemented EC2 cluster on AWS to guarantee a fast UX. The goal was to scale horizontally up to 3000RPS with sub 100ms responses and a 0% error rate. 10M rows were seeded to the Postgres DB and stress tested to observe the service oriented architecture under load. This was a great exercise for digging into, diagnosing and configuring the TC2.micro Ubuntu boxes, NginX, Node and Postgres for performance. 

![](https://i.imgur.com/iVTnVQf.png)


## Related Service

- https://github.com/AlphaOmegaTeam/Paul-Proxy
- https://github.com/AlphaOmegaTeam/Evan-Service-Photos
- https://github.com/AlphaOmegaTeam/Evan-Service-Component
- https://github.com/AlphaOmegaTeam/Evan-Service-Database
- https://github.com/AlphaOmegaTeam/Kayla-Service-Reservation


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
> Please create a database called 'search' in Postgres prior in running the scripts;
> The Instruction is as follows:
> In Terminal,

- 1. Install dependencies with `npm install`.
- 1. Run command `npm run seeding` to seed the data to your database
- 1. Run `npm start` to start up the server

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run react-dev
npm start
```

View localhost:3030.
