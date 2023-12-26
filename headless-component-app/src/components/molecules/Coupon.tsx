import { Coupon as CouponType } from "../../utils/type";
import colors from "../atoms/Color";
import Typography from "../atoms/Typography";

const Coupon = (coupon: CouponType) => {
  return (
    <>
      <div
        css={{
          backgroundColor: colors.white,
          borderRadius: "5px",
          padding: "35px 20px 20px",
          boxShadow: `0 2px 12px 0 ${colors.gray3}`,
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1B">{coupon.name}</Typography>
        <div css={{ margin: "16px 0px" }}>
          <Typography variant="h0B">{coupon.rate}</Typography>
          <Typography>%</Typography>
        </div>
        <ul css={{ paddingLeft: "20px", listStyleType: "circle !important" }}>
          <li>
            <Typography variant="h5">{`${coupon.minimumPayment}부터 적용 가능`}</Typography>
          </li>
          <li>
            <Typography variant="h5">{`${coupon.dueDate}까지`}</Typography>
          </li>
        </ul>
        <Typography color="primary" variant="h2B">
          {`적용 상품 보기 >`}
        </Typography>
        <button
          css={{
            backgroundColor: colors.primary,
            height: "52px",
            border: "none",
            width: "100%",
            borderRadius: '5px'
          }}
        >
          <Typography color="white" variant="h3B">
            받기
          </Typography>
        </button>
      </div>
    </>
  );
};

export default Coupon;
