import { Box, Divider, Heading, HStack, Icon, IconButton, Spacer, Text, VStack } from "@chakra-ui/react";
import { RiMusic2Line, RiFocusLine, RiCloseLine, RiPlayLine } from 'react-icons/ri';
import { useAppContext, actions } from "../../context";
import icons from '../configs/icons';

export default function Playing(props){

    const [{ items, current }, dispatch] = useAppContext();

    function handleClick(v){
        dispatch(actions.setCurrent(v));
    }

    function handleRemove(_, index){

        let isEnd = false;
        if(current && items.length - 1 === index )
            isEnd = true;

        const [deleted] = items.splice(index, 1);
        dispatch(actions.setItems(items));

        if(items.length === 0){
            dispatch(actions.setCurrent(null));
            return;
        }

        if(current && current.id === deleted.id){
            if(isEnd){
                dispatch(actions.setCurrent(items[items.length - 1]));
            }
            else{
                dispatch(actions.setCurrent(items[index]));
            }
        }
    }

    return (
        <Box p={3} bg="teal.600" overflowY="auto" borderRadius="lg" h="250px" flex={2} {...props}>
        <HStack>
            <Icon as={icons.PLAYLIST} w={8} h={8} />
            <Heading as='h3' size="md">
                Playlist
            </Heading>
        </HStack>
        <Divider my={3}/>
        <VStack align="stretch" spacing={1}>
            {
                items.map((item, index) => {
                    let style = {};
                    if(item.id === current?.id){
                        style = { bg: 'teal.100', borderRadius: 'lg', textColor: 'black' }
                    }
                    return (<HStack key={item.id} p={1} sx={style}>
                        <Icon as={item.id === current?.id ? RiMusic2Line : RiFocusLine} w="6" h="6" />
                        <Text fontSize="sm">{item.name}</Text>
                        <Spacer />
                        {item.id !== current?.id && <IconButton size="sm" onClick={() => handleClick(item)} color="black" icon={<Icon as={RiPlayLine} />}/>}
                        <IconButton size="sm" onClick={() => handleRemove(item, index)} color="black" icon={<Icon as={RiCloseLine} />}/>
                    </HStack>);
                })
            }
            {items.length === 0 && <Text>No data</Text>}
        </VStack>
    </Box>
    );
}