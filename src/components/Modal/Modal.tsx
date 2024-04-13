import React from "react";

type ModalProps = {
  modalTitle: string;
  modalDescription?: string;
  buttonName?: string;
};

export const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  function Modal({ modalTitle, modalDescription, buttonName = "Close" }, ref) {
    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <p className="py-4">{modalDescription}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">{buttonName}</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }
);
