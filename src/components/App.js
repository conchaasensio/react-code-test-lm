import React, { useEffect, useState } from 'react';
import Header from './Header';
import CategoriesList from './CategoriesList';
import getApiAdata from '../server/api';
import '../stylesheets/App.scss';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getApiAdata().then((data) => setCategories(data));
  }, []);
  return (
    <>
      <Header />
      <CategoriesList categories={categories} />
    </>
  );
}

export default App;
