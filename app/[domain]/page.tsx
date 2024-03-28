import Link from "next/link";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlurImage from "@/components/blur-image";
import { placeholderBlurhash, toDateString } from "@/lib/utils";
import BlogCard from "@/components/blog-card";
import { getPostsForSite, getSiteData } from "@/lib/fetchers";
import Image from "next/image";

import logo from "@/public/logo-white.png";
import competition from "@/public/competition.png";

import { Roboto, Saira_Condensed } from "next/font/google";

const saira = Saira_Condensed({ weight: ["400", "800"], subsets: ["latin"] });

export async function generateStaticParams() {
  const allSites = await prisma.site.findMany({
    select: {
      subdomain: true,
      customDomain: true,
    },
    // feel free to remove this filter if you want to generate paths for all sites
    where: {
      subdomain: "demo",
    },
  });

  const allPaths = allSites
    .flatMap(({ subdomain, customDomain }) => [
      subdomain && {
        domain: `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
      },
      customDomain && {
        domain: customDomain,
      },
    ])
    .filter(Boolean);

  return allPaths;
}

export default async function SiteHomePage({
  params,
}: {
  params: { domain: string };
}) {
  const domain = decodeURIComponent(params.domain);
  const [data, posts] = await Promise.all([
    getSiteData(domain),
    getPostsForSite(domain),
  ]);

  if (!data) {
    notFound();
  }

  return (
    <>
      <div className="mb-20 w-full">
        {/* {posts.length > 0 ? (
          <div className="mx-auto w-full max-w-screen-xl md:mb-28 lg:w-5/6">
            <Link href={`/${posts[0].slug}`}>
              <div className="group relative mx-auto h-80 w-full overflow-hidden sm:h-150 lg:rounded-xl">
                <BlurImage
                  alt={posts[0].title ?? ""}
                  blurDataURL={posts[0].imageBlurhash ?? placeholderBlurhash}
                  className="h-full w-full object-cover group-hover:scale-105 group-hover:duration-300"
                  width={1300}
                  height={630}
                  placeholder="blur"
                  src={posts[0].image ?? "/placeholder.png"}
                />
              </div>
              <div className="mx-auto mt-10 w-5/6 lg:w-full">
                <h2 className="my-10 font-title text-4xl dark:text-white md:text-6xl">
                  {posts[0].title}
                </h2>
                <p className="w-full text-base dark:text-white md:text-lg lg:w-2/3">
                  {posts[0].description}
                </p>
                <div className="flex w-full items-center justify-start space-x-4">
                  <div className="relative h-8 w-8 flex-none overflow-hidden rounded-full">
                    {data.user?.image ? (
                      <BlurImage
                        alt={data.user?.name ?? "User Avatar"}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                        src={data.user?.image}
                      />
                    ) : (
                      <div className="absolute flex h-full w-full select-none items-center justify-center bg-stone-100 text-4xl text-stone-500">
                        ?
                      </div>
                    )}
                  </div>
                  <p className="ml-3 inline-block whitespace-nowrap align-middle text-sm font-semibold dark:text-white md:text-base">
                    {data.user?.name}
                  </p>
                  <div className="h-6 border-l border-stone-600 dark:border-stone-400" />
                  <p className="m-auto my-5 w-10/12 text-sm font-light text-stone-500 dark:text-stone-400 md:text-base">
                    {toDateString(posts[0].createdAt)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <Image
              alt="missing post"
              src="https://illustrations.popsy.co/gray/success.svg"
              width={400}
              height={400}
              className="dark:hidden"
            />
            <Image
              alt="missing post"
              src="https://illustrations.popsy.co/white/success.svg"
              width={400}
              height={400}
              className="hidden dark:block"
            />
            <p className="font-title text-2xl text-stone-600 dark:text-stone-400">
              No posts yet.
            </p>
          </div>
        )} */}

        <div className="flex flex-col justify-center align-middle">
          <div className="max-h-[589px] bg-pitch object-fill xl:w-[1280px]">
            <div className="hidden md:inline">
              <div className="z-0 flex max-h-[131] min-h-[48px] flex-row justify-between bg-[#020202] bg-opacity-50 text-white">
                <Image src={logo} alt="logo" width={151} height={48} />
                <div className="hidden justify-center align-middle md:flex">
                  <div className={saira.className}>
                    <div className="flex min-h-[48px] flex-row justify-center align-middle font-extrabold">
                      <a href="#problem" className="mx-4 flex items-center">
                        Problem
                      </a>
                      <a href="#solution" className="mx-4 flex items-center">
                        Solution
                      </a>
                      <a href="#competition" className="mx-4 flex items-center">
                        Competition
                      </a>
                      <a href="#market" className="mx-4 flex items-center">
                        Market
                      </a>
                      <a href="#technology" className="mx-4 flex items-center">
                        Technology
                      </a>
                      <a href="#innovation" className="mx-4 flex items-center">
                        Innovation
                      </a>
                      <a href="#team" className="mx-4 flex items-center">
                        Team
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center align-middle md:min-h-[564px]">
              <Image
                src={logo}
                alt="logo"
                width={453}
                height={144}
                className="mb-4 ml-4 mt-4 max-h-[49px] max-w-[156px] md:mb-24 md:ml-64 md:max-h-[144px] md:max-w-[453px]"
              />
              <div className={saira.className}>
                <div className="md:ml-76 ml-4 text-center text-[24px] md:text-[64px]">
                  Disrupting web development
                </div>
                <div className="md:ml-76 ml-4 text-center text-[24px] md:text-[64px]">
                  with generative{" "}
                  <span className="text-[24px] font-bold text-orange-400 md:text-[64px]">
                    AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div id="problem">
            <div className="flex flex-col justify-center bg-pitch object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
              <div className={saira.className}>
                <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                  Problem
                </div>
                <div className="ml-4 mt-8 text-[20px] md:ml-16 md:text-[48px]">
                  Web development:
                </div>
                <div>
                  <ul className="mb-2 ml-4 text-[20px] md:mb-8 md:ml-24 md:text-[48px]">
                    <li>
                      <span className="text-orange-400">Slow:</span> 50 - 75
                      hours for a custom landing page
                    </li>
                    <li>
                      <span className="text-orange-400">Labor intensive:</span>{" "}
                      at least one designer and one developer
                    </li>
                    <li>
                      <span className="text-orange-400">Expensive:</span> $1500
                      - $3000 per landing page
                    </li>
                  </ul>
                </div>
                <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                  What if you need a 100 landing pages a month?
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div id="solution">
            <div className="flex flex-col justify-center bg-pitch object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
              <div className={saira.className}>
                <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                  Solution
                </div>
                <div className="ml-4 max-h-[240px] max-w-[320px] md:ml-32 md:max-h-[640px] md:max-w-[960px]">
                  <video width="960" height="640" controls preload="none">
                    <source
                      src="https://www.dropbox.com/scl/fi/ngd3t4cnhlhkp9std3xtq/demo.mp4?rlkey=djovqm6xyhd3yswsnomabg7ww&raw=1"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div id="solution1">
            <div className="flex flex-col justify-center bg-pitch object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
              <div className={saira.className}>
                <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                  Solution continued
                </div>
                <div className="ml-4 mt-8 text-[20px] md:ml-16 md:text-[48px]">
                  netAI landing page generation:
                </div>
                <div>
                  <ul className="mb-8 ml-8 text-[20px] md:ml-24 md:text-[48px]">
                    <li>
                      <span className="text-orange-400">Fast:</span> takes just
                      a few seconds to generate a custom landing page
                    </li>
                    <li>
                      <span className="text-orange-400">Labor efficient:</span>{" "}
                      anyone can do it
                    </li>
                    <li>
                      <span className="text-orange-400">Affordable:</span> $500
                      for hundreds of landing pages
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div id="competition">
            <div className="flex flex-col justify-center bg-[#8BA5FF] align-middle md:min-h-[564px] xl:w-[1280px]">
              <div className={saira.className}>
                <div className="ml-4 text-[24px] md:ml-8 md:text-[64px]">
                  Competition
                </div>
                <div className="ml-4 p-4 md:ml-48 md:p-8">
                  <Image src={competition} alt="competition" height={564} />
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div id="market">
            <div className="flex flex-col justify-center bg-pitch object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
              <div className={saira.className}>
                <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                  Market
                </div>
                <div className="ml-4 mt-8 text-[20px] md:ml-16 md:text-[48px]">
                  <span className="text-orange-400">Market:</span>digital
                  agencies targeting English-speaking world
                </div>
                <div>
                  <ul className="mb-8 ml-8 text-[20px] md:ml-24 md:text-[48px]">
                    <li className="font-bold">
                      Digital marketing tools market:
                    </li>
                    <li>
                      USA: 2021 USD <strong>71.02 billion</strong>
                    </li>
                    <li>
                      CAGR: <strong>18.3%</strong>
                    </li>
                  </ul>
                </div>
                <div className="ml-4 text-[20px] md:ml-16 md:text-[48px]">
                  Projection 2030: USD 256.36 billion{"    "}
                  <em className="text-[16px] md:text-[32px]">
                    Source: Straits Research
                  </em>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div id="technology">
            <div className="flex flex-col justify-center bg-pitch bg-no-repeat object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
              <div className={saira.className}>
                <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                  Technology
                </div>

                <div className="ml-4 mt-8 text-[16px] md:ml-16 md:text-[32px]">
                  <strong>AI:</strong> Latest OpenAI models, but modular:
                </div>
                <div>
                  <ul className="mb-8 ml-8 text-[16px] md:ml-24 md:text-[32px]">
                    <li>DALLE 3</li>
                    <li>GPT 4</li>
                  </ul>
                </div>

                <div className="ml-4 mt-8 text-[16px] md:ml-16 md:text-[32px]">
                  <strong>Platform:</strong>
                </div>
                <div>
                  <ul className="mb-8 ml-8 text-[16px] md:ml-24 md:text-[32px]">
                    <li>Vercel</li>
                  </ul>
                </div>

                <div className="ml-4 mt-8 text-[16px] md:ml-16 md:text-[32px]">
                  <strong>UI:</strong>
                </div>
                <div>
                  <ul className="mb-8 ml-8 text-[16px] md:ml-24 md:text-[32px]">
                    <li>NextJS</li>
                  </ul>
                </div>

                <br />
                <br />

                <div id="innovation">
                  <div className="flex flex-col justify-center bg-pitch object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
                    <div className={saira.className}>
                      <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                        Innovation
                      </div>
                      <div>
                        <ul className="mb-8 ml-8 text-[20px] md:ml-24 md:text-[48px]">
                          <li>Custom prompt parser</li>
                          <li>Flexible design systems</li>
                          <li>
                            Infinite design possibilities based on best
                            practices
                          </li>
                          <li>Each page is 100% custom</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <br />

                <div id="team">
                  <div className="flex flex-col justify-center bg-pitch object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
                    <div className={saira.className}>
                      <div className="ml-4 text-[24px] md:ml-16 md:text-[64px]">
                        Team
                      </div>
                      <div className="m-8 flex flex-col gap-32 md:flex-row md:gap-8 xl:max-w-[1280px]">
                        <div className="flex w-[80%] flex-col">
                          <img src="https://www.dropbox.com/scl/fi/qoj3bm476cn463orpw5gu/miki.jpeg?rlkey=6yw1yynrh0vr26u7xz8mzf2ov&raw=1"></img>
                          <div className="text-center text-[20px] md:text-[32px]">
                            Miodrag, CEO, AI dev
                          </div>
                          <div className="p-4 text-[16px] md:text-[32px]">
                            Y Combinator SS, EIT Jumpstarter, More than 50
                            projects for intl clients in IT, banking, finance
                          </div>
                        </div>
                        <div className="flex w-[80%] flex-col">
                          <img src="https://www.dropbox.com/scl/fi/nnrrm8op5vyxpx2qx0vx2/maja.jpeg?rlkey=pg4t0adpd2svdc3c0da0lm1vz&raw=1"></img>
                          <div className="text-center text-[20px] md:text-[32px]">
                            Maja, PM
                          </div>
                          <div className="p-4 text-[16px] md:text-[32px]">
                            More than 20 years of experience running intl
                            projects for UN, USAID…
                          </div>
                        </div>
                        <div className="flex w-[80%] flex-col">
                          <img src="https://www.dropbox.com/scl/fi/nr2rs0h978e0pokwp40rb/stevo.jpeg?rlkey=fk25uw8hzana63q4ldstx4gmf&raw=1"></img>
                          <div className="text-center text-[20px] md:text-[32px]">
                            Stevo, fullstack dev
                          </div>
                          <div className="p-4 text-[16px] md:text-[32px]">
                            More than 25 years of experience working with
                            different tech
                          </div>
                        </div>
                        <div className="flex w-[80%] flex-col align-middle">
                          <img src="https://www.dropbox.com/scl/fi/trl9vr1yocnfaoezp54ju/ognjen.jpeg?rlkey=91gk664uvlccjrx0k8xuh1kzp&raw=1"></img>
                          <div className="text-center text-[20px] md:text-[32px]">
                            Ognjen, sales, marketing
                          </div>
                          <div className="p-4 text-[16px] md:text-[32px]">
                            Creative, innovator, more than 30 projects for NGOs,
                            UN and EU institutions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div id="thankyou">
            <div className="flex flex-col justify-center bg-pitch object-fill align-middle md:min-h-[564px] xl:w-[1280px]">
              <div className={saira.className}>
                <div className="md:ml-76 ml-4 text-center text-[48px] md:text-[96px]">
                  THANK YOU
                </div>
                <br />
                <br />
                <div className="md:ml-76 ml-4 text-center text-[24px] md:text-[64px]">
                  QUESTIONS PLEASE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {posts.length > 1 && (
        <div className="mx-5 mb-20 max-w-screen-xl lg:mx-24 2xl:mx-auto">
          <h2 className="mb-10 font-title text-4xl dark:text-white md:text-5xl">
            More stories
          </h2>
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.slice(1).map((metadata: any, index: number) => (
              <BlogCard key={index} data={metadata} />
            ))}
          </div>
        </div>
      )} */}
    </>
  );
}
