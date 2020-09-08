import * as React from "react";
import { FC } from "react";

export type Props = {
  /**
   * Adds text
   */
  text: string;
  maybe?: boolean
};

export const Button: FC<Props> = ({ text, maybe }) => {
  
  return <>
    <button>{text}</button>
    <style jsx>{`
      button {
        background: orangered;

        &:hover, &:focus, &:active {
          background: blue;
        }
      }
    `}</style>
  </>;
};
