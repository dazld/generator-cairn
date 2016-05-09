# Cairn

## What's this?

This is a yeoman generator for making express & js applications. It's geared towards react / es6, but you can use it for making general single page apps too. There is a full suite of watching, livereloading, compilation and related gulp tasks. The express server renders html as you would expect, and they can be found in the `server/views` folder.

It is a work in progress, and pull requests are welcome as long as they remain in the spirit of the generator.

## Features

- HTTPS self signed localhost on `4431`
- full suite of gulp tasks
- watchify accelerated browserify builds
- libsass sass compilation
- eslint rules
- scss lint rules
- babel es2015 / react / object spread
- etc

## Installation

Install Yeoman - `npm install -g yo`.

Install generator globally: `npm install -g generator-cairn`

Check everything is working: `yo --help` - should see a list of generators, and `cairn` in there too.

## Usage

Make a new directory, cd into it.

`yo cairn` - give the project a name (it uses the directory name as default).

Yeoman will perform `git init` and `npm install` for you - this takes a while, so be prepared for a short wait.

`gulp` - default task runs dev server, watches and builds.

## Todo

- Document other gulp tasks
- Document how config gets propagated from server render to frontend
- Put skeleton react app in place

## Updating

`npm install -g generator-cairn`
