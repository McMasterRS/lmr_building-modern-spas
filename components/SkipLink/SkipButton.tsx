import {useTheme} from '@mui/material/styles'
import styled from '@emotion/styled'
import MuiButton, {ButtonProps} from '@mui/material/Button'

interface SkipButtonProps extends ButtonProps {
    mainColor: string
}

export const SkipButton = styled(MuiButton, {
    shouldForwardProp: prop => prop !== 'mainColor',
})<SkipButtonProps>(props => ({
    backgroundColor: useTheme().palette.secondary.main,
    color: '#262626',
    "&:focus-visible": {
        color: 'white',
        backgroundColor: '#707070',
        outline: '2px solid #fdbf57',
    },
}))
