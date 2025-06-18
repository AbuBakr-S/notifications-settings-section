import { useEffect } from "react";

type ToastProps = {
  type: "success" | "error";
  message: string;
  duration?: number; // in ms, default: 5000
  onClose?: () => void;
};

export default function Toast({ type, message, duration = 5000, onClose }: ToastProps) {
  const isError = type === "error";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`flex whitespace-nowrap items-center gap-3 px-1 py-1 rounded-full text-sm font-medium w-fit shadow 
        ${isError ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}
      `}
    >
      <span
        className={`px-3 py-0.5 rounded-full 
          ${isError ? "bg-white text-red-700" : "bg-white text-green-700 border-0"}
        `}
      >
        {isError ? "Error" : "Success"}
      </span>
      <span className="pr-2.5">{message}</span>
    </div>
  );
}