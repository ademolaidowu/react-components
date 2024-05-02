import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen-xl">
      {children}
    </div>
  );
}
