import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { urlToSegments } from '../../helpers/url';
import { RiHomeLine, RiPlayList2Line } from 'react-icons/ri';

export default function Menu(){
    const items = [
        {name: 'Main', icon: RiHomeLine},
        {name: 'Playlist', icon: RiPlayList2Line},
    ];
    const [current, setCurrent] = useState(items[0].name.toLowerCase());
    const after = {
        content: '""',
        backgroundColor: "#b2f5ea",
        overflow: 'hidden',
        position: 'absolute',
        height: '100vh',
        width: '20px',
        right: '-10px',
        top: '48px',
        borderRadius: '10px'
    };
    const before = {
        content: '""',
        backgroundColor: "#b2f5ea",
        overflow: 'hidden',
        position: 'absolute',
        height: '100vh',
        width: '20px',
        right: '-10px',
        bottom: '48px',
        borderRadius: '10px'
    };

    const location = useLocation();

    useEffect(()=>{
        const segments = urlToSegments(location.pathname);
        if(segments.length === 0){
            setCurrent(items[0].name.toLowerCase());
            return;
        }
        setCurrent(segments[0]);
    }, [location]);

    return (
        <VStack align="stretch" paddingLeft={3} paddingTop={3}>
            {items.map(({name, icon}) => {
                if(name.toLowerCase() === current){
                    return (
                        <Flex 
                            bgColor="teal.800" 
                            borderLeftRadius="10px" 
                            pos="relative" 
                            _after={after} 
                            _before={before}
                            textColor="white"
                            key={name}
                            align="center"
                            p={3}>
                            <Icon mr={1} as={icon} w={6} h={6} />
                            <Text display={['none', 'block']}>{name}</Text>
                        </Flex>);
                }
                return <Flex 
                        p={3} key={name} 
                        as={Link}
                        align="center"
                        to={name.toLowerCase()} 
                        >
                            <Icon mr={1} as={icon} w={6} h={6} />
                            <Text display={['none', 'block']}>{name}</Text>
                        </Flex>;
            })}
        </VStack>
    );
}