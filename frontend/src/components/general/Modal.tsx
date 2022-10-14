import React, { ReactNode, Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

export type ModalProps = {
  handleVisibility: () => void;
  showModal: boolean;
  children?: ReactNode;
  showToastCallback: (
    text: string,
    type: 'success' | 'warning' | 'error' | 'info'
  ) => void;
};

export default function Modal({
  handleVisibility,
  showModal,
  children,
}: ModalProps) {
  // -----------------------STATES --------------------------------

  // -----------------------FUNCTIONS -------------------------------

  // -----------------------SIDE EFFECTS --------------------------------

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          onClose={() => handleVisibility()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-auto">
            <div className="flex  w-full h-full  items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {children}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
