import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react'

const Posts = () => {
  return (
    <Box m={2}>
        <Card>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="20%"
            image="https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo by Joshua Miranda from Pexels"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:'red' }} />} />
            </IconButton>
            <IconButton aria-label="share">
            <Share />
            </IconButton>
        </CardActions>
        </Card>
    </Box>
  )
}

export default Posts
