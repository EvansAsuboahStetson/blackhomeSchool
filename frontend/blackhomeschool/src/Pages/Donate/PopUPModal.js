
import {
useDisclosure,
Button,
Modal,ModalOverlay,
ModalHeader,
ModalContent,
ModalCloseButton,
ModalBody,
ModalFooter,
Text
  } from "@chakra-ui/react";


export default function VerticallyCenter(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {text,title} = props
  
    return (
      <>
        <Button className="text" onClick={onOpen}>Read More</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader className="text">{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <Text className="text">{text}</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }