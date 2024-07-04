export const content = {
    name: "netAI",
    design: {
      colors: {
        background: "#f2f4f4",
        primary: "#3b82f6",
        secondary: "#c026d3",
        accent: "#1d4ed8",
      },
      shadows: {
        intensity: "lg",
      },
      fonts: {
        heading: "Roboto",
        body: "Saira Condensed",
      },
    },
    components: [
      {
        type: "Heading",
        props: {
          variant: 1,
          links: [
            {
              href: "#solution",
              text: "Our Approach",
            },
            {
              href: "#features",
              text: "Features",
            },
            {
              href: "#contact",
              text: "Contact Us",
            },
          ],
        },
      },
      {
        type: "Hero",
        props: {
          variant: 1,
          headline: "The future of web development",
          description:
            "netAI is a tool that allows you to generate landing pages in seconds. It's the fastest way to create a landing page",
        },
      },
      {
        type: "Problem",
        props: {
          variant: 1,
          problem: "Problem statetment",
          agitate: "Agitate statetment",
          solve: "Solve statetment",
        },
      },
      {
        type: "Benefits",
        props: {
          variant: 1,
          title: "Fast and Easy",
          description: "Takes just a few seconds to generate a custom landing page",
          benefits: [
            {
              title: "Fast",
              description:
                "Takes just a few seconds to generate a custom landing page",
              icon: "ArrowRight",
            },
            {
              title: "Fast",
              description:
                "Takes just a few seconds to generate a custom landing page",
              icon: "ArrowRight",
            },
            {
              title: "Fast",
              description:
                "Takes just a few seconds to generate a custom landing page",
              icon: "ArrowRight",
            },
            {
              title: "Fast",
              description:
                "Takes just a few seconds to generate a custom landing page",
              icon: "ArrowRight",
            },
            {
              title: "Fast",
              description:
                "Takes just a few seconds to generate a custom landing page",
              icon: "ArrowRight",
            },
            {
              title: "Fast",
              description:
                "Takes just a few seconds to generate a custom landing page",
              icon: "ArrowRight",
            },
          ],
        },
      },
      {
        type: "CTA",
        props: {
          variant: 1,
          title: "We are here to help",
          description: "Generate your landing page in seconds",
          button: "Contact Us",
          link: "https://netai.me",
        },
      },
      {
        type: "Footer",
        props: {
          variant: 1,
          text: "netAI",
        },
      },
    ],
  };