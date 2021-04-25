import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import useStyles from './styles'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import Landing from './components/landing/Landing'

const App = () => {
    const classes = useStyles()

    return (
        <BrowserRouter>
            <Container className={classes.container}>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App