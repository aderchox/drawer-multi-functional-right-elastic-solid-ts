import type { Component } from 'solid-js';
import Drawer from "./Drawer";
import { styled } from "solid-styled-components";
import { createSignal } from "solid-js";
import { debounce } from "@solid-primitives/scheduled";
import Main from './Main';

const Wrapper = styled.div`
background-color: #ebc9e2;
display: flex;
`;

const Bar = styled.div`
  width: 100%;
  background-color: #ff005c;
  position: sticky;
  top: 0;
`

const Button = styled.button`
height: 40px;
width: 70px;
`;

const App: Component = () => {
  const [isExpandedByHandle, setIsExpandedByHandle] = createSignal<boolean>(false);
  const [isHoverExpanded, setIsHoverExpanded] = createSignal(false, {
    equals: false,
  });
  const debouncedSetIsHoverExpanded = debounce(
    (newValue: boolean) => setIsHoverExpanded(newValue),
    400
  );

  function drawerHandleTrigger() {
    setIsExpandedByHandle((prev) => !prev);
  }

  function hoverEnterHandler() {
    debouncedSetIsHoverExpanded(true);
  }

  function hoverLeaveHandler() {
    // To make the debounce one-way
    if (isHoverExpanded() === false) {
      debouncedSetIsHoverExpanded(false);
    } else {
      setIsHoverExpanded(false);
    }
  }

  return (<>
    <Bar>
      <Button onClick={drawerHandleTrigger}>==</Button>
    </Bar>
    <Wrapper>
      <Drawer
        isHoverExpanded={isHoverExpanded()}
        isExpandedByHandle={isExpandedByHandle()}
        onMouseEnter={hoverEnterHandler}
        onMouseLeave={hoverLeaveHandler}
      />
      <Main />
    </Wrapper>
    </>
  );
};

export default App;
