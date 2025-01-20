interface propsLabel {
  label: string;
  color: string;
  text?: string;
}

const Buttons = ({ label, color, text }: propsLabel) => {
  return (
    <div>
      <button
        className={`h-14 w-80 text-[20px] font-[40px] rounded-md ${color} ${text}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Buttons;
