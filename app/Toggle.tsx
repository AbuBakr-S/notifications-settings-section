import { useState } from "react";

interface ToggleProps {
  checked: boolean;
}

export default function Toggle ({ checked: initialChecked }: ToggleProps) {
  const [checked, setChecked] = useState(initialChecked);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChecked(!checked);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}