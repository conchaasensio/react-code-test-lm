import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import CategoriesList from './CategoriesList';
import getDataFromApi from '../server/api';
import '../stylesheets/App.scss';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCategories(data));
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <CategoriesList categories={categories} />
        </Route>
        <Route exact path="/tienda/mercadona/:categoryId">
          <CategoriesList categories={categories} />
        </Route>
        <Route exact path="/tienda/mercadona/:categoryId/:subCategoryId">
          <CategoriesList categories={categories} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
