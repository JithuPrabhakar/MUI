import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: "none", sm:"block" }}}>
      <Box position={'fixed'} width={300}>
        <Typography variant='h6' fontWeight={100} mb={2}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard" />
          <Avatar alt="Cindy Baker" />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" />
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard" />
          <Avatar alt="Cindy Baker" />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mb={2} mt={2} >Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="" alt="img1" />
          </ImageListItem>
          <ImageListItem>
            <img src="" alt="img1" />
          </ImageListItem>
          <ImageListItem>
            <img src="" alt="img1" />
          </ImageListItem>
          <ImageListItem>
            <img src="" alt="img1" />
          </ImageListItem>
          <ImageListItem>
            <img src="" alt="img1" />
          </ImageListItem>
          <ImageListItem>
            <img src="" alt="img1" />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} >Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
