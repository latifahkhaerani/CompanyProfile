import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Modal from "../Popup";

const Services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Software Development",
  "Other",
];

const Form = () => {
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validasi semua field harus terisi
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const checkboxElements = form.querySelectorAll<HTMLInputElement>(
      'input[name="checkbox"]'
    );
    const checkedCheckbox = Array.from(checkboxElements)
      .filter((input) => input.checked)
      .map((input) => input.value);

    if (!name || !email || !message || checkedCheckbox.length === 0) {
      setModalType("error");
    } else {
      setModalType("success");
    }
  };

  return (
    <div className="mx-0.5 md:pb-10 place-items-center">
      <h3 className="md:pt-20 text-center font-bold text-2xl tracking-normal md:text-[40px] md:leading-14 mb-3.5">
        Ready to Start? Let’s Talk.
      </h3>
      <p className="pr-1 pl-1 md:pr-0 md:pl-0 text-center text-sm md:text-lg font-medium leading-7 md:leading-8 text-[#717680] mb-4.5 ">
        Tell us what you need, and we’ll get back to you soon.
      </p>
      <section className="page-wrapper md:w-[720px] md:pr-0 md:pl-0 w-full">
        <form onSubmit={handleSubmit}>
          {/* Input text */}
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name"
          ></Input>
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
          ></Input>
          <div className="mb-5">
            <p className="text-sm font-bold leading-8">Message</p>
            <textarea
              className="w-full h-40 rounded-xl p-4 mt-1 border border-[#DFDFDF] dark:border-[#252B37] resize-none"
              name="message"
              placeholder="Enter your message"
            ></textarea>
            <div className="mb-5">
              <p className="text-sm font-bold leading-8">Services</p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Services Checkbox */}
                {Services.map((service) => (
                  <label className="flex py-3 space-x-3">
                    <input
                      className="w-5 rounded-md"
                      type="checkbox"
                      name="checkbox"
                      value="Web Development"
                    />
                    <span></span>
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <Button className="w-full">Send</Button>
          </div>
        </form>
      </section>{" "}
      {/* render modal */}
      <Modal
        type={modalType === "success" ? "success" : "error"}
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
      ></Modal>
    </div>
  );
};

export default Form;
