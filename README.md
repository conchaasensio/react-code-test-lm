# Frontend Code test

This project was a code test proposed by a tech company in the context of a selection process, and it has been performed using **React**.

The goal was, given both a visual specification and an API, I had to build a categories component for an specific shop.

I had to build a navigation bar where the shop categories was shown. The category tree has 2 levels and a category may have several subcategories. We need to see these subcategories within a collapsible menu, which will be shown as we click on the "father" category.

## Some implementation details

- Dynamic icons included in every category object.
- Every category item should be a clickable link.
- The URL format should be ```/tienda/{{ market }}/{{ category }}/{{ sub_category }}```.
- Every subcategory group has a *Ver toda la sección*, which should aim at "father" category link.
- Header must be fixed.  

## How to run the project

You can clone the repository and run `npm install`in the terminal in order to install all the necesary dependencies. Then we write `npm start` to run the app in the development mode.

### Structure

```
/
|
|- node_modules
|   |- react
|   |- react-dom
|   |- react-router
|
|– public
|   |– index.html
|   |– images
|
|– src
|   |– assets
|   |– components
|      |– App.js
|      |– CategoriesList.js
|      |– Category.js
|      |– Header.js
|      |– SubcategoriesList.js
|      |– SubCategory.js
|   |– server
|      |– api.js
|   |– stylesheets
|      |– components
|      |– core
|      |– layout
|      |– App.scss
|   |– index.js
|   |– index.scss
|
|– .gitignore
|
|
|– package.json // project info + dependencies

```