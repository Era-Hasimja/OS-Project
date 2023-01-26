import { Google } from "@components/Browser/Google";
import { Gallery } from "@components/Gallery/Gallery";
import { News } from "@components/News/News";
import { Icon } from "@components/shared/Icon/Icon";
import { IconDefinition } from "@components/shared/Icon/Icon.generated";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";

interface Props {
  title: string;
  icon: IconDefinition;
}

export default function WindowModal(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openedModal, setOpenedModal] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    console.log("open", props.title);
    setIsOpen(true);
    setOpenedModal;
  }
  const ModalsHashMap = {
    Browser: <Google />,
    News: <News />,
    Gallery: <Gallery />,
  };

  return (
    <>
      <div className="flex mt-5 ml-4 space-x-5 justify-center items-center">
        <div className="w-20 h-20 shadow-md flex justify-center items-center select-none bg-[#D9D9D9] rounded-full mb-3">
          {
            <Icon
              className="w-9 mx-2"
              icon={props.icon}
              onClick={() => openModal()}
            />
          }
        </div>
        {/* <p>{props.title}</p> */}
      </div>
      {console.log(isOpen)}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {ModalsHashMap[props.title]}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
