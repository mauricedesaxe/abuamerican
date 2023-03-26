import { SVGProps } from "react";

export const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

export const links = {
  discord: "https://discord.gg/HEYHakJTXG",
  twitter: "https://twitter.com/Abuamerican",
  youtube: "https://www.youtube.com/user/Noneyabusinesschief",
  vettingGuide: "https://gumroad.com/a/320271475/hcDvJ",
  polyHousehold: "https://gumroad.com/a/320271475/mQTkh",
  madMonkey: "https://gumroad.com/a/320271475/Mpkps",
  menCommunity: "https://gumroad.com/a/320271475/XkBvB",
  thirtyMinuteConsultation: "https://gumroad.com/a/320271475/gwsgp",
  oneHourConsultation: "https://gumroad.com/a/320271475/jhzzwa",
};

export const navigation = {
  pages: [
    { name: "Products", href: "#products" },
    {
      name: "YouTube",
      href: links.youtube,
    },
    {
      name: "Discord",
      href: links.discord,
    },
    {
      name: "Men's Community",
      href: links.menCommunity,
    },
  ],
};

export const products = [
  {
    name: "Guide to Vetting Women",
    href: links.vettingGuide,
    imageSrc: "/vetting-guide.webp",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "The Polygynous Household",
    href: links.polyHousehold,
    imageSrc: "/poly-household.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "The Mad Monkey",
    href: links.madMonkey,
    imageSrc: "/mad-monkey.webp",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    href: links.twitter,
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: links.youtube,
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 896 628" fill="currentColor" {...props}>
        <path d="M877.3 98.1C872.199 79.1038 862.199 61.7805 848.3 47.8636C834.4 33.9467 817.09 23.9245 798.1 18.8C728.2 3.8147e-06 448 0 448 0C448 0 167.8 -3.8147e-06 97.9 18.7C78.902 23.8079 61.5825 33.8245 47.6806 47.744C33.7787 61.6634 23.7839 78.9956 18.7 98C-3.8147e-06 168 0 314 0 314C0 314 -3.8147e-06 460 18.7 529.9C29 568.5 59.4 598.9 97.9 609.2C167.8 628 448 628 448 628C448 628 728.2 628 798.1 609.2C836.7 598.9 867 568.5 877.3 529.9C896 460 896 314 896 314C896 314 896 168 877.3 98.1ZM359 448V180L591 313L359 448Z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: links.discord,
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.14 96.36"
        {...props}
        fill="currentColor"
      >
        <g>
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
        </g>
      </svg>
    ),
  },
];
