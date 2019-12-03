import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const ItemList = styled.ol`
  counter-reset: my-counter;
  list-style: none;
  background-color: #fff;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
`

const List = () => {
    return (
    <ItemList>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </ItemList>
    )
}

export default List