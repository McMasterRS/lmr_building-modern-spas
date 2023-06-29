import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import IconButton from "@mui/material/IconButton";

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}


export default function VerticalTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const tabs = ['Notifications', 'Privacy', 'Accessibility', 'Account'];
    const icons = [<NotificationsNoneOutlinedIcon key={'notifications'}/>, <LockOutlinedIcon key={'privacy'}/>, <SettingsAccessibilityOutlinedIcon key={'accessibility'}/>, <ManageAccountsOutlinedIcon key={'account'}/>]

    const handleChangeDrawer = (e: React.MouseEvent<HTMLDivElement>, newValue: number) => {
        setValue(newValue);
    }

    const [state, setState] = React.useState(false);

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

    const list = () => (
        <Box
            sx={{ width:  250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {tabs.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton selected= {value === index} onClick={(e) => handleChangeDrawer(e, index)}>
                            <ListItemIcon>
                                {icons[index]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    sx={{borderRight: 1, borderColor: 'divider', display: {xs: 'none', md: 'flex'}}}
                >
                    {tabs.map((text, index) => (
                        <Tab key={text} label={text} icon={icons[index]} iconPosition="start" {...a11yProps(index)} sx={{justifyContent: 'left'}}/>
                    ))}
                </Tabs>
                <Box sx={{paddingTop: '19px'}}>
                    <IconButton title="Settings Drawer" aria-label="settings-menu" onClick={toggleDrawer(true)} sx={{ display: {xs: 'inline', md: 'none'}, height:'40px'}}> <FormatListBulletedOutlinedIcon /> </IconButton>
                </Box>
                <Drawer
                    anchor={"left"}
                    open={state}
                    onClose={toggleDrawer(false)}
                    sx={{
                        '& .MuiDrawer-root': {
                            position: 'absolute'
                        },
                        '& .MuiPaper-root': {
                            position: 'absolute'
                        },
                        minWidth: 100,
                        width: "20%",
                        position: "absolute",
                        top: '230px',
                        left: '2%',
                        height: '50%',
                        display: {xs: 'flex', md: 'none'}
                    }}                        >
                    {list()}
                </Drawer>
                <TabPanel value={value} index={0}>
                    <Typography
                        sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'left', paddingLeft: '10px'}}
                        variant="settingTitle"
                        gutterBottom
                    >
                        Notifications
                    </Typography>
                    <FormControl sx={{m: 1, minWidth: 300}}>
                        <InputLabel id="demo-simple-select-label" htmlFor="demo-simple-select">
                            Demo Dropdown Menu
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Demo Dropdown Menu"
                            inputProps={{
                                id:'demo-simple-select',
                            }}
                        >
                            <MenuItem value={1}>Option 1</MenuItem>
                            <MenuItem value={2}>Option 2</MenuItem>
                            <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                    </FormControl>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography
                        sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'left', paddingLeft: '10px'}}
                        variant="settingTitle"
                        gutterBottom
                    >
                        Privacy
                    </Typography>
                    Placeholder 2
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Typography
                        sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'left', paddingLeft: '10px'}}
                        variant="settingTitle"
                        gutterBottom
                    >
                        Accessibility
                    </Typography>
                    Placeholder 3
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Typography
                        sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'left', paddingLeft: '10px'}}
                        variant="settingTitle"
                        gutterBottom
                    >
                        Account
                    </Typography>
                    Placeholder 4
                </TabPanel>
            </Box>
        </>
    )
}
