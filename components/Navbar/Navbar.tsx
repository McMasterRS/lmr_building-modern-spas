import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Link from 'next/link'
import {usePathname, useRouter} from 'next-intl/client'
import styles from '@/styles/NavBar.module.css'
import {MacIconNavButton, MacNavButton,} from '@/components/MacComponents/MacNavButton'
import Tooltip from '@mui/material/Tooltip'
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ClearIcon from '@mui/icons-material/Clear';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import SettingsIcon from '@mui/icons-material/Settings'
import {useTheme} from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import {ColorModeContext} from "@/components/Provider/Provider";
import React from "react";
import SkipLink from "@/components/SkipLink/SkipLink";
import {SkipButton} from "@/components/SkipLink/SkipButton";
import styles_skip from '@/styles/SkipLink.module.scss'
import {useTranslations, useLocale} from 'next-intl';
import Radio from '@mui/material/Radio';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
    const locale = useLocale();
    const localized = useTranslations('navbar');
    const theme = useTheme()
    const colorMode = React.useContext(ColorModeContext)
    const pages = [
        [localized('pages.1'), '/page_1'],
        [localized('pages.2'), '/page_2'],
    ]

    const imgStyle = {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '30px',
    }

    const [state, setState] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openLocaleMenu = Boolean(anchorEl);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState(open);
            };

    const router = useRouter()
    const currentRoute = usePathname()

    const icons = [<LooksOneIcon key={'transcripts-page'} />, <LooksTwoIcon key={'privacy-policy'}/>]

    const pages_drawer = () => (
        <Box
            paddingTop={1}
            sx={{ width:  250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {pages.map((page, index) => (
                    <ListItem key={page[0]} disablePadding>
                        <ListItemButton onClick={toggleDrawer(false)} component={Link} href={page[1]} selected= {currentRoute === page[1]} >
                            <ListItemIcon>
                                {icons[index]}
                            </ListItemIcon>
                            <ListItemText primary={page[0]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List style={{ position: "absolute", bottom: "0", right: "0", left: "0"}}>
                <ListItem key={'mode'} disablePadding>
                    <ListItemButton onClick={colorMode.toggleColorMode}
                                    color="inherit" >
                        <ListItemIcon>
                            {theme.palette.mode === 'dark' ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={theme.palette.mode === 'dark'
                            ? localized('switch-mode.light')
                            : localized('switch-mode.dark')} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'settings'} disablePadding>
                    <ListItemButton onClick={toggleDrawer(false)} component={Link} href={'/settings'} selected= {currentRoute === '/settings'} color="inherit" >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={localized('settings-btn-lbl')} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'language_en-CA'} disablePadding>
                    <ListItemButton
                        color="inherit"
                        onClick={() => {
                            if (locale !== 'en-CA') {
                                router.push(currentRoute, {locale: 'en-CA'})
                            }
                        }}
                    >
                        <ListItemIcon>
                            <Radio
                                checked={locale === 'en-CA'}
                                value="en-CA"
                                name="en_ca-radio-buttons"
                                inputProps={{ 'aria-label': 'en-CA' }}
                            />
                        </ListItemIcon>
                        <ListItemText primary='English - EN' />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'language_fr-CA'} disablePadding>
                    <ListItemButton
                        color="inherit"
                        onClick={() => {
                            if (locale !== 'fr-CA') {
                                router.push(currentRoute, {locale: 'fr-CA'})
                            }
                        }}
                    >
                        <ListItemIcon>
                            <Radio
                                checked={locale === 'fr-CA'}
                                value="fr-CA"
                                name="fr_ca-radio-buttons"
                                inputProps={{ 'aria-label': 'fr-CA' }}
                            />
                        </ListItemIcon>
                        <ListItemText primary='français - FR' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="relative"
            enableColorOnDark
            style={{backgroundImage: 'none'}}
            sx={{zIndex: theme => theme.zIndex.drawer + 1, borderRadius: 0}}
        >
            <Box sx={{zIndex: 1300}}>
                <SkipLink className={styles_skip.skipLink} skipTo={"main:first-of-type"}>
                    <SkipButton mainColor={"primary"} sx={{marginTop:2.4, marginLeft:2, color: 'white'}}>{localized('skip-btn')}</SkipButton>
                </SkipLink>
            </Box>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <Tooltip enterDelay={500} title={state ? "Close App Drawer" : "Open App Drawer"}>
                            <MacIconNavButton
                                size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer(!state)}
                                color="inherit"
                            >
                                {state ? <ClearIcon /> : <MenuIcon />}
                            </MacIconNavButton>
                        </Tooltip>
                        <Drawer
                            anchor={"left"}
                            open={state}
                            onClose={toggleDrawer(false)}
                            sx={{
                                '& .MuiDrawer-root': {
                                    position: 'absolute'
                                },
                                '& .MuiPaper-root': {
                                    position: 'absolute',
                                    borderRadius: 0
                                },
                                minWidth: 100,
                                width: "20%",
                                position: "absolute",
                                top: '70px',
                                display: {xs: 'flex', md: 'none'}
                            }}
                        >
                            {pages_drawer()}
                        </Drawer>
                        <Box
                            justifyContent="center"
                            alignItems="center"
                            sx={{alignItems: 'center', display: {xs: 'flex', md: 'none'}}}
                        >
                            <Box
                                component="img"
                                sx={{
                                    height: 70,
                                    width: '100%',
                                }}
                                alt="McMaster Logo"
                                src="/assets/logo-small.png"
                                style={imgStyle}
                            />
                            <Typography
                                variant="h3"
                                component={Link}
                                href="/"
                                sx={{
                                    mr: 2,
                                    flexGrow: 1,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    "&:hover": {
                                        color: useTheme().palette.secondary.main
                                    }
                                }}
                            >
                                MacApp
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        component="img"
                        sx={{
                            height: 78.31,
                            width: 140,
                            display: {xs: 'none', md: 'flex'}
                        }}
                        alt="McMaster Logo"
                        src="/assets/logo.png"
                        style={imgStyle}
                    />
                    <Typography
                        variant="h3"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            textDecoration: 'none',
                            color: 'inherit',
                            "&:hover": {
                                color: useTheme().palette.secondary.main
                            }
                        }}
                    >
                        MacApp
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map(page => (
                            <MacNavButton
                                key={page[0]}
                                component={Link}
                                href={page[1]}
                                className={
                                    currentRoute === page[1]
                                        ? styles.active
                                        : styles.nonActive
                                }
                                sx={{mx:0.3, my: 2, color: 'white', display: 'block'}}
                            >
                                {page[0]}
                            </MacNavButton>
                        ))}
                    </Box>
                    <Box sx={{paddingRight: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Tooltip
                            title={
                                theme.palette.mode === 'dark'
                                    ? localized('switch-mode.light')
                                    : localized('switch-mode.dark')
                            }
                        >
                            <MacIconNavButton
                                sx={{ml: 1}}
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                            >
                                {theme.palette.mode === 'dark' ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </MacIconNavButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{paddingRight: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Tooltip title={localized('settings-btn-lbl')}>
                            <MacIconNavButton
                                aria-label="settings"
                                color="inherit"
                                component={Link}
                                className={
                                    currentRoute === '/settings'
                                        ? styles.active
                                        : styles.nonActive
                                }
                                href="/settings"
                            >
                                <SettingsIcon />
                            </MacIconNavButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{paddingRight: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Tooltip title={localized('settings-btn-lbl')}>
                            <>
                                <MacIconNavButton
                                    id="locale-button"
                                    aria-label="locale-button"
                                    aria-controls={openLocaleMenu ? 'locale-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openLocaleMenu ? 'true' : undefined}
                                    color="inherit"
                                    className={styles.nonActive}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                        setAnchorEl(event.currentTarget);
                                    }}
                                >
                                    { locale === 'en-CA' ? 'EN' : 'FR' }
                                </MacIconNavButton>
                                <Menu
                                    id="locale-menu"
                                    anchorEl={anchorEl}
                                    open={openLocaleMenu}
                                    onClose={() => {
                                        setAnchorEl(null);
                                    }}
                                    MenuListProps={{
                                        'aria-labelledby': 'locale-button',
                                    }}
                                >
                                    <MenuItem
                                        onClick={() => {
                                            if (locale !== 'en-CA') {
                                                router.push(currentRoute, {locale: 'en-CA'})
                                            }
                                        }}
                                    >English - EN</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            if (locale !== 'fr-CA') {
                                                router.push(currentRoute, {locale: 'fr-CA'})
                                            }
                                        }}
                                    >français - FR</MenuItem>
                                </Menu>
                            </>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
