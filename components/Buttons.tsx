import Link from "next/link";

export const FormBtn = ({ cta }: { cta: string }) => {
  return (
    <button
      type="submit"
      className="inline-block bg-blue-500 border border-transparent rounded-md py-2 px-4 text-base font-medium text-gray-50 transition-colors hover:opacity-90"
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
