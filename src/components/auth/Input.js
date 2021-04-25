import { IconButton, InputAdornment, TextField, Grid } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'

import useStyles from './styles'

const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword }) => {
    const classes = useStyles()
    
    return (
        <Grid item xs={12}>
            <TextField
                className={classes.textfield}
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
             />
        </Grid>
    )
}

export default Input
