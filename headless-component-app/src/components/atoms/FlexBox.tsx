import { ReactElement } from "react";

type Props = {
  //row - justify(justify-content): 가로, align(align-items): 세로
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "sapce-around"
    | "space-evenly";
  align?: "center" | "flex-start" | "flex-end" | "stretch";
  children: ReactElement;
  width?: string;
};

const FlexBox = ({
  children,
  direction = "row",
  justify = "flex-start",
  align = "center",
  width,
}: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        width: width,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
