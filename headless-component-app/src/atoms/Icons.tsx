type Props = {
  className?: string;
  name: "account_circle" | "search" | "menu" | "close" | "done" | "favorite" | "check" ;
};

const Icons = ({ className = "material-symbols-outlined", name }: Props) => {
  return (
    <>
      <span className={className}>{name}</span>
    </>
  );
};

export default Icons;