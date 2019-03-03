
import React from 'react'
import { Input, Label } from './Input.style'
import { Relative, Flex } from '../../theme/grid'

const InputComponent = ({ label, value, placeholder }) => {
    return (
        <Relative>
            <Flex 
            giant={{ flexFlow: 'column', justify: 'center', align: 'center' }} 
            desktop={{ flexFlow: 'column', justify: 'center', align: 'center' }} 
            tablet={{ flexFlow: 'column', justify: 'start', align: 'center' }} 
            phone={{ flexFlow: 'column', justify: 'start', align: 'center' }} >
                <Label>{label}</Label>
                <Input value={value} placeholder={placeholder}/>
            </Flex>
        </Relative>
    )
}

export default InputComponent