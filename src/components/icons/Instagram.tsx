import { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm3.25 13A3.26 3.26 0 0 1 16 19.25H8A3.26 3.26 0 0 1 4.75 16V8A3.26 3.26 0 0 1 8 4.75h8A3.26 3.26 0 0 1 19.25 8v8Zm-2.5-7.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 7.5a4.5 4.5 0 1 0 4.5 4.5A4.49 4.49 0 0 0 12 7.5ZM9.25 12a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0Z"
      fill="#fff"
    />
  </svg>
);

export default InstagramIcon;
