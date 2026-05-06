import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#436850"
        radius="9"
        ariaLabel="loading"
      />
      <h2 className="mt-4 text-2xl font-semibold text-slate-900">
        Gathering today's flowers...
      </h2>
      <p className="mt-2 max-w-md text-slate-600">
        We are preparing the collection so browsing feels smooth and polished.
      </p>
    </div>
  );
}
