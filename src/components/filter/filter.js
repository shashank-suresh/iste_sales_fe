import { Container, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, getProductsByTag } from '../../actions/products'

import useStyles from './styles'

const Filter = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const [tag, setTag] = useState('')
    const classes = useStyles()
    let tags = []

    products.forEach(product => {
        product.tags.forEach(tag => {
            if (!tags.includes(tag)) tags.push(tag)
        })
    });

    const handleChange = (e) => {
        setTag(e.target.value)
        if (e.target.value === 'All') dispatch(getProducts())
        else dispatch(getProductsByTag(e.target.value))
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel>Category</InputLabel>
            <Select
                value={tag}
                onChange={handleChange}
            >
                <MenuItem key='All' value='All'>All</MenuItem>
                {tags.map((tag) => (
                    <MenuItem key={tag} value={tag}>{tag}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default Filter