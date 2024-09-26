'use client';

import styles from '@/styles/Home.module.css'
import Typography from '@mui/material/Typography'
import {useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import {useTranslations} from 'next-intl';

export default function Support() {
    const localized = useTranslations('support');
    useEffect(() => {
        document.title = localized('title')
    }, [])

    return (
        <>
            <main className={styles.page}>
                <Container>
                    <BreadCrumbs />
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Typography variant="h1">{localized('title2')}</Typography>
                    </Box>
                </Container>
            </main>
        </>
    )
}
