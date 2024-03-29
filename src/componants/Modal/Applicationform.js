import Form from "./Form";
import Form1 from "./Form1";
import Container from "../container";
import Image from "next/image";
import { motion } from "framer-motion";
import { myContextform } from "../../../Context/Contextform";
import {
  CurrencyPoundIcon,
  LocationMarkerIcon,
  CollectionIcon,
} from "@heroicons/react/solid";

export default function Applicationform({ props }) {
  const { form } = myContextform();
  console.log(form);

  return (
    <>
      <Container className="">
        <motion.div
          className=" py-8 md:py-16bg-black bg-opacity-10 rounded-xl w-full  flex justify-center text-white"
          initial="pageInitial"
          exit={{ opacity: 0 }}
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <div className="px-10 mx-auto max-w-7xl md:px-16   ">
            <div className="max-w-3xl  ">
              <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
              <p className="text-xs font-bold text-blue-500 uppercase"></p>
              <h2 className="mt-1 text-2xl font-bold text-left text-white lg:text-3xl md:mt-2">
                {form === "Form1" ? "Hire" : "Apply"} - {props[0]}
              </h2>

              <div className="py-8 md:flex sm:block  ">
                <div className="flex ">
                  <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                    <CollectionIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                    <div>{props[1]} </div>
                  </div>
                </div>

                <div className="flex ">
                  <div className="flex rounded-full px-3 py-1.5   bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                    <LocationMarkerIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                      aria-hidden="true"
                    />

                    <h6 className=""> {props[2]}</h6>
                  </div>
                </div>

                <div className="flex ">
                  <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10 text-gray-100 mb-4">
                    <CurrencyPoundIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-100"
                      aria-hidden="true"
                    />
                    {props[3]}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              {form === "Form1" ? <Form1 /> : <Form />}
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
