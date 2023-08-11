import {useTheme} from '@mui/material/styles'
import styled from '@emotion/styled'
import MuiButton, {ButtonProps} from '@mui/material/Button'

interface MacButtonProps extends ButtonProps {
    mainColor: string
}

export const MacButton = styled(MuiButton, {shouldForwardProp: (prop) => prop !== "mainColor"})<MacButtonProps>(props => ({
    backgroundColor: props.mainColor === 'secondary' ? useTheme().palette.secondary.main:  useTheme().palette.primary.main,
    color: props.mainColor === 'secondary' ? '#262626':  '',
    ':hover': {
        backgroundColor: props.mainColor === 'secondary' ? '#DBDBDD':'#5E6A71',
    },
    "&:focus-visible": {
        color: useTheme().palette.mode === 'dark' ? (props.mainColor === 'primary' ? '#FFFFFF' : '') : '',
        backgroundColor:
            props.mainColor === 'secondary' ? '#DBDBDD' : '#5E6A71',
        outline: `2px solid ${useTheme().palette.mode === 'dark' ? (props.mainColor === 'primary' ? '#F4B7C7' : '#dd3765') : (props.mainColor === 'primary' ? 'black' : useTheme().palette.primary.main) }`,
    },
}));