import colors from "./Color";
import Icons from "./Icons";
import Typography from "./Typography";

const Nav = () => {
  return (
    <nav
      css={{
        backgroundColor: colors.white,
        position: "fixed",
        top: 0,
        width: "100%",
        height: "80px",
        borderBottom: `3px solid ${colors.gray3}`,
        padding: '10px 40px 0 40px',
      }}
    >
      {/* <img src="src/assets/logo.png" css={{height: "100%"}}/> */}
      <div css={{marginLeft: "10px", gap:"10px"}}>
        <Typography variant="h1B">쇼핑</Typography>
        <Typography variant="h1B">장바구니</Typography>
        <Typography variant="h1B">쿠폰</Typography>
      </div>
      <Icons name="account_circle" />
    </nav>
  );
};

export default Nav;
