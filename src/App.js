import React from 'react'
import Form from './Form'
import List from './List'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #00d8ff;
    margin: 0 auto;
    border-radius: 10px;
`

const App = () => {
    return (
    <Wrapper>
        <h1>とぅ〜どぅ〜</h1>
        <Form />
        <List />
    </Wrapper>
    )
}

export default App