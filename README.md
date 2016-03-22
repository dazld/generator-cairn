# Cairn

## A full stack of rocks.

## Installation

This is a yeoman generator for making full stack react, redux and express apps.

It is a work in progress.

## Installation

Install Yeoman - `npm install -g yo`.

Install generator globally: `npm install -g git+ssh://git@stash.akqa.net:7999/glwd/generator-cairn.git#master`

Check everything is working: `yo --help` - should see a list of generators, and `cairn` in there too.

## Usage

Make a new directory, cd into it.

`yo cairn` - give the project a name.

`npm install` - should add this to yeoman, but it takes _forever_ :s

`gulp` - default task runs dev server, watches and builds.

## Updating

`npm install -g git+ssh://git@stash.akqa.net:7999/glwd/generator-cairn.git#master` - if the package.json file is newer on master than on local, you get the new version.


## Features

- eslint
- scss lint
- gulp build process
- babel es2015 / react / object spread
- etc
