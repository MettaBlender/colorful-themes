import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-xl mb-2">Header</h1>
      <p className="text-center">This is a little text, <br /> on multiple lines</p>
    </div>
  );
}
