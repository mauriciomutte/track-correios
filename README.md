<h1 align="center">Track Correios</h1>
<p align="center">📦 Terminal track Correios</p>

<p align="center">
  <a href="https://github.com/mauriciomutte/track-correios/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/mauriciomutte/track-correios">
  </a>
  <a href="https://github.com/mauriciomutte/track-correios/blob/main/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/mauriciomutte/track-correios">
  </a>
</p>

> ⚠️ **Warning:** Unfortunately, this project is currently non-functional as a result of the introduction of a captcha requirement in the Correios API.

## 🚀 Demo

![demo](https://user-images.githubusercontent.com/20569339/135551866-dcfcf2bc-c410-405b-924a-b46656014b4b.png)

## ✨ Usage

```
npx track-correios [code]
```

## Development

### Developing with docker

To develop with docker you can build the image

```bash
docker build -t track-correios
```

And run the application

```bash
docker run --rm track-correios:latest yarn start [code]
```

### Developing without docker

To setup your development environment you'll need `node` and `yarn` installed on your machine.

To install the dependencies, run

```bash
yarn install
```

To run your code use

```bash
yarn start [code]
```

## 📣 Contributing

If you want to contribute please fork the repository and get your hands dirty, and make the changes as you'd like and submit the Pull Request. Any questions, ask me on Twitter.
