export default function SocialButton({ text, src }) {
  return (
    <button
      type="button"
      className="flex gap-4 w-full
    items-center
    justify-center
    rounded-xl p-3
    border-2
    border-primary-light
    hover:border-secondary
    cursor-pointer
    transition
    delay-100"
    >
      <img src={src} alt={text} className="w-7" />
      <span>
        Login with <b>{text}</b>
      </span>
    </button>
  );
}
