import styled from 'styled-components'
import { blue } from '../../theme/variables'

export const Background = styled.div`
    position: fixed;
    left: 10vw;
    width: 80vw;
    top: 10vh;
    height: 80vh;
    opacity: 0.2;
    background-color: ${blue};
    z-index: -99;
`

export const Index = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    font-size: 3em;
    h1 {
        margin: 0;
        font-weight: bold;
        color: ${blue};
        opacity: 0.5;
        transform: translateY(20%)
    }
`