import "./App.css";
import Typography from "./atoms/Typography";
import colors from "./atoms/Color";

function App() {
  return (
    <>
      <section
        css={{
          border: `1px solid ${colors["black"]}`,
          display: "grid",
          gridTemplateColumns: "repeat(4, 23%)",
          justifyContent: "space-between",
        }}
      >
        {[1, 2, 3, 4].map((value:number) => (
          <div
            key={value}
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography variant="h4" color="gray1">
              한샘
            </Typography>
            <Typography variant="h2">
              한샘 한샘몰 눕 데일리 구스 아쿠아텍스 패브릭 모듈
            </Typography>
            <div>
              <Typography variant="h1B" color="primary">
                39%
              </Typography>
              <Typography variant="h1B">16888</Typography>
            </div>
            <Typography variant="h4B" color="gray2">
              리뷰 31235
            </Typography>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
