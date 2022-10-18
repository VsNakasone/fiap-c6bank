import styled from '@emotion/styled';
import React, { useState } from 'react'
import Balance from '../Balance';
import Menu from '../Menu'
import Profile from '../Profile';

const SideBarContainer = styled.section`
dispaly: flex;
flex-direction: column;
width: 360px;
background-color: #242424;
`;
export default function SideBar() {
return(
<SideBarContainer>
    <Profile/>
    <Balance/>
    <Menu/>
</SideBarContainer>
)
}
