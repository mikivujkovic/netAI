import Link from "next/link";
import Image from "next/image";

import { content } from "../../app/content";

import Heading from "../../components/landing/Heading";
import Hero from "../../components/landing/Hero";
import Problem from "../../components/landing/Problem";
import Benefits from "../../components/landing/Benefits";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

import { notFound } from "next/navigation";

import { getSiteData } from "@/lib/fetchers";

import { Roboto, Saira_Condensed } from "next/font/google";
import { Key } from "react";

const saira = Saira_Condensed({ weight: ["400", "800"], subsets: ["latin"] });

interface Component {
  type: string;
  props: any;
  design: any;
  name: string;
}

export default async function SiteHomePage({
  params,
}: {
  params: { domain: string };
}) {
  const domain = decodeURIComponent(params.domain);
  const [data] = await Promise.all([getSiteData(domain)]);

  if (!data) {
    notFound();
  }

  return (
    <>
      <div className="w-full">
        {data.content && JSON.parse(data.content).components.map((component: { type: string; props: any; }, index: Key | null | undefined) => {
          return (
            <ComponentHandler
              key={index}
              type={component.type}
              props={component.props}
              design={content.design}
              name={content.name}
            />
          );
        })}
      </div>
    </>
  );
}

const ComponentHandler = ({ type, props, design, name }: Component) => {
  switch (type) {
    case "Heading":
      return <Heading type={type} props={props} design={design} name={name} />;
      break;
    case "Hero":
      return <Hero type={type} props={props} design={design} name={name} />;
      break;
    case "Problem":
      return <Problem type={type} props={props} design={design} name={name} />;
      break;
    case "Benefits":
      return <Benefits type={type} props={props} design={design} name={name} />;
      break;
    case "CTA":
      return <CTA type={type} props={props} design={design} name={name} />;
      break;
    case "Footer":
      return <Footer type={type} props={props} design={design} name={name} />;
      break;
    default:
      return <div>Default</div>;
  }
};
