import { Button, Modal } from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";

export const PopoverYesAndNo = ({openModal, setOpenModal, msg, setConfirmYes}) => {

    const onClickYes = () => {
        setConfirmYes(true);
        setOpenModal(false);
    }

    return (
      <>        
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header className="bg-bg_primary" />
          <Modal.Body className="bg-bg_primary">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 " />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {msg}
              </h3>
              <div className="flex justify-center gap-4">
                
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No
                </Button>
                <Button color="failure" onClick={onClickYes}>
                  Si
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}
