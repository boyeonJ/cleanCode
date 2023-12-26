/** @jsxImportSource @emotion/react */

import colors from "../atoms/Color";
import Icons from "../atoms/Icons";
import Typography from "../atoms/Typography";

const breakpoints = [576, 768, 992, 1200];
const minq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
const maxq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Header = () => {
  return (
    <header
      css={{
        height: "80px",
        marginBottom: "2rem",
      }}
    >
      <div
        css={{
          backgroundColor: colors.white,
          position: "fixed",
          top: 0,
          width: "100%",
          height: "80px",
          borderBottom: `3px solid ${colors.gray3}`,
          padding: "1rem 2rem",
          boxSizing: "border-box",
        }}
      >
        <div
          className="header-container"
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icons
            name="menu"
            size="large"
            style={{
              [minq[1]]: {
                display: "none",
              },
            }}
          />

          <img src="/src/assets/logo.png" css={{ height: "2rem" }} />

          <nav
            css={{
              [maxq[1]]: {
                display: "none",
              },
            }}
          >
            <ul
              css={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                li: {
                  marginRight: "3rem",
                },
              }}
            >
              <li>
                <a href="">
                  <Typography variant="h1B">쇼핑</Typography>
                </a>
              </li>
              <li>
                <a href="">
                  <Typography variant="h1B">장바구니</Typography>
                </a>
              </li>
              <li>
                <a href="">
                  <Typography variant="h1B">쿠폰</Typography>
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <Icons name="account_circle" size="large" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
