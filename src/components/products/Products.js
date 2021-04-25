import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Product from './product/product'
import useStyles from './styles'

const Products = () => {
    const products = useSelector((state) => state.products)
    const classes = useStyles()

    return (
        !products.length 
        ? (
            <Grid className={classes.container} style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress />
            </Grid> 
        ) : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {products.map((product) => (
                    <Grid key={product._id} item>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Products