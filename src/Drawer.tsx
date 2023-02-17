import { Component, createMemo, createEffect, createSignal, onCleanup } from "solid-js";
import { styled } from "solid-styled-components";
import DrawerItem from "./DrawerItem";

type propsInterface = {
    isHoverExpanded: boolean,
    isExpandedByHandle: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

type DrawerProps = { isExpanded: boolean, isScrolled: boolean }

// TODO: Apply a better theming method.
const TOP_BAR_HEIGHT = 40;
let SCROLLBAR_WIDTH: number;
createEffect(() => {
  // RAF is used here so that scrollbar width calculation is done "after paint".
  const raf = requestAnimationFrame(() => {
    SCROLLBAR_WIDTH = window.innerWidth - document.documentElement.clientWidth;
  });
  onCleanup(() => cancelAnimationFrame(raf));
});

const Div = styled.div((props: DrawerProps) => {
  const baseStyles = `
  transition: flex-basis 0.2s;
  white-space: nowrap;
  flex-basis: 70px;
  flex-shrink: 0;
  height: calc(100vh - ${TOP_BAR_HEIGHT}px);
  background-color: #ebc9e2;
  overflow: hidden;
  position: sticky;
  top: 40px;
  scrollbar-gutter: stable;
  `;
  // TODO - scrollbar-gutter support has been removed in Safari due to a bug. Make it work without scrollbar-gutter support too.

  // TODO - When it's not scrolled, on hover add border (with box-shadow, to not break sizings) on the inline-end edge.
  // &:hover { ... }

  let dynamicStyles = ``;
  if(props.isScrolled){
    dynamicStyles += `
      flex-basis: ${70 + SCROLLBAR_WIDTH}px;
      &:hover {
        overflow-y: scroll;
      }
    `
  }
  if(props.isExpanded){
    if(props.isScrolled){
      dynamicStyles += `
      flex-basis: ${246 + SCROLLBAR_WIDTH}px;
      `
    }
    else {
      dynamicStyles += `flex-basis: 246px;`
    }
  }

  return baseStyles + dynamicStyles;
})

let drawerRef: HTMLDivElement;

const Drawer: Component<propsInterface> = (props) => {
    const isExpanded = createMemo(() => props.isExpandedByHandle || props.isHoverExpanded)
    const [ isScrolled, setIsScrolled ] = createSignal(true);
    
    const MIN_DISTANCE_TO_BOTTOM_BEFORE_SCROLL = 30;
    createEffect(function scrollYHandler(){
      setIsScrolled((drawerRef.scrollHeight + MIN_DISTANCE_TO_BOTTOM_BEFORE_SCROLL) > window.innerHeight);
      isScrolled();
    });

    return <Div
    isExpanded={isExpanded()}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    ref={drawerRef}
    isScrolled={isScrolled()}
  >
    <DrawerItem title="home" icon="home" isExpanded={isExpanded()}/>
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
    <DrawerItem title="home last home" icon="last" isExpanded={isExpanded()}/>
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