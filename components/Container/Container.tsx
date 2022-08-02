import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = (props) => {
  return <div>
    {props.children}
  </div>;
};

export default Container;