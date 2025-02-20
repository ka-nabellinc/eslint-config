# eslint-config-ka-nabellinc

![NPM Version](https://img.shields.io/npm/v/eslint-config-ka-nabellinc)

This repository provides .eslintrc for ka-nabell as shared config.

## Install

```sh
npm i -D eslint-config-ka-nabellinc # npm
yarn add -D eslint-config-ka-nabellinc # yarn
```

## Usage

Most of the services we provide use typescript and vue.  
So we have entry points for typescript and vue.

If you don't need either typescript or vue, you can use the root entry point.  
In addition to that, we also have one for styles.

To use, add following extends to your .eslintrc

#### root

`"extends": ["eslint-config-ka-nabellinc"]`

#### typescript

`"extends": ["eslint-config-ka-nabellinc/typescript"]`

#### vue

`"extends": ["eslint-config-ka-nabellinc/vue"]`

#### style

`"extends": ["eslint-config-ka-nabellinc/style"]`
