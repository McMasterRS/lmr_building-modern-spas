import React from "react";
import styles from '@/styles/Home.module.css'
import Typography from '@mui/material/Typography'
import {useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import {MacButton} from "@/components/MacComponents/MacButton";
import Menu, {MenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';
import {alpha, styled} from '@mui/material/styles';
import Tooltip from "@mui/material/Tooltip";

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
    useEffect(() => {
        document.title = 'Page 1'
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
                  <Typography variant="h1">Page 1</Typography>
                  <MacButton
                      id="download-button"
                      sx={{
                          position: 'fixed',
                          top: 20,
                          right: 10,
                          zIndex: 2000,
                          display: {xs: 'none', md: 'flex'}
                      }}
                      aria-controls={
                          openMenu ? 'download-menu' : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={openMenu ? 'true' : undefined}
                      variant="contained"
                      mainColor="secondary"
                      onClick={handleClickMenu}
                      startIcon={<DownloadIcon />}
                      endIcon={<KeyboardArrowDownIcon />}
                  >
                      Download
                  </MacButton>

                  <Tooltip title={"Download"} >
                      <MacButton
                          id="download-button"
                          sx={{
                              position: 'fixed',
                              top: 20,
                              right: 10,
                              zIndex: 2000,
                              display: {xs: 'flex', md: 'none'}
                          }}
                          aria-controls={
                              openMenu ? 'download-menu' : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={openMenu ? 'true' : undefined}
                          variant="contained"
                          mainColor="secondary"
                          onClick={handleClickMenu}
                          endIcon={<KeyboardArrowDownIcon />}
                      >
                          <DownloadIcon />
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
                          Format 1
                      </MenuItem>
                      <MenuItem onClick={handleClickMenu}>
                          Format 2
                      </MenuItem>
                      <MenuItem onClick={handleClickMenu}>
                          Format 3
                      </MenuItem>
                  </StyledMenu>
              </Box>
          </Container>
      </main>
    </>
  )
}
