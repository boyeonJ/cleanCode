/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactElement } from "react";

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
  children: ReactElement | string;
  variant?: "h2" | "h4" | "h1B" | "h4B";
};

const Typography = ({ children, variant = "h2" }: Props) => {
  return (
    <div
      css={{
        backgroundColor: "hotpink",
        ...sizeStyles[variant],
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
