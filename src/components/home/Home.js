import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'

import Products from '../products/Products'
import Form from '../form/Form'
import Navbar from '../navbar/Navbar'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../actions/products'
import Filter from '../filter/filter'
import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (!user?.result?.name) {
        return (
            <Container className={classes.container}>
                <Navbar />
                <Filter />
                <Grid container alignItems="stretch" spacing={1} fullwidth="true">
                    <Grid item xs={12}>
                        <Products />
                    </Grid>
                </Grid>
            </Container>
        )
    }

    return (
        <Container className={classes.container}>
            <Navbar />
            <Filter />
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={8}>
                    <Products />
                </Grid>
                <Grid item xs={12} sm={4} padding={5}>
                    <Form />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home