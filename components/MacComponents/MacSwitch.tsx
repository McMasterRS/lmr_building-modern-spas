import styled from "@emotion/styled";
import Switch, {SwitchProps} from "@mui/material/Switch";
import React from "react";

export const MacSwitch = styled((props: SwitchProps) => (
    <Switch disableFocusRipple {...props} />
))(({ }) => ({
    '& .MuiSwitch-switchBase': {
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            backgroundColor: '#5E6A71',
            outline: `3px solid #F4B7C7`,
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            backgroundColor: '#dd3765',
            outline: '3px solid #fdd287',
        },
    }
}));