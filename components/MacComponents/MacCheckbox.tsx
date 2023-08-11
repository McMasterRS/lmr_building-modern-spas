import styled from "@emotion/styled";
import Checkbox, {CheckboxProps} from "@mui/material/Checkbox";
import React from "react";
import {useTheme} from "@mui/material/styles";

export const MacCheckbox = styled((props: CheckboxProps) => (
    <Checkbox disableFocusRipple {...props} />
))(({ }) => ({
    '&.Mui-focusVisible': {
        outline: `2px solid ${useTheme().palette.primary.main}`,
    },
}));