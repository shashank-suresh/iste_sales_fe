import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import useStyles from './styles'
import * as actionType from '../../constants/actionTypes'

const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    
    const logout = () => {
        dispatch({ type: actionType.LOGOUT })
        
        history.push('/')
        
        setUser(null)
    }
    
    useEffect((user, logout) => {
        const token = user?.token

        if (token) {
            const decodedToken = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">sushi.</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Typography className={classes.username} variant="h6">Welcome {user.result.name}!</Typography>
                        <Button className={classes.logout} variant="outlined" color="danger" onClick={logout} disableElevation>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="outlined" color="primary" className={classes.signbutton}>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar