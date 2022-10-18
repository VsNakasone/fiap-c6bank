import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link'

const MenuContainer= styled.nav`
display:flex;
flex-direction:column;
color: #f8f8f8;
backgorund-color: #242424;
ul {
  margin: 0;
  padding: 0;
  li{
    list-style: none;
    display: flex;
    line-height: 50px;
    border-left:4px solid transparent;
    padding-left: 5%;
    &:hover {
      border-top-right-radius:10px;
      border-bottom-right-radius:10px;
      background-color:#616161;
      border-left:4px solid #ffef0d;
      cursor:pointer;
    }
  }
}
`

export default function Menu() {
  return (
    <MenuContainer>
    <ul>
        <li><Link href={'#'}>{/*<Icon type="inicio"/>*/}<a>Início</a></Link></li>
        <li><Link href={''}><a>Extrato</a></Link></li>
        <li><Link href={''}><a>Transferência</a></Link></li>
        <li><Link href={''}><a>Pagamentos</a></Link></li>
        <li><Link href={''}><a>Cartões</a></Link></li>
        <li><Link href={''}><a>Crédito</a></Link></li>
    </ul>
    </MenuContainer>
  )
}
