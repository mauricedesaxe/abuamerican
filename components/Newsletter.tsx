import { FormEvent, useState } from "react";
import { FormBtn } from "./Buttons";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState(
    "Signup to my newsletter for regular updates and exclusive content."
  );
  const [cta, setCta] = useState("Signup");
  const [displayInputs, setDisplayInputs] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const mutation = useMutation(
    () => axios.get(`/api/saveEmail?email=${email}`),
    {
      onMutate: () => {
        setDescription("We are saving your email...");
        setCta("Loading...");
        setIsDisabled(true);
      },
      onSuccess: () => {
        setDescription("Thanks for signing up!");
        setCta("Done");
        setDisplayInputs(false);
        setIsDisabled(true);
      },
      onError: () => {
        setDescription("Something went wrong. Please try again.");
        setCta("Try again");
        setIsDisabled(false);
      },
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={(e) => handleSubmit(e)} method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <p className="mt-3 text-xl text-black mb-4">{description}</p>
            {displayInputs ? (
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
            ) : (
              ""
            )}
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <FormBtn cta={cta} isDisabled={isDisabled} />
          </div>
        </div>
      </form>
    </div>
  );
};
