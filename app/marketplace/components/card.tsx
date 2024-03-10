import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, CardFooter, Image} from "@nextui-org/react";


const PCard = (data: { key: React.Key | null | undefined; item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; img: string | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; desc: string | undefined; }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
      <>
        {/* <Button onPress={onOpen}>{data.title}</Button> */}
        <Card className=" w-44" shadow="sm" key={data.key} isPressable onPress={onOpen}>
            <CardBody className="overflow-visible p-0">
                <Image
                shadow="sm"
                radius="lg"
                width="100%"
                // alt={data.title}
                className="w-full object-cover h-[140px]"
                src={data.img}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{data.item}</b>
                <p className="text-default-500">{data.price}</p>
            </CardFooter>
        </Card>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{data.item}</ModalHeader>
                <ModalBody>
                    <p>{data.desc}</p>
                  {/*<p> */}
                  {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                  {/*  Nullam pulvinar risus non risus hendrerit venenatis.*/}
                  {/*  Pellentesque sit amet hendrerit risus, sed porttitor quam.*/}
                  {/*</p>*/}
                  {/*<p>*/}
                  {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                  {/*  Nullam pulvinar risus non risus hendrerit venenatis.*/}
                  {/*  Pellentesque sit amet hendrerit risus, sed porttitor quam.*/}
                  {/*</p>*/}
                  {/*<p>*/}
                  {/*  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit*/}
                  {/*  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. */}
                  {/*  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. */}
                  {/*  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur */}
                  {/*  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.*/}
                  {/*</p>*/}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="success" onPress={onClose}>
                    Add to Cart
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
}

export default PCard;

