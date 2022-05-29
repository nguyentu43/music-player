import { SimpleGrid } from "@chakra-ui/react";

export default function VList(props){
    return <SimpleGrid {...props} columns={[1, 2, 3, 4]} columnGap={4} rowGap={4}>
        {props.children}
    </SimpleGrid>
}