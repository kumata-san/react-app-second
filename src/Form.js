import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    border: 2px solid #00d8ff;
    border-radius: 8px;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-left: 10px;
`
const Button = styled.button`
    border: 2px solid #00d8ff;
    border-radius: 8px;
    margin-left: 20px;
    font-size: 1.1rem;
    line-height: 1.1rem;
    transition: 0.5s;
    &:hover {
        border: 2px solid #eee;
        color: #eee;
        background: #00d8ff;
        cursor: pointer;
    }
`

const Form = () => {
    return (
    <form>
        <Input type="text" placeholder="やることをいれてね"/>
        <Button type="submit">そ〜しん</Button>
    </form>
    )
}

export default Form