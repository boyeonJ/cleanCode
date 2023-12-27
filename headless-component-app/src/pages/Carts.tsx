import colors from "../components/atoms/Color";
import FlexBox from "../components/atoms/FlexBox";
import Typography from "../components/atoms/Typography";
import List from "../components/molecules/List";

const cartTotalInfos = {};

const Carts = () => {
  return (
    <>
      <main>
        <article></article>
        <aside css={{}}>
          <section
            css={{
              border: `1px solid ${colors.gray3}`,
              width: "370px",
              top: "80px",
              position: "sticky",
            }}
          >
            <Typography color="blue1" variant="h2B">
              결제 금액
            </Typography>
            <article>
              <List
                listItems={[
                  { key: "총 삼품금액", value: "135,400원" },
                  { key: "배송비", value: "14,500원" },
                  { key: "쿠폰 사용", value: "0원" },
                  { key: "포인트 사용", value: "0원" },
                ]}
              />
            </article>
            <hr
              css={{
                height: "1px",
                border: `1px solid ${colors.gray3}`,
                margin: "20px 0",
              }}
            />
          </section>
        </aside>
      </main>
    </>
  );
};

export default Carts;
