import { Button, Modal } from "flowbite-react";
import { FileDescriptionIcon } from "../icons/FileDescriptionIcon";

export const TupaDescripModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      size={"2xl"}      
    >
      <Modal.Header className ="bg-bg_primary border-bg_primary-300">
        <div className="flex">
          <FileDescriptionIcon className="w-6 h-6 " />
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Modificar descripción del procedimiento administrativo
          </h3>
        </div>
      </Modal.Header>
      <Modal.Body className ="bg-bg_primary">
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className ="bg-bg_primary border-bg_primary-300">
        <Button onClick={() => setOpenModal(false)}>I accept</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
