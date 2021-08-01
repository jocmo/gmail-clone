import React from 'react'
import styled from 'styled-components'

function SidebarOption({ Icon, title, number, selected}) {
    return (
        <SidebarOptionContainer className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </SidebarOptionContainer>
    );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    padding: 0 10px;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    color: #818181;

    > p {
        display: none;
        font-weight: 300;
    }

    :hover,
    :hover > h3,
    :hover > p,
    &.sidebarOption--active,
    &.sidebarOption--active > p,
    &.sidebarOption--active > h3
    {
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 600 !important;
    }
     

    > :hover > p {
        display: inline;
    }

    > h3 {
        flex: 1;
        font-size: 14px;
        margin-left: 10px;
        font-weight: 400;
    }

    > .MuiSvgIcon-root {
        padding: 5px;
    }

    &.sidebarOption--active > p {
        display: inline !important;
    }


`;

