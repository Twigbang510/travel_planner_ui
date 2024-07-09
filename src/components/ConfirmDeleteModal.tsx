import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ConfirmDeleteModal = ({
  visible,
  onClose,
  onConfirm,
}: {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <Modal isOpen={visible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Are you sure want to delete?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>This action cannot be undone...</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            background="#ffdf80"
            color="black"
            borderRadius={30}
            mr={3}
            onClick={onConfirm}
          >
            Confirm
          </Button>
          <Button
            border="1px solid black"
            color="black"
            borderRadius={30}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteModal;
