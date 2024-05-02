import { clsx } from "clsx";
import React, { ChangeEvent } from "react";
import { EmailIcon } from "../icons";

type InputProps = {
  name: string;
  label?: string;
  type?: "text" | "tel" | "url" | "number" | "email" | "password";
  size?: "small" | "default" | "large";
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  icon?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Input({
  name,
  label = "",
  type = "text",
  size = "default",
  disabled = false,
  placeholder = "",
  className = "",
  icon = "",
  onChange = () => {},
  required = true,
}: InputProps) {
  // name: the name attribute for form submission (unique)
  // label: to insert label on input field (optional)
  // type: type of input field - text, tel, url, number, email, password
  // size: small, default or large for the size of the input field
  // disabled: if true then disable the input field. Default is false
  // placeholder: placeholder text in input box when empty
  // className: for additional styles or overwrite style. ensure styles are used with !important
  // icon: specify type of icon to be placed at the left side (optional)
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
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon === "email" && <EmailIcon />}
        </div>
        <input
          type={type}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          className={clsx(
            `${className} block w-full rounded-md outline-none focus:ring-primary focus:border-primary focus:border-2 dark:focus:ring-blue-500 dark:focus:border-blue-500`,
            {
              "p-2 text-xs": size === "small",
              "p-3 text-sm": size === "default",
              "p-4 text-base": size === "large",
              "ps-10": icon,
              "bg-white text-dark border border-primary/30 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:bg-gray-700":
                !disabled,
              "bg-gray-200 text-gray-400 border-gray-400 dark:bg-gray-700 border dark:border-gray-600 dark:text-white dark:placeholder-gray-600":
                disabled,
            }
          )}
        />
      </div>
    </div>
  );
}
