import React, { Fragment } from "react";

export type ToggleProps = {
  visible: boolean;
  children: any;
};

function Toggle(props: ToggleProps) {
  const { visible, children } = props;

  return visible ? children ?? <Fragment /> : <Fragment />;
}

export default Toggle;
