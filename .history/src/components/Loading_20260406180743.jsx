import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h2>Loading...</h2>
    </div>
  );
}
