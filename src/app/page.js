import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-xl mb-2">Header</h1>
      <p className="text-center">This is a little text, <br /> on multiple lines</p>
      <button className="px-4 p-2 my-1 rounded-md">This is a Button</button>
      <Link href="" className="visited:text-green-50">Link</Link>
      <div className="flex mt-1 w-full border border-white border-x-0 justify-around">
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-background group">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Background</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-background-secondary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Background Secondary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-background-tertiary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Background Tertiary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-foreground group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Foreground</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-foreground-secondary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Foreground Secondary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-foreground-tertiary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Foreground Tertiary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Accent</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent-secondary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Accent Secondary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent-tertiary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Accent Tertiary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-accent-quaternary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Accent Quaternary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-button-background group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Button Background</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-button-text group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Button Text</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-button-hover group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Button Hover</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-link group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Link</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-link-clicked group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Link Clicked</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-hover group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Hover</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-border group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Border</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-border-secondary group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Border Secondary</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-focus-ring group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Focus Ring</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-error group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Error</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-warning group cursor-pointer">
          <div className="absolute bg-background px-2 py-1 rounded-sm hidden group-hover:block">Warning</div>
        </div>
        <div className="w-[4%] h-auto aspect-square ring ring-white bg-success group cursor-default">
          <div className="absolute bg-background px-2 py-1 right-0 rounded-sm hidden group-hover:block">Success</div>
        </div>
      </div>
    </div>
  );
}
