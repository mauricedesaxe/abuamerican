import { FormEvent, useState } from "react";
import { FormBtn } from "./Buttons";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("email", email);
  };

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={(e) => handleSubmit(e)} method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <p className="mt-3 text-xl text-black mb-4">
              Signup to my newsletter for regular updates and exclusive content.
            </p>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <FormBtn cta="Sign up" />
          </div>
        </div>
      </form>
    </div>
  );
};
