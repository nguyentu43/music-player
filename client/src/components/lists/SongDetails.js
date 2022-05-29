import { Button, Icon, Menu, Link, MenuButton, MenuList, Tag, TagLabel, TagRightIcon, MenuItem, IconButton, Flex } from "@chakra-ui/react";
import Card from "./Card";
import icons from '../configs/icons';
import { RiDownloadLine, RiPlayLine } from 'react-icons/ri';
import { useAppContext, actions } from "../../context";
import { Link as RouteLink}  from "react-router-dom";

export default function SongDetails({enablePlayButton = true, song, ...props}){

    const [{items}, dispatch] = useAppContext();

    function handleOpen(){
        if(!items.find(i => i.id === song.id)){
            dispatch(actions.setItems(items.concat(song)));
        }
        dispatch(actions.setCurrent(song));
    }

    return (
        <Card text={song.name} icon={icons.SONG} image={song.cover} {...props}>
            {enablePlayButton && <IconButton mr={1} onClick={handleOpen} icon={<Icon as={RiPlayLine} w="5" h="5" />} size="sm" colorScheme="teal" /> }
            <Menu>
                <MenuButton size="sm" colorScheme="teal" as={Button} rightIcon={<Icon as={RiDownloadLine} />}>
                    Download
                </MenuButton>
                <MenuList minW="170px">
                    {song.files.map(f => (<MenuItem noOfLines={1} textColor='black' key={f.id} as={Link} target='_blank' href={f.url}>{f.filename}</MenuItem>))}
                </MenuList>
            </Menu>
            <Flex mt={3} flexWrap='wrap'>
            {song.tags.map(({tag}) => (
                <Tag as={RouteLink} to={`/main?keyword=tags::${tag.name}`} mr={1} mb={1} key={tag.id} colorScheme='teal'>
                    <TagLabel>{tag.name}</TagLabel>
                    <TagRightIcon as={icons.TAG} />
                </Tag>
            ))}
            {song.attributeValues.map(({value, id}) => (
                <Tag as={RouteLink} to={`/main?keyword=attributes::${value}`} mr={1} mb={1} key={id} colorScheme='teal'>
                    <TagLabel>{value}</TagLabel>
                    <TagRightIcon as={icons.SONG2} />
                </Tag>
            ))}
            </Flex>
        </Card>
    );
}