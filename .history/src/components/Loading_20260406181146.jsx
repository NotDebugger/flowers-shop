import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#6a7282"
        radius="9"
        ariaLabel="loading"
      />
      <h2 className="text-xl font-bold text-center">Loading...</h2>
    </div>
  );
}
