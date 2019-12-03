import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.li`
    margin-bottom: 10px;
    padding-left: 30px;
    position: relative;
    &:before {
        content: counter(my-counter);
        counter-increment: my-counter;
        background-color: #00d8ff;
        color: #222;
        display: block;
        float: left;
        line-height: 22px;
        margin-left: -30px;
        text-align: center;
        height: 22px;
        width: 22px;
        border-radius: 50%;
    }
`

const Item = () => {
    const desc = 'りあくとのべんきょう'
    return (
        <ItemWrapper>
            <p>{desc}</p>
        </ItemWrapper>
    )
}

export default Item