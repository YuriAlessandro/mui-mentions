import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React from 'react';
import { MentionsTextField } from '../../src';
import { defaultValue, stormlight } from './data';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalExample = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Stack spacing={2.5}>
            <Stack spacing={0.5}>
                <Typography variant='h5'>MentionsTextField on a Modal</Typography>
                <Typography>
                    You can add a zIndex to the suggestions overlay to ensure it appears above other content.
                </Typography>
                <Button onClick={handleOpen} variant='outlined'>
                    Open modal
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box sx={style}>
                        <Stack spacing={2.5}>
                            <Stack spacing={0.5}>
                                <Typography>
                                    You can add a zIndex to the suggestions overlay to ensure it appears above other
                                    content.
                                </Typography>
                            </Stack>

                            <Stack direction='row' spacing={2}>
                                <MentionsTextField
                                    variant='filled'
                                    label='Filled'
                                    fullWidth
                                    defaultValue={defaultValue}
                                    zIndex={2}
                                    dataSources={[
                                        {
                                            data: stormlight,
                                        },
                                    ]}
                                />
                            </Stack>
                        </Stack>
                    </Box>
                </Modal>
            </Stack>
        </Stack>
    );
};
