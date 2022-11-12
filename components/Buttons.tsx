import Link from "next/link";
import { classNames } from "../utils/functions";

export const FormBtn = ({
  cta,
  isDisabled = false,
}: {
  cta: string;
  isDisabled?: boolean;
}) => {
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className="inline-block bg-blue-500 border border-transparent rounded-md py-2 px-4 text-base font-medium text-gray-50 transition-colors hover:opacity-90
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed"
    >
      {cta}
    </button>
  );
};

export const LinkBtn = ({ link, cta }: { link: string; cta: string }) => {
  return (
    <Link href={link}>
      <a className="mt-8 inline-block bg-blue-500 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-50 transition-colors hover:opacity-90">
        {cta}
      </a>
    </Link>
  );
};

export const DoubleLinkBtn = ({
  link1,
  cta1,
  link2,
  cta2,
  accent = "right",
}: {
  link1: string;
  cta1: string;
  link2: string;
  cta2: string;
  accent?: "left" | "right";
}) => {
  const plainStyle = "border-gray-300 bg-white text-gray-700 hover:bg-gray-50";
  const accentStyle =
    "border-gray-300 bg-blue-500 text-gray-50 hover:opacity-90";

  return (
    <span className="mt-8 isolate inline-flex rounded-md shadow-sm">
      <Link href={link1}>
        <a
          className={classNames(
            "relative inline-flex items-center rounded-l-md border px-4 py-2 text-sm font-medium focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
            accent == "left" ? accentStyle : plainStyle
          )}
        >
          {cta1}
        </a>
      </Link>
      <Link href={link2}>
        <a
          className={classNames(
            "relative -ml-px inline-flex items-center rounded-r-md border px-4 py-2 text-sm font-medium focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
            accent == "right" ? accentStyle : plainStyle
          )}
        >
          {cta2}
        </a>
      </Link>
    </span>
  );
};
