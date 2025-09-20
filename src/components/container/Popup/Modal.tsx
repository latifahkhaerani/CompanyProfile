import React from "react";

type ModalProps = {
  type: "success" | "error";
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ type, isOpen, onClose }) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white dark:bg-[#0A0D12] p-6 rounded-xl shadow-xl text-center max-w-md w-full">
        <img
          src={isSuccess ? "/success.png" : "/failed.png"}
          alt={isSuccess ? "success" : "error"}
          className="mx-auto w-57 h-auto mb-4"
        />
        <h4 className="text-lg font-semibold text-[#0A0D12] dark:text-[#FDFDFD] mb-2">
          {isSuccess ? "Message Received!" : "Oops! Something went wrong."}
        </h4>
        <p className="text-sm text-[#717680] mb-4">
          {isSuccess
            ? "Thanks for reaching out — we’ll get back to you soon."
            : "We couldn’t send your message. Please try again or check your connection."}
        </p>
        <button
          onClick={onClose}
          className="bg-[#FF623E] text-white font-bold py-2 px-4 rounded-full w-full shadow-[inset_4px_4px_6px_rgba(255,255,255,0.6)] hover:shadow-none"
        >
          {isSuccess ? "Back to Home" : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
