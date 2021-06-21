import React from 'react';
import Grid from '@material-ui/core'
import Product from './Product';

const products = [
    { id: 1, name: 'Bundt Cake', description: 'Bundt Cake', price: '$10' },
    { id: 2, name: 'Cookie Basket', description: 'Basket of Cookies', price: '$15' },
];
const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>
                //everytime you are looping through something in JSX you need to have the id
                //xs, sm, md, means the app will take full width 
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product />
                </Grid>
            )}
        </Grid>
    </main>
}