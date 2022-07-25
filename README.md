# Calc API

[![GitHub license](https://img.shields.io/github/license/GabrielCrackPro/calc-api?style=for-the-badge)](https://github.com/GabrielCrackPro/calc-api/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/GabrielCrackPro/calc-api/pulls)

API for performing math operations

- Base URL

```
https://calc-api-app.herokuapp.com/
```

## Usage

Just pass the operation into the API like this

```
GET /api/:operation/:expression
```

For example if you want to add 10 + 20 you just need to do

```
GET /api/add/10+20
```

## Endpoints

The available API endpoints are

```
GET /api/endpoints
```

To see all available endponts and operations

```
GET /api/:operation/:expression
```

To perform an operation

## Development

- Clone the repository

```
git clone https://github.com/GabrielCrackPro/calc-api.git
```

- Enter the cloned directory

```
cd calc-api
```

- Install npm dependencies

```
npm i
```

- Start project running

```
npm run dev
```