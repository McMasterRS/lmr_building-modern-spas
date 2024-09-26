import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import {LinkProps} from '@mui/material/Link'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import React from 'react'
import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack'
import {MacButton} from '@/components/MacComponents/MacButton'
import {useTranslations} from 'next-intl';

interface LinkRouterProps extends LinkProps {
    href: string
    replace?: boolean
}

function LinkRouter(props: LinkRouterProps) {
    return <Typography {...props} component={Link}></Typography>
}

export default function BreadCrumbs() {
    const localized = useTranslations('breadcrumbs');
    const router = useRouter()

    const pathname = usePathname();

    const pathnames = pathname ? pathname.split('/').filter(x => x) : [];

    const breadcrumbNameMap: {[key: string]: string} = {
        '/page_1': localized('page-1'),
        '/page_2': localized('page-2'),
        '/settings': localized('settings'),
        '/support': localized('support'),
    }

    return (
        <Box sx={{paddingBottom: 2}}>
            <Stack direction="row" spacing={2}>
                <MacButton variant="contained" mainColor="primary" onClick={() => router.back()} title={"Back"}>
                    <ArrowBackIcon />
                </MacButton>
                <Breadcrumbs sx={{paddingTop: 1}} aria-label="breadcrumb">
                    <LinkRouter underline="hover" color="inherit" href="/">
                        {localized('home')}
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
