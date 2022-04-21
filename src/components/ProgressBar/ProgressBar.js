/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--border-radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Bar
        style={{
          "--width": value + "%",
          "--height": styles.height + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
  /* when the inner bar is almost full, trim off corners */
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  width: var(--width);
  background-color: ${COLORS.primary};
  height: var(--height);
  border-radius: ${(props) => {
    if (props.value < 100) {
      return "4px 0 0 4px";
    } else {
      return "4px";
    }
  }};
`;

/* border-radius: ${(props) => {
    if (props.value < 100) {
      return "4px 0 0 4px";
    } else {
      return "4px";
    }
  }}; */

export default ProgressBar;
