import { Box, Flex } from "@chakra-ui/react";
import MusicPlayer from "./components/controls/MusicPlayer";
import CustomRoutes from "./components/layouts/CustomRoutes";
import Menu from "./components/menu/Menu";
import TopMenu from "./components/menu/TopMenu";


export default function App(){

    let style = {
        pos: 'absolute',
        bottom: 2,
        right: 4,
        w: ['auto', '400px'],
        maxH: '80vh',
        overflow: 'scroll',
        zIndex: 99
    }

    return <Flex h="100vh" overflow="hidden" pos='relative'>
        <Box bgColor="teal.100" w={['20%']}>
            <TopMenu />
            <Menu/>
        </Box>
        <Box bgColor="teal.800" w={['80%']} p={3} paddingLeft={6} textColor='white' overflowY="auto">
            <CustomRoutes />
            <MusicPlayer sx={style}/>
        </Box>
    </Flex>
}