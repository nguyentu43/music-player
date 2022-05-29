import { Box, Icon, Tag, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Item({icon, path = '', text, ...props}){
    return (
        <Box 
        as={Link} to={path}
        m={2} borderRadius="lg"
        bgGradient='linear(to-r, teal.200, teal.600)'
        transition="all 0.2s"
        _hover={{ transform: 'scale(1.05)'}}
        minW="200px" p={3} {...props}>
            <Icon as={icon} w={5} h={5}/>
            <Text textAlign='center' mt={-3} fontSize="xl" noOfLines={2}>{text}</Text>
        </Box>
    );
}