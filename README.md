# Project Name

> Project description

FreeSeats

## Related Projects

- https://github.com/freeseats/exzerone-search-bar
- https://github.com/freeseats/slhodak-reviews-and-impressions
- https://github.com/freeseats/Menu-Related-SideBar
- https://github.com/freeseats/matthewjdiaz1-photo-service
  - https://github.com/freeseats/wfong-service-reservations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
> Please create a database called 'search' in mysql prior in running the scripts;
> The Instruction is as follows:
> In Terminal,

- 1. type in command - `\$mysql -u -p root`
- 1. Enter your password if you have one
- 1. type in command - `show databases`
   to see your current databases.
- 1. type in command - `create database search`
- 1. type in command - `use search`
- 1. Under the server folder, go to db.js.
- 1. On line 13, change the third parameter of the function to the password you have set up to your mysql (it is currently 'student');
- 1. After all of the steps mentioned above, go ahead and install dependencies with `npm install`.
- 1. run command `npm run seeding` to seed the data to your database
- 1. run `npm start` to start up the server

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

In Chrome, go to localhost:3030.
