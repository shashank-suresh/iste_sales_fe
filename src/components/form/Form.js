import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { createProduct } from '../../actions/products'

const Form = () => {
    const [productData, setProductData] = useState({
        name: '',
        desc: '',
        tags: '',
        imgFile: '',
    })
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createProduct(productData))
        clear()
    }

    const clear = () => {
        setProductData({
            name: '',
            desc: '',
            tags: '',
            imgFile: ''
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add a Product</Typography>

                <TextField
                    name="name"
                    variant="outlined"
                    label="Name"
                    fullWidth
                    value={productData.name}
                    onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                />

                <TextField
                    name="desc"
                    variant="outlined"
                    label="Description"
                    fullWidth
                    value={productData.desc}
                    onChange={(e) => setProductData({ ...productData, desc: e.target.value })}
                />

                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={productData.tags}
                    onChange={(e) => setProductData({ ...productData, tags: e.target.value.split(',') })}
                />

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setProductData({ ...productData, imgFile: base64 })}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form