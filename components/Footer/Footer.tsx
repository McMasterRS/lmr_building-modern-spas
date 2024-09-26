import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import {Grid} from '@mui/material'
import Link from 'next/link'
import Stack from "@mui/material/Stack";
import {useTheme} from "@mui/material/styles";
import {useTranslations} from 'next-intl';

export default function Footer() {
    const localized = useTranslations('footer');
    return (
        <Paper
            sx={{
                [useTheme().breakpoints.between('xs', 'md')]: {
                    position: 'relative',
                },
                [useTheme().breakpoints.up('md')]: {
                    position: 'fixed',
                },
                bottom: 0,
                width: '100%',
                borderRadius: 0,
                [useTheme().breakpoints.between('xs', 'md')]: {
                    height: '93',
                },
            }}
            component="footer"
            square
            variant="outlined"
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        display: {xs: 'none', md: 'flex'},
                        my: 1,
                    }}
                ></Box>
                <Grid item xs={12} sm={6} md={3} sx={{display: {xs: 'none', md: 'flex'}}}></Grid>
                <Grid
                    sx={{
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        display: {xs: 'none', md: 'flex'}
                    }}
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: 'flex-start',
                                display: 'flex',
                                mb: 2,
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography
                                component={Link}
                                href="/support"
                                variant="caption"
                                color="inherit"
                            >
                                {localized('help-and-support')}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: 'center',
                                display: 'flex',
                                mb: 2,
                            }}
                        >
                            <Typography variant="caption" color="inherit">
                                © McMaster University {new Date().getFullYear()}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: 'flex-end',
                                display: 'flex',
                                mb: 2,
                                alignItems: 'flex-end',
                            }}
                        >
                            <Typography
                                component={Link}
                                href="mailto: example@mcmaster.ca"
                                variant="caption"
                                color="inherit"
                            >
                                {localized('contact-us')}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    sx={{display: {xs: 'flex', md: 'none'}}}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'flex-start',
                            display: 'flex',
                            alignItems: 'flex-start',
                            mt: 1
                        }}
                    >
                        <Typography
                            component={Link}
                            href="/support"
                            variant="caption"
                            color="inherit"
                        >
                            {localized('help-and-support')}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Typography variant="caption" color="inherit">
                            © McMaster University {new Date().getFullYear()}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            display: 'flex',
                            alignItems: 'flex-end',
                        }}
                    >
                        <Typography
                            component={Link}
                            href="mailto: example@mcmaster.ca"
                            variant="caption"
                            color="inherit"
                            sx={{mb: 1}}
                        >
                            {localized('contact-us')}
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Paper>
    )
}
