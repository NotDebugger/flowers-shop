import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#6a7282"
        radius="9"
        ariaLabel="loading"
      />
      <h2>Loading...</h2>
    </div>
  );
}
