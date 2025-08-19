import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-xl mb-2">Header</h1>
      <p className="text-center">This is a little text, <br /> on multiple lines</p>
      <button className="px-4 p-2 my-1 rounded-md">This is a Button</button>
      <a href="" className="visited:text-green-50">Link</a>
      <div className="flex mt-1 w-full border border-white border-x-0 justify-around">
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-background"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-background-tertiary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-foreground"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-foreground-secondary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-background-secondary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-foreground-tertiary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent-secondary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent-tertiary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent-quaternary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-button-background"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-button-text"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-button-hover"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-link"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-link-clicked"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-hover"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-error"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-warning"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-success"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-border"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-border-secondary"/>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-focus-ring"/>
      </div>
    </div>
  );
}
