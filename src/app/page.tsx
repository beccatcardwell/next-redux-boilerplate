import { Counter } from "@/components/Counter/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className={"mb-3 text-3xl font-semibold"}>Next.js Redux Boilerplate</h1>
      <p className={`m-3 max-w-[60ch] text-md text-neutral-400`}>
        Using Redux with server components is a bit different than in a traditional React app.
        Server components must be passed into StoreProvider.tsx as children. For more information, visit <a href='https://redux.js.org/usage/nextjs' className={"opacity-200 underline text-white hover:text-neutral-400"} target='_blank' rel='noopener'>Redux&apos;s docs</a>.
      </p>
      
        <Counter />
   
    </main>
  );
}
