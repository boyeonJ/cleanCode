/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
import colors from "./Color";


const sizeStyles = {
  h3: {
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "17px",
  },
  h5: {
    fontSize: "11px",
    fontWeight: "400",
    lineHeight: "13px",
  },
  h2B: {
    fontSize: "17px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  h1B: {
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  h5B: {
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "700",
  },
};

type Props = {
  children: ReactElement | string | number;
  variant?: "h3" | "h5" | "h1B" | "h2B" | "h5B";
  color?: "primary" | "gray1" | "gray2" | "black";
};

const Typography = ({ children, variant = "h3", color = "black"}: Props) => {
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
