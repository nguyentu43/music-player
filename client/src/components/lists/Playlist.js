import { Flex, HStack, Icon, IconButton, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import { RiPlayLine, RiAddLine } from 'react-icons/ri';
import Card from "./Card";
import icons from '../configs/icons';
import { useAppContext, actions } from "../../context";
import lodash from 'lodash';
import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function Playlist({playlist, ...props}){

    const [{items}, dispatch] = useAppContext();

    const songs = useMemo(() => playlist.songs.map(i => i.song),[]);

    function handleAppend(){
        const uniqItems = lodash.unionBy(items.concat(songs), 'id');
        dispatch(actions.setItems(uniqItems));
    }
    
    function handleOpen(){
        if(songs.length > 0);
        dispatch(actions.setItems(songs));
        dispatch(actions.setCurrent(songs[0]));
    }

    return (
        <Card text={playlist.name} icon={icons.PLAYLIST} {...props}>
            <HStack mt={2}>
                <IconButton onClick={handleOpen} icon={<Icon as={RiPlayLine} w="5" h="5" />} size="sm" colorScheme="teal" />
                <IconButton onClick={handleAppend} icon={<Icon as={RiAddLine} w="5" h="5" />} size="sm" colorScheme="teal" />
            </HStack>
            <Flex mt={2} flexWrap='wrap'>
                {playlist.tags.map(({tag}) => (
                    <Tag as={Link} to={`/main?keyword=tags::${tag.name}`} mr={1} mb={1} key={tag.id} colorScheme='teal'>
                        <TagLabel>{tag.name}</TagLabel>
                        <TagRightIcon as={icons.TAG} />
                    </Tag>
                ))}
            </Flex>
        </Card>
    );
}