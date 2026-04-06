import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-lvh flex flex-col justify-center items-center">
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#6a7282"
        radius="9"
        ariaLabel="loading"
      />
      <h2 className="text-xl font-bold text-center">Loading...</h2>
    </div>
  );
}
