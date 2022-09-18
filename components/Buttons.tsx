import Link from "next/link";

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
