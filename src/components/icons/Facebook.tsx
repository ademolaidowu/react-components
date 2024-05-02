import { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5 6h-3a1 1 0 0 0-1 1v3h4a.35.35 0 0 1 .34.46l-.74 2.2a.5.5 0 0 1-.47.34H12.5v7.5a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5V13H7.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H9V7a4 4 0 0 1 4-4h3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Z"
      fill="#fff"
    />
  </svg>
);

export default FacebookIcon;
