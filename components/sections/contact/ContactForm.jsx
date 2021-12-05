import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").trim(),
  email: Yup.string()
    .required("Email is required")
    .email("Email is not valid")
    .trim(),
  message: Yup.string()
    .required("Message is required")
    .max(2000, "Message cannot exceed 2000 characters")
    .trim(),
});

const variants = {
  hover: {
    backgroundColor: "#1E3A8A",
  },
  tap: {
    y: "2px",
    backgroundColor: "#3B82F6",
  },
};

const errorIcon = (
  <svg
    class="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    ></path>
  </svg>
);

const loadIcon = (
  <svg
    class="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    ></path>
  </svg>
);

const ContactForm = () => {
  const form = useRef();
  return (
    <div className="pb-32 bg-contact-background w-full pt-14 md:pt-24">
      <h2 className="pb-12 lg:pb-20 text-center">
        <span className="pb-2 border-b-4 border-blue-500">Le</span>t's Get To
        Work
      </h2>

      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            emailjs
              .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
              )
              .then(
                (result) => {
                  Swal.fire({
                    icon: "success",
                    title: "Thank you!",
                    text: "I will be in touch real soon.",
                    confirmButtonColor: "#3b82f6",
                    confirmButtonText: "OK",
                  });
                  resetForm();
                  setSubmitting(false);
                },
                (error) => {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Sorry, something went wrong! Please try sending the email again.",
                  });
                }
              );
          }}
        >
          {(props) => (
            <Form ref={form}>
              <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center mx-5 font-gilroy w-full md:w-2/3 lg:w-1/3 px-3 py-10 lg:p-10 rounded-xl shadow-xl bg-white">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold pb-1 tracking-wide"
                    >
                      Name<span className="text-pink-600">*</span>
                    </label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className={`text-input ${
                        props.touched.name && props.errors.name
                          ? "mb-2"
                          : "mb-6"
                      }`}
                    />

                    {props.touched.name && props.errors.name ? (
                      <p className="form-error">
                        <span className="mr-1">{errorIcon}</span>{" "}
                        {props.errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold pb-1 tracking-wide"
                    >
                      Email<span className="text-pink-600">*</span>
                    </label>
                    <Field
                      id="email"
                      name="email"
                      placeholder="Your email"
                      className={`text-input ${
                        props.touched.email && props.errors.email
                          ? "mb-2"
                          : "mb-6"
                      }`}
                    />

                    {props.touched.email && props.errors.email ? (
                      <p className="form-error">
                        <span className="mr-1">{errorIcon}</span>{" "}
                        {props.errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold pb-1 tracking-wide"
                    >
                      Message<span className="text-pink-600">*</span>
                    </label>
                    <Field
                      id="message"
                      name="message"
                      placeholder="Explain your requirement in detail"
                      as="textarea"
                      className={`border-2 p-2 w-80 md:w-112 h-36 rounded-md border-blue-500 placeholder-blue-400 focus-within:border-0 ${
                        props.touched.message && props.errors.message
                          ? "mb-2"
                          : "mb-6"
                      }`}
                    />

                    {props.touched.message && props.errors.message ? (
                      <p className="form-error">
                        <span className="mr-1">{errorIcon}</span>{" "}
                        {props.errors.message}
                      </p>
                    ) : null}
                  </div>
                  <motion.button
                    variants={variants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    className="my-4 w-80 md:w-112 bg-blue-500 text-white py-3 rounded-md font-gilroyBold text-xl tracking-wider"
                  >
                    {props.isSubmitting ? (
                      <span className="flex justify-center animate-spin">
                        {loadIcon}
                      </span>
                    ) : (
                      "GET IN TOUCH"
                    )}
                  </motion.button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
