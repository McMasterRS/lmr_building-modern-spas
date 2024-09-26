'use client';

import React, {useEffect} from "react";
import styles from '@/styles/Home.module.css'
import Typography from '@mui/material/Typography'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import {MacButton} from "@/components/MacComponents/MacButton";
import Menu, {MenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';
import {alpha, styled, useTheme} from '@mui/material/styles';
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from '@mui/material/useMediaQuery';
import {MacSwitch} from "@/components/MacComponents/MacSwitch";
import {MacCheckbox} from "@/components/MacComponents/MacCheckbox";
import {useTranslations} from 'next-intl';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        disableScrollLock={true}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light'
                ? 'rgb(55, 65, 81)'
                : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}))

export default function Page_1() {
    const localized = useTranslations('page-1');
    useEffect(() => {
        document.title = localized('title')
    }, [])

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const openMenu = Boolean(anchorEl)
    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

  return (
    <>
      <main className={styles.page}>
          <Container>
              <BreadCrumbs />
              <Box sx={{height: 78, transform: 'translateZ(0px)', flexGrow: 1}}
                  display="flex"
                  justifyContent="center"
                  alignItems="center">
                  <Typography variant="h1">{localized('title')}</Typography>
                  <Tooltip title={useMediaQuery(useTheme().breakpoints.down('md')) ? localized('download') : ''} >
                      <MacButton
                          id="download-button"
                          sx={{
                              position: 'fixed',
                              top: 20,
                              right: 10,
                              zIndex: 2000,
                              display: 'flex'
                          }}
                          aria-controls={
                              openMenu ? 'download-menu' : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={openMenu ? 'true' : undefined}
                          variant="contained"
                          onClick={handleClickMenu}
                          startIcon={<DownloadIcon />}
                          endIcon={<KeyboardArrowDownIcon />}
                          mainColor="secondary"
                      >
                          {useMediaQuery(useTheme().breakpoints.up('md')) ? localized('download') : ''}
                      </MacButton>
                  </Tooltip>

                  <StyledMenu
                      id="download-menu"
                      MenuListProps={{
                          'aria-labelledby': 'download-button',
                      }}
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleCloseMenu}
                  >
                      <MenuItem onClick={handleClickMenu}>
                      {localized('format-placeholder')} 1
                      </MenuItem>
                      <MenuItem onClick={handleClickMenu}>
                        {localized('format-placeholder')} 2
                      </MenuItem>
                      <MenuItem onClick={handleClickMenu}>
                        {localized('format-placeholder')} 3
                      </MenuItem>
                  </StyledMenu>
              </Box>
              <Box paddingLeft={5}>
                  <MacSwitch {...{ inputProps: { 'aria-label': 'Switch' } }} />
                  <MacCheckbox {...{ inputProps: { 'aria-label': 'Checkbox' } }} />
              </Box>
          </Container>
      </main>
    </>
  )
}
