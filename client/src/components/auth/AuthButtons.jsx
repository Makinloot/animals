import { FaFacebook, FaGoogle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function AuthButtons({ value, icon, color, submit }) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`flex w-full items-center justify-center rounded-md transition-all active:scale-95 ${color} p-4 text-xl capitalize`}
    >
      <div className="mr-2">
        {icon === "google" ? (
          <FaGoogle />
        ) : icon === "facebook" ? (
          <FaFacebook />
        ) : null}
      </div>
      <p>{value}</p>
    </button>
  );
}
