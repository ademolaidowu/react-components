import { SVGProps } from "react";

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 15a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 8 10H6.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H8Zm-.75-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10.25 9a.5.5 0 0 0 .5-.5v-4.6a3.1 3.1 0 0 0-2.72-3.14 3 3 0 0 0-2.78 1.34v-.6a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5v-3.75a1.5 1.5 0 0 1 3 0v3.75a.5.5 0 0 0 .5.5h1.5Z"
      fill="#fff"
    />
  </svg>
);

export default LinkedInIcon;
