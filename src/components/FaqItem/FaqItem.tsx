"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

interface FaqItemProps {
  question: string;
  answer?: string;
}

const FaqItem = ({ faq }: { faq: FaqItemProps }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col">
      <button
        className="px-2 py-1 flex justify-between items-center gap-2 font-bold rounded-md hover:bg-gray-800"
        onClick={() => setShow(!show)}
      >
        <span>{faq.question}</span>
        <span>
          {show ? (
            <FaMinus className="w-4 h-4" />
          ) : (
            <FaPlus className="w-4 h-4" />
          )}
        </span>
      </button>
      {show && (
        <p className="w-2xl lg:w-3xl pl-6 pr-2 text-sm">{faq.answer ? faq.answer : ""}</p>
      )}
    </div>
  );
};

export default FaqItem;
