import { Box, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function ProductCard( props ) {
    const { title, price, image, rate} = props.value;

    return(
        <AuthContext.Consumer>{ ( authContext ) => {
            const { isLoggedIn } = authContext;
    return (
        <Card style={{width:275, maxHeight:350, margin:"20px 30px"}}>
            
                <CardMedia
                    component="img"
                    style={{height:200, overflow:"hidden"}}
                    src={'/images/products/' +image}
                />
                <CardContent >
                    <Typography  variant="h6" style={{fontWeight:"bolder"}}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle2" style={{fontWeight:"bolder"}}>
                        {price} LKR
                    </Typography>
                    <Box  mb={2} borderColor="transparent" >
                        <Rating name="read-only" value={rate}  readOnly size="small" />
                    </Box>
                    
                       {isLoggedIn ? 
                            <Button variant="contained" color="primary" fullWidth>
                            Add To Cart
                        </Button> :
                            <Button variant="contained" color="primary" disabled fullWidth>
                            Add To Cart
                        </Button>
                        }
                        
            </CardContent>
                    
        </Card>
    )
        }}
        </AuthContext.Consumer>)
}