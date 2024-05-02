import clsx from "clsx";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  size?: "small" | "default" | "large";
  className?: string;
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
};

export default function Button({
  type = "button",
  size = "default",
  className = "",
  text = "",
  disabled = false,
  onClick = () => {},
}: ButtonProps) {
  // type: html type - submit, button. Default is button
  // size: small, default or large for the size of the input field
  // className: for additional styles or overwrite style. ensure styles are used with !important
  // disabled: if true then button will be disabled. Default is false
  // text: text contained in the button
  // onClick: function that will be called whenever button is clicked
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        `${className} text-white bg-primary font-medium rounded-lg text-center hover:bg-primary/70 inline-flex items-center justify-center focus:ring-2 focus:outline-none focus:ring-primary/70 dark:bg-primary dark:hover:bg-primary/70 dark:focus:ring-primary/50`,
        {
          "px-3 py-2 text-xs": size === "small",
          "px-5 py-3 text-sm": size === "default",
          "px-5 py-4 text-base": size === "large",
          "cursor-not-allowed !bg-gray-500": disabled,
        }
      )}
    >
      {text}
    </button>
  );
}
