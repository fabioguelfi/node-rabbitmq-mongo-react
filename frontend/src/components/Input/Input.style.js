import styled from 'styled-components'
import media from '../../theme/media'

export const Input = styled.input`
    ${media.giant`
        max-width: 100%;
        max-height: 10vh;
        font-size: 1em;
    `} 
    ${media.desktop`
        max-width: 100%;
        max-height: 10vh;
        font-size: 1em;
    `} 
    ${media.tablet`
        max-width: 100%;
        max-height: 10vh;
        font-size: 1.5em;
    `}
    ${media.phone`
        max-width: 100%;
        max-height: 10vh;
        font-size: 1em;
    `}
`

export const Label = styled.label`
    ${media.giant`
        font-size: 1.5em;
        font-weight: bold;
        text-align: left;
    `} 
    ${media.desktop`
        font-size: 1.5em;
        font-weight: bold;
        text-align: left;
    `} 
    ${media.tablet`
        font-size: 2em;
        font-weight: bold;
        text-align: left;
    `}
    ${media.phone`
        font-size: 1.5em;
        font-weight: bold;
        text-align: left;
    `}
`