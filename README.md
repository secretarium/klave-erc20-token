<a href="https://klave.com/">
  <img alt="Klave - KRC20" src="https://klave.com/images/marketplace/krc20.png">
  <h1 align="center">KRC20 - Account based ERC20 like Token Klave implementation</h1>
</a>

<p align="center">
  An implementation on Klave of an ERC20 like fungible token as well as an account based infrastructure. Include also supply management through mint and burn method.
</p>

<p align="center">
  <a href="#description"><strong>Description</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#build-locally"><strong>Build Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>

![Wasm](https://img.shields.io/badge/Webassembly-5E4EE3?style=for-the-badge&labelColor=white&logo=webassembly&logoColor=5E4EE3) ![AssemblyScript](https://img.shields.io/badge/Assemblyscript-3578C7?style=for-the-badge&labelColor=white&logo=assemblyscript&logoColor=3578C7)

## Description

Tokens can represent anything from a currency like USD, a metric ton of metal, a concert ticket, and more.
Standards such as ERC20 have been introduced to make Tokens fungible, meaning that they all have properties that make each Token the same as another Token.

KRC20 inspired from ERC20 implements an API that provides the following functions:

- Transfer tokens from one account to another
- Get the current token balance of an account
- Get the total supply of the Token available on the network
- Approve whether an amount of Token from an account can be spent by a third-party account

## Features

- **Create Token:** Create and Name token
- **Manage supply:** Use mint and burn method to manage token suply
- **Create Account:** Create and manage user account
- **Manage transaction:** Send and receive tokens

## Deploy Your Own

You can deploy your own version of the Klave Account based token to Klave with one click:

[![Deploy on Klave](https://klave.com/images/deploy-on-klave.svg)](https://app.klave.com/template/github/secretarium/klave-erc20-token)

## Build Locally

You can build your into wasm locally, allowing you to validate the hash of the application deployed on Klave.

> Note: You should have node and yarn installed to be able to build locally.

```bash
yarn install
yarn build
```
This will create the .wasm file in the ./klave folder.

## Authors

This library is created by [Klave](https://klave.com) and [Secretarium](https://secretarium.com) team members, with contributions from:

- Jeremie Labbe ([@jlabbeklavo](https://github.com/jlabbeKlavo)) - [Klave](https://klave.com) | [Secretarium](https://secretarium.com)
- Nicolas Marie ([@Akhilleus20](https://github.com/Akhilleus20)) - [Klave](https://klave.com) | [Secretarium](https://secretarium.com)
- Etienne Bosse ([@Gosu14](https://github.com/Gosu14)) - [Klave](https://klave.com) | [Secretarium](https://secretarium.com)