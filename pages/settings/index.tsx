import styles from '@/styles/Home.module.css'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import {useEffect} from 'react'
import Box from '@mui/material/Box'
import VerticalTabs from '@/components/TabPanel/VerticalTabs'
import {Container} from '@mui/material'
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function ViewTranscript() {
    useEffect(() => {
        document.title = 'Settings'
    }, [])

    return (
        <main className={styles.settings}>
            <Container>
                <BreadCrumbs />
                <Typography
                    sx={{display: 'flex', justifyContent: 'center'}}
                    variant="h2"
                    gutterBottom
                >
                    Settings
                </Typography>
                <Box sx={{width: '100%', maxWidth: 1000}}>
                    <VerticalTabs />
                </Box>
            </Container>
        </main>
    )
}
