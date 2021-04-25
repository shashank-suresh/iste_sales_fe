import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useStyles from './styles'
import Input from './Input'
import { signup, signin } from '../../actions/auth'

const Auth = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isSignup) {
            dispatch(signup(userData, history))
        } else {
            dispatch(signin(userData, history))
        }
    }

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                                <>
                                    <Input name="name" label="Name" handleChange={handleChange} autoFocus />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} autoFocus type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </Grid>
                    <Button className={classes.submit} variant="contained" color="primary" type="submit" fullWidth>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up!"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
