/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
import colors from "./Color";

const sizeStyles = {
  h1: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "400",
  },
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
  h0B: {
    fontSize: "40px",
    lineHeight: "38px",
    fontWeight: "700",
  },
  h1B: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "700",
  },
  h2B: {
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  h3B: {
    fontSize: "17px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  h6B: {
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "700",
  },
};

type Props = {
  children: ReactElement | string | number;
  variant?: "h1" | "h3" | "h5" | "h0B" | "h1B" | "h2B" | "h3B" | "h6B";
  color?: "primary" | "gray1" | "gray2" | "black" | "white";
};

const Typography = ({
  children,
  variant = "h3",
  color = "black",
  ...props
}: Props) => {
  return (
    <span
      css={{
        ...sizeStyles[variant],
        color: colors[color],
        ...props,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
