import colors from "../components/atoms/Color";
import Coupon from "../components/molecules/Coupon";
import { Coupon as CouponType } from "../utils/type";

const coupons: CouponType[] = [
    {
      id: 1,
      name: "화장품 카테고리 할인권",
      rate: 10,
      dueDate: "2023년 12월 31일",
      minimumPayment: 10000,
    },
    {
      id: 2,
      name: "연말정산 중복 할인권",
      rate: 20,
      dueDate: "2023년 11월 31일",
      minimumPayment: 20000,
    },
    {
      id: 3,
      name: "감사합니다 올해도 수고하셨어요",
      rate: 40,
      dueDate: "2024년 01월 01일",
      minimumPayment: 60000,
    },
    {
      id: 4,
      name: "첫구매 고객 반값 할인",
      rate: 50,
      dueDate: "2025년 12월 31일",
      minimumPayment: 40000,
    },
];

const CouponsList = () => {
  return (
    <main css={{ padding: "2rem", backgroundColor: colors.gray3}}>
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 23%)",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {coupons.map((coupon) => (
          <Coupon key={coupon.id} {...coupon}/>
        ))}
      </section>
    </main>
  );
};

export default CouponsList;
