import { Image, VStack } from "@chakra-ui/react";

export default function TopMenu(){
    return (<VStack mt={3} display={['none', 'flex']}>
        <Image
            borderRadius='full'
            boxSize={{sm: '80px', md: '120px', lg: '150'}}
            src='https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870'
            alt='Dan Abramov'
            />
    </VStack>);
}