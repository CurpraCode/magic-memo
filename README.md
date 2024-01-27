# Magic Memo

## Description

This is a Magic Memo Application for your notes

Visit - [Magic Memo](https://magic-memo.vercel.app/)

![screenshot](./public/readmeview.png)

## Table of Contents

- [Magic Memo Application](#magic-memo)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Built With 🌩️](#built-with-️)
    - [Prerequisites](#prerequisites)
    - [Recommendation](#recommendations)
    - [Setup](#setup)
  - [Installation](#installation)
  - [Configuration and Postgresql Database Setup with Prisma](#configuration-and-postgresql-database-setup-with-prisma)
  - [Prisma or SQL](#prisma-or-sql)
  - [Code Practices](#code-practices)
    - [Linting](#linting)
    - [Formatting](#formatting)
    - [Git Hooks](#git-hooks)
  - [Running the App](#running-the-app)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Author](#author)
  - [📝 License](#-license)

## Built With 🌩️

- NextJs
- Typescript
- TailwindCSS
- React-Spring
- Postgresql
- Prisma
- Docker

### Prerequisites

You'll need Node.js and npm installed on your system. You can install them by running the following command:

You'll also need to install yarn. You can do this by running the following command: `npm install`

You'll also need to install yarn. You can do this by running the following command: `npm install --global yarn`

### Recommendations

- Install the latest version of [`vsCode`](https://code.visualstudio.com/)
- Open `vsCode` and install [workspace recommended extenstions](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions)

### Setup

Clone this repository by typing the following command on your terminal:

```
git clone https://github.com/CurpraCode/magic-memo.git
```

## Installation

After cloning the repository, navigate to the project directory and run the following command to install the project dependencies:

```
yarn install
```

## Configuration and Postgresql Database Setup with Prisma

**Note** I have already set up all you need to use postgresql with prisma, the only required things to do are written below.

You'll need to set the following environment variables in a .env.example file:

```
DATABASE_URL=<your-database-url>

```

The `DATABASE_URL` is the URL of your Postgresql database. This can be gotten from platform like supabase which I used or planetscale.

It should be in this format `DATABASE_URL=postgresql://postgres:password@host:port/my_database`

Replace `user`, `password`, `host` and `port ` with the username, password, host and port for your Postgresql database, and `my_database` with the name of the database you created.

### Prisma or SQL

The prisma schema or SQL files are located in the `prisma` directory. You can use the Prisma CLI to create and apply migrations, and to generate TypeScript code based on your database schema.

## Code Practices

This project uses linting, style formatter, git hook, and commitlint so as to follow a coding standard that improve contribution, tractability, readability and cleaner documentation.

### Linting

We use ESLint for linting our code. It helps maintain a consistent coding style and catch common programming errors.

To run ESLint:

```bash
yarn lint

```

## Formatting

Prettier is a code style formatter that help to follow rule of good coding style and improve the readability of the code.

## Git Hook

The use of Husky, Commitlint (cz), help to check if the commit follow the commit conventional standard for making pull request, and it also checks if all th linting, test, and formatter are passed before completing the commit and making a git push of the commit.

```
yarn commit
```

The below above has been setup in the package.json file to sync with all the linting, formatter, and commit tool, to aid easy commit of your staged code.

## Running the App

To start the application, run the following command:

```
yarn start
```

This will start the application in production mode.

To run the application in development mode, use the following command:

```
yarn dev
```

This will start the application in watch mode, so any changes you make to the code will be automatically detected and the application will be recompiled.

## Usage

To use this project, follow these steps:

1. Open your terminal and run `yarn dev` to start a developement server
2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app folder by modifying . The page auto-updates as you edit the file.

## API Endpoints

The following API endpoints are available:

- `POST /api/auth/[...nextauth]`: Auth - Endpoint for access to the app
- `POST /api/memo`: Memo - To create a new memo
- `GET /api/memo/`: Memo - Get a list of memo
- `PATCH /api/memo/:id`: Memo - Update a memo by id

## Author

👤 **Curtis Oyakoya**

- GitHub: [@CurpraCode](https://github.com/CurpraCode)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/curtisdev/)

## 📝 License

This project is [MIT](./LICENSE) licensed.
