import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full flex items-center p-4">
      <div className="container ">
        <Image alt="Logo" src="/images/logo.svg" width={100} height={100} />
      </div>
    </header>
  );
};
