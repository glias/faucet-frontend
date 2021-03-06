import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Link } from 'react-router-dom'

const Button = ({
    children,
    disabled,
    href,
    onClick,
    size,
    text,
    to,
    variant,
}) => {
    const { color, spacing } = useContext(ThemeContext)

    let buttonColor
    switch (variant) {
        case 'secondary':
            buttonColor = color.grey[500]
            break
        case 'default':
        default:
            buttonColor = color.primary.main
    }

    let boxShadow
    let buttonSize
    let buttonPadding
    let fontSize
    switch (size) {
        case 'sm':
            boxShadow = `4px 4px 8px ${color.grey[300]},
        -8px -8px 16px ${color.grey[100]}FF;`
            buttonPadding = spacing[3]
            buttonSize = 36
            fontSize = 14
            break
        case 'lg':
            boxShadow = `6px 6px 12px ${color.grey[300]},
        -12px -12px 24px ${color.grey[100]}ff;`
            buttonPadding = spacing[4]
            buttonSize = 72
            fontSize = 16
            break
        case 'md':
        default:
            boxShadow = `6px 6px 12px ${color.grey[300]},
        -12px -12px 24px -2px ${color.grey[100]}ff;`
            buttonPadding = spacing[4]
            buttonSize = 56
            fontSize = 16
    }

    const ButtonChild = useMemo(() => {
        if (to) {
            return <StyledLink to={to}>{text}</StyledLink>
        } else if (href) {
            return (
                <StyledExternalLink href={href} target="__blank">
                    {text}
                </StyledExternalLink>
            )
        } else {
            return text
        }
    }, [href, text, to])

    return (
        <StyledButton
            boxShadow={boxShadow}
            color={buttonColor}
            disabled={disabled}
            fontSize={fontSize}
            onClick={onClick}
            padding={buttonPadding}
            size={buttonSize}
        >
            {children}
            {ButtonChild}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    align-items: center;
    background-color: ${(props) => props.theme.color.whites[100]};
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.08);
    color: ${(props) => (!props.disabled ? props.color : `${props.color}55`)};
    cursor: pointer;
    display: flex;
    font-size: ${(props) => props.fontSize}px;
    font-weight: 700;
    height: ${(props) => props.size}px;
    justify-content: center;
    outline: none;
    padding-left: ${(props) => props.padding}px;
    padding-right: ${(props) => props.padding}px;
    pointer-events: ${(props) => (!props.disabled ? undefined : 'none')};
    width: 100%;
    &:hover {
        background-color: ${(props) => props.theme.color.grey[100]};
    }

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6b70e0;
`

const StyledLink = styled(Link)`
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1;
    height: 56px;
    justify-content: center;
    margin: 0 ${(props) => -props.theme.spacing[4]}px;
    padding: 0 ${(props) => props.theme.spacing[4]}px;
    text-decoration: none;
`

const StyledExternalLink = styled.a`
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1;
    height: 56px;
    justify-content: center;
    margin: 0 ${(props) => -props.theme.spacing[4]}px;
    padding: 0 ${(props) => props.theme.spacing[4]}px;
    text-decoration: none;
`

export default Button
