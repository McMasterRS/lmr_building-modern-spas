import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'

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
                    <Typography>{children}</Typography>
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

    return (
        <Box sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="Tab 1" {...a11yProps(0)} />
                <Tab label="Tab 2" {...a11yProps(1)} />
                <Tab label="Tab 3" {...a11yProps(2)} />
                <Tab label="Tab 4" {...a11yProps(3)} />
                <Tab label="Tab 5" {...a11yProps(4)} />
                <Tab label="Tab 6" {...a11yProps(5)} />
                <Tab label="Tab 7" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
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
                Settings Pane Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Settings Pane Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Settings Pane Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Settings Pane Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Settings Pane Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Settings Pane Seven
            </TabPanel>
        </Box>
    )
}
