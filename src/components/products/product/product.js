import React from 'react'
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={product.imgFile} title={product.name} />
            <CardContent>
                <div>
                    <Typography variant="h6" className={classes.name}>{product.name}</Typography>
                </div>
                <div className={classes.overlay}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
                        <AddIcon />
                    </Button>
                </div>
                    <Typography className={classes.desc} variant="h6" gutterBottom>
                        {product.desc.length > 50
                        ? product.desc.substring(0, 50) + '...'
                        : product.desc
                        }
                    </Typography>
                <div className={classes.details}>
                    {product.tags.map((tag) => (
                        <Typography key={tag} variant="body2" color="textSecondary" className={classes.tags}>{tag}</Typography>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default Product