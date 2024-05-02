import { clsx } from "clsx";
import React, { ChangeEvent } from "react";

type TextAreaProps = {
  name: string;
  label?: string;
  size?: "small" | "default" | "large";
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
};

export default function TextArea({
  name,
  label = "",
  size = "default",
  disabled = false,
  placeholder = "",
  className = "",
  onChange = () => {},
  required = true,
}: TextAreaProps) {
  // name: the name attribute for form submission (unique)
  // label: to insert label on input field (optional)
  // size: small, default or large for the size of the input field
  // disabled: if true then disable the input field. Default is false
  // placeholder: placeholder text in input box when empty
  // className: for additional styles or overwrite style. ensure styles are used with !important
  // onChange: function that will be called whenever value changes
  // required: if true then input field would be required. Default is true
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-dark dark:text-white"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        disabled={disabled}
        placeholder={placeholder}
        rows={
          {
            small: 4,
            default: 6,
            large: 10,
          }[size]
        }
        onChange={onChange}
        required={required}
        className={clsx(
          `${className} block w-full rounded-md outline-none focus:ring-primary focus:border-primary focus:border-2 dark:focus:ring-blue-500 dark:focus:border-blue-500`,
          {
            "p-2 text-xs": size === "small",
            "p-3 text-sm": size === "default",
            "p-4 text-base": size === "large",
            "bg-white text-dark border border-primary/30 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:bg-gray-700":
              !disabled,
            "bg-gray-200 text-gray-400 border-gray-400 dark:bg-gray-700 border dark:border-gray-600 dark:text-white dark:placeholder-gray-600":
              disabled,
          }
        )}
      ></textarea>
    </div>
  );
}
