import Link from "next/link";

const Footer = () => {
  return (
    <section class="bg-royal">
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center -mx-5 -my-2">
          <ul className="flex flex-row justify-start space-between  pb-3 -ml-4 -mr-4 text-sm overflow-hidden">
            <li className=" px-2 text-gray-600">
              <Link href="/privacy-policy" passHref>
                Policy
              </Link>
            </li>
            <li className=" px-2 text-gray-600">
              <Link href="/terms-and-conditions" passHref>
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div class="flex justify-center mt-8 space-x-6">
          <a href="" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a href="" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Twitter</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          SEO for Hire is regsitered company
        </p>
      </div>
    </section>
  );
};

export default Footer;
