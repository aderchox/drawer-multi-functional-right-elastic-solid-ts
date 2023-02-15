import { Component, createMemo } from "solid-js";
import { styled } from "solid-styled-components";
import DrawerItem from "./DrawerItem";

type propsInterface = {
    isHoverExpanded: boolean,
    isExpandedByHandle: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

const Div = styled.div`
  transition: flex-basis 0.2s;
  flex-basis: ${(props: {isExpanded: boolean}) => (props.isExpanded ? "246px" : "70px")};
  flex-shrink: 0;
  min-height: 100vh;
  /* TODO - First, open room for the scroll-bar */
  /* height: 100vh; */
  /* overflow-y: auto; */
  background-color: #0a1b49;
  color: #fff;
`;

const Drawer: Component<propsInterface> = (props) => {
    const isExpanded = createMemo(() => props.isExpandedByHandle || props.isHoverExpanded)

    return <Div
    isExpanded={isExpanded()}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  >
    <DrawerItem title="home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home long long sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home last home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
    <DrawerItem title="home sweet home" isExpanded={isExpanded()}/>
  </Div>;
};

export default Drawer;