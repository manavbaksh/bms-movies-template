# Project Title

BookMyShow Movies Template

## Demo link:

https://t9oc3k.csb.app/

## Table of Content:

- [About The App](#about-the-app)
- [Optimizations](#optimizations)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)

## About The App

Movies template displays content cards having movie posters and their title and language.
Template provides the functionality of search based filter and language filter.

## Optimizations and Coding Practices

- Debouncing
- Lifiting state up
- React hooks
- Error handling
- Language and Search filters
- Responsive

## Technologies and Dependencies

- React
- Css3
- react player

## Setup

- download or clone the repository ( or directly access the codeSandBox link)
- run `npm install` to install dependencies
- run `npm start` to launch the app

## Approach

- I divided the whole website into chunks of components as much as possible making it resusable
- Fetched data from api and populated the page with content cards.
- Used the "lifting state up" technique to share and update states between components
- Used bebouncing search based filter to show content cards whose title matches search query
- Implemented language based filter
