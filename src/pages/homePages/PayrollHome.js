
import React, { useState, useEffect } from 'react';
import { getArticleCategories } from '../../api/articleService';
import { AppBar, Toolbar, Typography } from '@mui/material';

function PayrollHome() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getArticleCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch article categories', error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Payroll Home</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <h2>Article Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.categoryID}>
              {category.categoryID}: {category.categoryName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PayrollHome;
