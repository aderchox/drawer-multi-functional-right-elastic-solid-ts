import { Component, Show } from "solid-js";
import { styled, css } from "solid-styled-components";

const DrawerItem: Component<{isExpanded: boolean, title: string, icon?: string }> = (props) => {
  
    const Wrapper = styled.div<{isExpanded: boolean}>`
        display: flex;
        height: 2.5em;
        position: relative;
        align-items: center;
        margin-inline-end: 6px;
        border-start-end-radius: 30px;
        border-end-end-radius: 30px;
        /* To prevent width go all the way back to 0 and then increase, when set to auto (which will look glitchy). */
        min-width: 70px;
        width: ${props => !props.isExpanded ? "70px" : "auto"};
        transition: border-raius 0.2s;
        &:nth-child(1) {
            margin-top: 6px;
        }
        &:hover {
            cursor: pointer;
            background-color: #ff005c;
        }
    `

    const DrawerIcon = styled.div`
        flex-basis: 70px;
        flex-shrink: 0;
        text-align: center;
    `;

    const DrawerItemTitle = styled.div<{isExpanded: boolean}>(props => {
        const baseStyles = `
        `;
        const expandedStyles = baseStyles + `
            opacity: 1;
            transition: opacity 1s;
            flex-grow: 1;
            padding-inline-end: 1em;
            text-align: center;
            `
        const notExpandedStyles = baseStyles + `
            opacity: 0;
            transition: opacity 0s;
            position: absolute;
            width: 100%;
        `;
        if(props.isExpanded) {
            return expandedStyles
        } else {
            return notExpandedStyles
        }
    });

    const choppedTitle = props.title.substring(0, 15).trimEnd();
    let isChopped = false;
    if(props.title.length > 15){
        isChopped = true;
    }

  return <Wrapper isExpanded={props.isExpanded}>
        <DrawerIcon>{props.icon || "icon"}</DrawerIcon>
        <DrawerItemTitle isExpanded={props.isExpanded}>{
            isChopped ? choppedTitle + "..." : props.title
        }</DrawerItemTitle>
    </Wrapper>;
};

export default DrawerItem;