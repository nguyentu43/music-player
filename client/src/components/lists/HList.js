import { Flex } from "@chakra-ui/react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function HList({children, ...props}){
    return (
        <Flex as={ScrollContainer} flexWrap="nowrap" {...props} mx={-2}>
            {children}
        </Flex>
    );
}