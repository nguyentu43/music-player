import { Box, Icon, Image, Text } from "@chakra-ui/react";

export default function Card({icon, image, text, ...props}){
    return (
        <Box 
        borderRadius="lg"
        bgGradient='linear(to-r, teal.300, teal.500)'
        transition="all 0.2s"
        _hover={{ transform: 'scale(1.05)'}}
        p={3} {...props}>
            
            {image ? <Image borderRadius="lg" h="70px" src={image} />:
                <Icon as={icon} w="20" h="20"/>}
            <Text my={2} fontSize="lg" noOfLines={3}>{text}</Text>
            {props.children}
        </Box>
    );
}