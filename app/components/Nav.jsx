import React from "react";
import First from "@/app/components/First";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function Nav() {
  return (
    <header className="w-full sticky top-0 z-50">
      <First />
      <nav className="bg-[#ffebeb] shadow-md py-3 px-6 sm:px-10 flex items-center justify-center">
        {/* Flex container for three sections */}
        <div className="flex items-center justify-between w-full max-w-7xl">
          {/* Left: Logo (moved inward) */}
          <div className="flex items-center ml-4">
            <Link href="/" className="flex items-center">
              <PlatinumRxLogo />
              <span className="font-bold text-lg sm:text-xl text-gray-800">
                PlatinumRx
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8">

            <Link href="/how-to-order-medicine" className="transition md:block hidden">
              How to order medicine
            </Link>

            <Link href="/contact-us" className="transition md:block hidden">
              Contact us
            </Link>

            <Link href="/login" className="transition md:block hidden">
              Login
            </Link>

            <div className="flex items-center gap-4 mr-4">
              <button className="relative bg-white p-2 rounded-full shadow hover:shadow-md transition">
                <FaCartShopping className="text-xl text-[#fc5a5a]" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// --- Logo SVG ---
function PlatinumRxLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <g clipPath="url(#clip0_1455_1616)">
        <path
          d="M9.97551 31.2849H8.44265C3.78712 31.2849 -0.00468445 27.4994 -0.00468445 22.8411V22.7367C-0.00468445 18.0831 3.78238 14.2929 8.44265 14.2929H9.45823C10.1701 14.2929 10.7491 14.8716 10.7491 15.5832C10.7491 16.2947 10.1701 16.8735 9.45823 16.8735H8.44265C5.21083 16.8735 2.58172 19.5015 2.58172 22.732V22.8363C2.58172 26.0668 5.21083 28.6949 8.44265 28.6949H9.97551C10.6874 28.6949 11.2663 29.2736 11.2663 29.9851C11.2663 30.6967 10.6874 31.2754 9.97551 31.2754"
          fill="#F44D4D"
        />
        <path
          d="M23.6572 16.883H15.6038C14.892 16.883 14.313 16.3042 14.313 15.5927C14.313 14.8811 14.892 14.3024 15.6038 14.3024H23.6572C26.8891 14.3024 29.5182 11.6743 29.5182 8.44385C29.5182 5.21336 26.8891 2.58534 23.6572 2.58534H22.6512C19.4193 2.58534 16.7902 5.21336 16.7902 8.44385V10.5975C16.7902 11.3091 16.2113 11.8878 15.4994 11.8878C14.7876 11.8878 14.2086 11.3091 14.2086 10.5975V8.44385C14.2038 3.7855 17.9909 0 22.6512 0H23.6572C28.3128 0 32.1046 3.7855 32.1046 8.43911C32.1046 13.0927 28.3175 16.883 23.6572 16.883Z"
          fill="#F44D4D"
        />
        <path
          d="M37.5528 31.3376H36.447C35.7352 31.3376 35.1562 30.7589 35.1562 30.0473C35.1562 29.3357 35.7352 28.757 36.447 28.757H37.5528C40.7846 28.757 43.4137 26.129 43.4137 22.8985V22.7941C43.4137 19.5637 40.7846 16.9356 37.5528 16.9356H36.0342C35.3223 16.9356 34.7433 16.3569 34.7433 15.6453C34.7433 14.9338 35.3223 14.355 36.0342 14.355H37.5528C42.2083 14.355 46.0001 18.1405 46.0001 22.7989V22.9032C46.0001 27.5568 42.2131 31.3471 37.5528 31.3471"
          fill="#EA855E"
        />
        <path
          d="M23.4675 46H22.4851C17.8296 46 14.0378 42.2145 14.0378 37.5561C14.0378 32.8978 17.8248 29.117 22.4851 29.117H30.9752C31.687 29.117 32.266 29.6958 32.266 30.4073C32.266 31.1189 31.687 31.6976 30.9752 31.6976H22.4851C19.2533 31.6976 16.6242 34.3257 16.6242 37.5561C16.6242 40.7866 19.2533 43.4147 22.4851 43.4147H23.4675C26.6993 43.4147 29.3284 40.7866 29.3284 37.5561V35.4025C29.3284 34.6909 29.9074 34.1122 30.6192 34.1122C31.3311 34.1122 31.9101 34.6909 31.9101 35.4025V37.5561C31.9101 42.2098 28.123 46 23.4627 46"
          fill="#EA855E"
        />
      </g>
      <defs>
        <clipPath id="clip0_1455_1616">
          <rect width="46" height="46" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
