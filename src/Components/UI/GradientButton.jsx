export default function GradientButton({ text }) {
  return (
    <button className="btn py-6  text-[16px] rounded-full text-white bg-primary-gradient">
      {text}
    </button>
  );
}
