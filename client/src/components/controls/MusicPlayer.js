import { Box, IconButton, HStack, Icon, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Spacer, useBoolean, Button, Switch, Tooltip } from "@chakra-ui/react";
import { RiPlayLine, RiPauseLine, RiSkipBackLine, RiSkipForwardLine, RiMusic2Line, RiVolumeDownFill } from 'react-icons/ri';
import icons from '../configs/icons';
import { useState } from "react";
import { useEffect, useRef } from "react";
import { timeToString } from '../../helpers/time';
import { Lrc } from "react-lrc";
import { useAppContext, actions } from "../../context";
import Playlist from "./Playlist";
import SongDetails from "../lists/SongDetails";
import ScrollContainer from "react-indiana-drag-scroll";
import axios from "axios";
import { RiFullscreenExitLine } from 'react-icons/ri';
import lodash from 'lodash';
import Rotate from "../animations/Rotate";

export default function MusicPlayer({...props}){

    const [{items, current}, dispatch] = useAppContext();

    const [isPlay, setPlay] = useBoolean(false);
    const [currentDuration, setCurrentDuration] = useState(0);
    const [currentTime ,setCurrentTime] = useState(0);
    const audioRef = useRef();
    const thumbRef = useRef();
    const fillRef = useRef();
    const fillBufferRef = useRef();
    
    const lrcRef = useRef();
    const [lrcContent, setLrcContent] = useState('');

    const initLrcLine = { content: '🎵🎵🎵' };
    const [currentLrcLine, setLrcLine] = useState(initLrcLine);
    const initVolume = 25;

    const [openPlaylist, setOpenPlaylist] = useBoolean(false);
    const [openSongDetails, setOpenSongDetails] = useBoolean(false);
    const [isExpand, setExpaned] = useBoolean(false);
    const [isLoop, setLoop] = useBoolean(false);
    const [isShuffle, setShuffle] = useBoolean(false);

    function handleNext(){
        if(current === null){
            if(items.length > 0){
                dispatch(actions.setCurrent(items[0]));
            }
            return;
        }
        const index = items.findIndex(v => current.id === v.id);
        if(index === items.length - 1) return;
        dispatch(actions.setCurrent(items[index + 1]));
    }

    function handlePrev(){
        if(current === null) return;
        const index = items.findIndex(v => current.id === v.id);
        if(index === 0) return;
        dispatch(actions.setCurrent(items[index - 1]));
    }

    function handleLoadMetaData(){
        setCurrentDuration(audioRef.current.duration);
        setPlay.on();
    }

    function handleTimeUpdate(){
        const {currentTime} = audioRef.current;
        setCurrentTime(currentTime);
        thumbRef.current.style.left= `calc(${currentTime * 100 / currentDuration}% - 12px)`;
        fillRef.current.style.width= `${currentTime * 100 / currentDuration}%`;
        const {line} = lrcRef.current.getCurrentLine();
        setLrcLine( line || initLrcLine );

        if(currentTime === currentDuration){
            if(isLoop){
                handleLoopPlaylist();
            }
            else{
                resetSlider();
            }
        }
    }

    function handleChangeEnd(v){
        const currentTime = v;
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime);
    }

    function resetSlider() {
        setPlay.off();
        setCurrentTime(0);
        audioRef.current.currentTime = 0;
        thumbRef.current.style.left= 'calc(0% - 12px)';
        fillRef.current.style.width= '0%';
        fillBufferRef.current.style.width= '0%';
    }

    function handlePlay(){
        if(current === null){
            if(items.length > 0){
                dispatch(actions.setCurrent(items[0]));
                return;
            }
        }
        setPlay.toggle();
    }

    function handleBufferLoad(_){
        if(audioRef.current.buffered.length <= 0) return;
        const bufferedAmount = audioRef.current.buffered.end(audioRef.current.buffered.length - 1);
        const percentage = bufferedAmount * 100 / currentDuration;
        fillBufferRef.current.style.width= `${percentage}%`;
    }

    function handleLoopPlaylist(){

        if(items.length === 1){
            audioRef.current.src = "";
            setPlay.off();
            audioRef.current.src = current.files[0].url;
            return;
        }

        const index = items.findIndex(v => current.id === v.id);
        if(index === items.length - 1){
            dispatch(actions.setCurrent(items[0]));
        }
        else{
            if(isShuffle){
                let next;
                do{
                    next = lodash.random(0, items.length - 1);
                }while(next === index);
                dispatch(actions.setCurrent(items[next]));
            }
            else{
                dispatch(actions.setCurrent(items[index + 1]));
            }
        }
    }

    useEffect(() => {
        audioRef.current.volume = initVolume / 100;
    }, []);

    useEffect(() => {
        resetSlider();
        if(!current || current.files.length === 0) {
            setCurrentDuration(0);
            return;
        }
        audioRef.current.src = current.files[0].url;
        if(current.lyric)
            axios.get(current.lyric, { baseURL: '' }).then((res) => setLrcContent(res.data));
    }, [current])

    useEffect(() => {
        if(isPlay) {
            audioRef.current.play();
        }
        else{
            audioRef.current.pause();
        }
    }, [isPlay]);

    return (
        <Box {...props} as={ScrollContainer}>
            <audio ref={audioRef} onProgress={handleBufferLoad} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadMetaData}/>
            <HStack justify="flex-end">
                <Tooltip label={current ? current.name : ''}>
                    <Button 
                    size="md" 
                    hidden={isExpand} 
                    onClick={setExpaned.on} 
                    leftIcon={<Rotate mt={1} play={!!current && isPlay}><Icon as={icons.SONG} /></Rotate>} 
                    bgGradient="linear(to-r,orange.200, teal.600)">
                        Player
                    </Button>
                </Tooltip>
            </HStack>
            <Box hidden={!isExpand} p={2} borderRadius="lg" bgGradient="linear(to-r, orange.300, teal.600)" >
                <Lrc ref={lrcRef} hidden={true} currentMillisecond={currentTime * 1000} lrc={lrcContent} lineRenderer={() => {}} />
                <Text  fontSize="lg" textAlign="center">{currentLrcLine.content || initLrcLine.content}</Text>
                <Box px={2}>
                    <Slider onChangeEnd={handleChangeEnd} colorScheme='white' max={currentDuration}>
                        <SliderTrack bg="white">
                            <SliderFilledTrack ref={fillRef} bg="teal.700" />
                            <SliderFilledTrack ref={fillBufferRef} zIndex={-1} bg="teal.100" />
                        </SliderTrack>
                        <SliderThumb ref={thumbRef} boxSize={6}>
                            <Box color='teal.700' as={RiMusic2Line} />
                        </SliderThumb>
                    </Slider>
                    <HStack>
                        <Text>{timeToString(currentTime)}</Text>
                        <Spacer />
                        <Text>{timeToString(currentDuration)}</Text>
                    </HStack>
                </Box>
                <HStack align="center">
                    <IconButton onClick={handlePrev} _hover={{textColor: 'white'}} variant="ghost" colorScheme="teal" icon={<Icon as={RiSkipBackLine} w="8" h="8" />} />
                    <IconButton onClick={() => handlePlay()} _hover={{textColor: 'white'}} variant="ghost" colorScheme="teal" icon={<Icon as={!isPlay ? RiPlayLine : RiPauseLine} w="8" h="8" />} />
                    <IconButton onClick={handleNext} _hover={{textColor: 'white'}}  variant="ghost" colorScheme="teal" icon={<Icon as={RiSkipForwardLine} w="8" h="8" />} />
                    <Slider  w="100px" defaultValue={initVolume} onChange={(v) => audioRef.current.volume = v / 100}>
                        <SliderTrack bg="white" >
                            <SliderFilledTrack  bg="teal.700" />
                        </SliderTrack>
                        <SliderThumb boxSize={6}>
                            <Box color='teal.700' as={RiVolumeDownFill} />
                        </SliderThumb>
                    </Slider>
                    <Spacer />
                    <IconButton onClick={setExpaned.off} icon={<Icon as={RiFullscreenExitLine} w="8" h="8" />} size="sm" colorScheme="white" variant="ghost" />
                </HStack>
                <HStack m={2}>
                    <Text>Loop</Text>
                    <Switch value={isLoop} onChange={setLoop.toggle} colorScheme="teal"/>
                    <Text>Shuffle</Text>
                    <Switch value={isShuffle} onChange={setShuffle.toggle} colorScheme="teal"/>
                </HStack>
                <HStack mx={1}>
                    <IconButton onClick={setOpenPlaylist.toggle} icon={<Icon as={icons.PLAYLIST} w="5" h="5" />} size="sm" variant="ghost" />
                    <IconButton onClick={() => current && setOpenSongDetails.toggle()} icon={<Icon as={icons.INFOR} w="5" h="5" />} size="sm" variant="ghost" />
                    <Text noOfLines={1} fontSize="md" pr={2}>{current ? current.name : 'No song playing'}</Text>
                </HStack>
            </Box>
            {openPlaylist && <Playlist mt={2}/>}
            {openSongDetails && <SongDetails enablePlayButton={false} _hover={null} mt={2} song={current} />}
        </Box>
    );
}