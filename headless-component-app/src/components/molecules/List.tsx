import FlexBox from "../atoms/FlexBox";
import Typography from "../atoms/Typography";

type Props = {
  listItems: {
    key: string;
    value: string;
  }[];
};

const List = ({ listItems }: Props) => {
  return (
    <div>
      {listItems.map(({ key, value }) => (
        <FlexBox key={key} justify="space-between">
          <>
            <Typography variant="h4" color="blue1">
              {key}
            </Typography>
            <Typography variant="h4B" color="blue1">
              {value}
            </Typography>
          </>
        </FlexBox>
      ))}
    </div>
  );
};

export default List;
