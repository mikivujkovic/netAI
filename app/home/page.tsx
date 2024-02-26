import { InlineSnippet } from "@/components/form/domain-configuration";
import Image from "next/image";

export default function HomePage() {
  return (
    // <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
    //   <Image
    //     width={512}
    //     height={512}
    //     src="/logo.png"
    //     alt="Platforms on Vercel"
    //     className="w-48"
    //   />
    //   <h1 className="text-white">
    //     Edit this page on{" "}
    //     <InlineSnippet className="ml-2 bg-blue-900 text-blue-100">
    //       app/home/page.tsx
    //     </InlineSnippet>
    //   </h1>

    // </div>
    <>
      {/* <ThemeSwitcher /> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-12">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">
          <div className=" h-30 bottom-0 left-0 flex w-full items-end justify-center md:h-48  lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
              href="/"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col text-center">
                <h1 className="lgtext-4xl text-2xl font-semibold text-sky-400/100	">
                  {" "}
                  netAI{" "}
                </h1>
                <p className="text-2 m-2 font-medium text-slate-800 dark:text-slate-100">
                  Coming soon to a website near you
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="relative flex flex-col  place-items-center ">
          <h2 className="font-heading m-10 text-center text-6xl font-black leading-[5rem] sm:text-7xl sm:leading-[7rem] lg:text-8xl lg:leading-[7rem]	 ">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              netAI
            </span>
            <span className="">⏳</span>
          </h2>
          <p
            className="m-5 max-w-3xl px-6 text-center text-2xl font-thin text-slate-800 md:text-3xl dark:text-slate-100"
          >What if I told you that you can make landing pages in seconds?</p>
        </div>

        {/* <div className="mt-10 w-80 p-3 text-center lg:m-7">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-light  leading-6 text-slate-800 dark:text-slate-100"
              >
                signup for updates
              </label>
              <div className="mt-2 flex flex-col md:flex-row lg:flex">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className="mr-0 block w-full rounded-none border-0 p-2 pl-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button className="ml-0 mt-2 rounded-none border-2 border-slate-800	bg-slate-900 p-2 hover:bg-slate-950	sm:w-auto md:mt-0 dark:border-slate-100 dark:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div> */}

        <footer className="text-center text-slate-500">
          <div className="my-4 text-center">
            <ul className="flex flex-wrap justify-center lg:flex ">
              <li className="px-2"></li>
              {/* {socialIcons.map((social, index) => (
                <li
                  key={index}
                  className="border-1 px-2 capitalize  hover:border-b-white"
                >
                  <a target="_blank" className="" href={social.link}>
                    {" "}
                    {social.icon}{" "}
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
          <div className="">
            <p
              className=""
            >Copyright © 2024 netAI</p>
          </div>
        </footer>
      </main>
    </>
  );
}
