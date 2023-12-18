/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
import colors from "./Color";


const sizeStyles = {
  h2: {
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "17px",
  },
  h4: {
    fontSize: "11px",
    fontWeight: "400",
    lineHeight: "13px",
  },
  h1B: {
    fontSize: "17px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  h4B: {
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "700",
  },
};

type Props = {
  children: ReactElement | string | number;
  variant?: "h2" | "h4" | "h1B" | "h4B";
  color?: "primary" | "gray1" | "gray2" | "black";
};

const Typography = ({ children, variant = "h2", color = "black"}: Props) => {
  return (
    <span
      css={{
        ...sizeStyles[variant],
        color: colors[color],
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
