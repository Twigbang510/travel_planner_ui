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

const ExportResultModal = ({
  visible,
  onClose,
  exportData,
}: {
  visible: boolean;
  onClose: () => void;
  exportData: {
    speadTitle: string;
    spreadsheetId: string;
    spreadsheetUrl: string;
  };
}) => {
  return (
    <Modal isOpen={visible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{exportData.speadTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="600">Sheet URL:</Text>
          <Text color="blue.500">{exportData.spreadsheetUrl}</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            background="#ffdf80"
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

export default ExportResultModal;
