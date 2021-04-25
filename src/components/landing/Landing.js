import React, { useState } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import useStyles from './styles'

const Landing = () => {
    const classes = useStyles()
    const [inProp, setInProp] = useState(false)

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.mainText}>Which type of user are you?</Typography>
            </Grid>
            <Grid item xs={6} className={clsx(classes.gridItem, classes.buyerGrid)} component={Link} to="/home">
                <Typography className={classes.typography}>Buyer</Typography>
            </Grid>
            <Grid item xs={6} className={clsx(classes.gridItem, classes.sellerGrid)} component={Link} to="/auth">
                <Typography className={classes.typography}>Seller</Typography>
            </Grid>
        </Grid>
    )
}

export default Landing
