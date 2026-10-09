export default function Input({
  placeholder,
  icon,
  type = "text",
  onChange,
  value,
}) {
  return (
    <div
      className="
      w-full
    flex gap-2 items-center
    bg-primary-light
    rounded-xl p-3
    border-2
    border-transparent
    focus-within:border-primary
    transition
    delay-100
  "
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full border-none outline-none placeholder:text-secondary"
      />
    </div>
  );
}
