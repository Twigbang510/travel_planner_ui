import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

const AppLoading = ({ visible }: { visible: boolean }) => {
  return (
    <Modal isOpen={visible} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent background="transparent" boxShadow="none">
        <ModalBody display="flex" justifyContent="center" alignItems="center">
          <Image
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm13dGVubGo3b25rcjRpajFtdWVwNjRjOGY1ZWp1cW54NDI0Mm5vcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1KVcrdl7rJpFnY2s/giphy.webp"
            alt="Loading..."
            borderRadius="50%"
            width="200px"
            height="200px"
            objectFit="cover"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AppLoading;
