'use client';

import React from "react";
import styles from '@/styles/Home.module.css'
import Typography from '@mui/material/Typography'
import {MacButton} from "@/components/MacComponents/MacButton";
import Stack from "@mui/material/Stack";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {MuiFileInput} from 'mui-file-input'
import {useTheme} from '@mui/material/styles'
import {useTranslations} from 'next-intl';

export interface SnackbarMessage {
    message: string;
    key: number;
}

export interface State {
    open: boolean;
    snackPack: readonly SnackbarMessage[];
    messageInfo?: SnackbarMessage;
}

export default function Page() {
    const localized = useTranslations('index');
    const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
    const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState<SnackbarMessage | undefined>(
        undefined,
    );

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message: string) => () => {
        setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleChange = (newFiles: File[]) => {
        setSelectedFiles(newFiles);
    }

    return (
        <>
            
            <main className={styles.main}>
                <Snackbar
                    sx={{paddingTop: 10}}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    TransitionProps={{ onExited: handleExited }}
                    message={messageInfo ? messageInfo.message : undefined}
                    action={action}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                />
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={5}
                >
                    <Typography variant="h1">{localized('title')}!</Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <MacButton variant="contained" mainColor="primary" onClick={handleClick(`${localized('primary')} ${localized('btn-clicked-msg')}`)}>{localized('primary')}</MacButton>
                        <MacButton variant="contained" mainColor="secondary" onClick={handleClick(`${localized('secondary')} ${localized('btn-clicked-msg')}`)}>{localized('secondary')}</MacButton>
                    </Stack>
                    <MuiFileInput
                        multiple
                        placeholder={localized('drop-area-placeholder')}
                        value={selectedFiles}
                        onChange={handleChange}
                        hideSizeText
                        sx={{
                            "& .MuiFileInput-placeholder": {
                                color:  (useTheme().palette.mode === 'light' ? '#767676' : '#d3d3d3') + '!important',
                            },
                        }}
                    />
                </Stack>
            </main>
        </>
    )
}
