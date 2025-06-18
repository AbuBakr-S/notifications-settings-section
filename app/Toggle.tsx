interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Toggle ({ checked, onChange, disabled }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      disabled={disabled}
      className={`bg-red-500relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out hover:bg-gray-300 
        ${checked ? "bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-[rgba(68,76,231,0.12)]" : "bg-gray-200 focus:ring-4 focus:ring-[rgba(157,164,174,0.2)]"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}