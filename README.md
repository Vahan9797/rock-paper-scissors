# Rock Paper Scissors minigame

## Introduction

The Rock Paper Scissors is a well known game, and this is the small adaptation of it on web platform.

## Main Technologies And Versions

- Ruby 3.0.0, Rails  ~6.1.4
- React 17, yarn 1.22.19
- PostgreSQL 14 (This is added for future improvements, we don't use database here yet)

## Installation

- First, after cloning the repository, ensure that you have Ruby 3.0.0 installed on your machine

- Run `bundle install` and let the gems installation to be completed (there might be issues with `pg` package, so we also need PostgreSQL running on 5432 port, also `libpq` or `libpq-dev` package most likely, depending on your OS).

- Run `rails webpacker:compile` to prepare JavaScript packs for serving, and after you can launch the server using `rails s`.

- Visit `localhost:3000` to use the application.