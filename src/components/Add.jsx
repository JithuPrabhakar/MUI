import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import React, { useState } from 'react'

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{ position:'fixed', bottom:20, left:{xs:"calc(50% - 25px)", md:30 }, }}>
        <Fab color='primary' aria-label='add'>
            <AddIcon />
        </Fab>
      </Tooltip>
      <Modal sx={{ display:"flex", alignItems:'center', justifyContent:'center' }}
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgColor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" textAlign={'center'}>
                Crate Post
            </Typography>
            <Box sx={{ mt:2, display:"flex", alignItems:'center', gap:'10px' }}>
                <Avatar sx={{ width:30, height:30 }} />
                <Typography fontWeight={500} variant='span'>User Name</Typography>
            </Box>
            <TextField
                sx={{ width:"100%", marginTop:2 }}
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack direction={'row'} gap={1} mt={2} mb={3}>
                <EmojiEmotions color='primary' />
                <Image color='secondary' />
                <VideoCameraBack color='success' />
                <PersonAdd color='error' />
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{ width:"100px" }}><DateRange/></Button>
            </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}

export default Add
