import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import {LinkProps} from '@mui/material/Link'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack'
import {MacButton} from '@/components/MacComponents/MacButton'

const breadcrumbNameMap: {[key: string]: string} = {
    '/page_1': 'Page 1',
    '/page_2': 'Page 2',
    '/settings': 'Settings',
    '/support': 'Help and Support',
}

interface LinkRouterProps extends LinkProps {
    href: string
    replace?: boolean
}

function LinkRouter(props: LinkRouterProps) {
    return <Typography {...props} component={Link}></Typography>
}

export default function BreadCrumbs() {
    const router = useRouter()

    const pathnames = router.pathname.split('/').filter(x => x)

    return (
        <Box sx={{paddingBottom: 2}}>
            <Stack direction="row" spacing={2}>
                <MacButton variant="contained" mainColor="primary" onClick={() => router.back()} title={"Back"}>
                    <ArrowBackIcon />
                </MacButton>
                <Breadcrumbs sx={{paddingTop: 1}} aria-label="breadcrumb">
                    <LinkRouter underline="hover" color="inherit" href="/">
                        Home
                    </LinkRouter>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`

                        return last ? (
                            <Typography color="text.primary" key={to}>
                                {breadcrumbNameMap[to]}
                            </Typography>
                        ) : (
                            <LinkRouter
                                underline="hover"
                                color="inherit"
                                href={to}
                                key={to}
                            >
                                {breadcrumbNameMap[to]}
                            </LinkRouter>
                        )
                    })}
                </Breadcrumbs>
            </Stack>
        </Box>
    )
}
