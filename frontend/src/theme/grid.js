import styled, { css } from 'styled-components'
import media from './media'

export const Div = styled.div`
    ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `}
`

export const Container = styled(Div)`
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 30px;

    ${media.giant`
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 15px;
    `}

    ${media.desktop`
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 15px;
    `}

    ${media.tablet`
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 15px;
    `}

    ${media.phone`
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 15px;
    `}
`

export const Relative = styled(Div)`
    position: relative;
`

export const Absolute = styled(Div)`
    position: absolute;
`

export const Flex = styled(Div)`
    display: flex;

    ${media.giant`
         ${({ giant }) => giant && css`
            flex-flow: ${giant.flexFlow};
            justify-content: ${giant.justify};
            align-content: ${giant.align};
        `}
    `}

    ${media.desktop`
         ${({ desktop }) => desktop && css`
            flex-flow: ${desktop.flexFlow};
            justify-content: ${desktop.justify};
            align-content: ${desktop.align};
        `}
    `}

    ${media.tablet`
         ${({ tablet }) => tablet && css`
            flex-flow: ${tablet.flexFlow};
            justify-content: ${tablet.justify};
            align-content: ${tablet.align};
        `}
    `}

    ${media.phone`
         ${({ phone }) => phone && css`
            flex-flow: ${phone.flexFlow};
            justify-content: ${phone.justify};
            align-content: ${phone.align};
        `}
    `}
`