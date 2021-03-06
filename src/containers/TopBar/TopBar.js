import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from './components/Logo'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

const TopBar = ({ wallet }) => {
    return (
        <StyledTopBar>
            <Container size="lg">
                <StyledTopBarInner>
                    <StyledLogoWrapper>
                        <Logo />
                    </StyledLogoWrapper>
                    <StyledAccountButtonWrapper>
                        <AccountButton wallet={wallet} />
                    </StyledAccountButtonWrapper>
                </StyledTopBarInner>
            </Container>
        </StyledTopBar>
    )
}

const StyledLogoWrapper = styled.div`
    width: 260px;
    @media (max-width: 400px) {
        width: auto;
    }
`

const StyledTopBar = styled.div`
    background: #6b70e0;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.08);
    width: 100%;
    display: flex;
    justify-content: center;
`

const StyledTopBarInner = styled.div`
    align-items: center;
    display: flex;
    height: ${(props) => props.theme.topBarSize}px;
    justify-content: space-between;
    max-width: ${(props) => props.theme.siteWidth}px;
    width: 100%;
`

const StyledAccountButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 156px;
    @media (max-width: 400px) {
        justify-content: center;
        width: auto;
    }
`
export default TopBar
