"use client";

import { senderEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { SubmitBtn } from "./submit-btn";
import toast from "react-hot-toast";

export const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h2 className=" text-3xl font-medium capitalize mb-8">Contact Me</h2>
      <p className=" text-gray-700 -mt-6 dark: text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kunalp2308@gmail.com">
          kunalp2308@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await senderEmail(formData);
          if (error) {
            toast.error(error);
            return;
          } else {
            toast.success("Email sent successfully!");
          }
        }}
      >
        <input
          name="senderEmail"
          placeholder="Your Email"
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className=" h-52 my-3 rounded-lg p-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
