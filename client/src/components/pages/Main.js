import { Heading, Box, Input, Icon, InputGroup, InputLeftElement, Progress, useBoolean } from "@chakra-ui/react";
import Item from "../lists/Item";
import HList from "../lists/HList";
import axios from 'axios';
import { useEffect, useState, useCallback, useRef } from "react";
import icons from '../configs/icons';
import Playlist from "../lists/Playlist";
import { RiSearchLine } from 'react-icons/ri';
import VList from "../lists/VList";
import SongDetails from "../lists/SongDetails";
import { useLocation } from "react-router-dom";
import lodash from "lodash";

export default function Main(){
    
    const [tags, setTags] = useState([]);
    const [singers, setSingers] = useState([]);
    const [composers, setComposers] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [isLoading, setLoading] = useBoolean(false);

    const {search} = useLocation();
    const [keyword, setKeyword] = useState('');
    const topRef = useRef();

    function initData(){
        setLoading.on();
        Promise.all([
            axios.get('/tags?size=10'),
            axios.get('/attributes?attribute.name=SINGER'),
            axios.get('/attributes?attribute.name=COMPOSER'),
            axios.get('/playlists?size=10'),
            axios.get('/songs?size=10')
        ])
        .then(([tagRes, singerRes, composerRes, playlistRes, songRes]) => {
            setTags(tagRes.data.content);
            setSingers(singerRes.data['SINGER']);
            setComposers(composerRes.data['COMPOSER']);
            setPlaylists(playlistRes.data.content);
            setSongs(songRes.data.content);
            setLoading.off();
        });
    }

    function handleTextChange(e){
        const v = e.target.value;
        setKeyword(v);
        if(v.trim() === ''){
            initData();
        }
    }

    function handleSearch(keyword){

        topRef.current?.scrollIntoView({behavior:'smooth'});
        setLoading.on();

        setTags([]);
        setSingers([]);
        setComposers([]);
        let promises;
        if(keyword.startsWith("tags::")){
            promises = [
                axios.get(`/songs?tags=${keyword.substring(6)}`),
                axios.get(`/playlists?tags${keyword.substring(6)}`)
            ];
        }
        else if(keyword.startsWith("attributes::")){
            promises = [
                axios.get(`/songs?attributes=${keyword.substring(12)}`),
                axios.get(`/playlists?attributes=${keyword.substring(12)}`)
            ];
        }
        else{
            promises = [
                axios.get(`/songs?name=${keyword}`),
                axios.get(`/playlists?name=${keyword}`)
            ];
        }

        Promise.all(promises)
        .then(([songRes, playlistRes]) => {
            setSongs(songRes.data.content);
            setPlaylists(playlistRes.data.content);
            setLoading.off();
        });
    }

    const searchDebounce = useCallback(lodash.debounce(handleSearch, 200), []);
    
    useEffect(() => {
        initData();
    }, []);

    useEffect(() => {
        if(keyword.trim() === ''){
            return;
        }
        searchDebounce(keyword);
    }, [keyword]);

    useEffect(() => {
        const keyword = search.replace("?keyword=", "");
        setKeyword(decodeURI(keyword));
    }, [search]);

    return (
        <Box>
            <div ref={topRef}></div>
            <InputGroup mb={2} >
                <InputLeftElement
                pointerEvents='none'
                children={<Icon as={RiSearchLine} color='gray.300' />}
                />
                <Input value={keyword} onChange={handleTextChange} type='text' placeholder='Search song, playlist' />
            </InputGroup>
            <Progress mb={3} colorScheme="teal" hidden={!isLoading} size='xs' isIndeterminate />
            <Box>
            {tags.length > 0 && 
                    <>
                <Heading as='h3' size='md'>Tags</Heading>
                <HList>
                    {tags.map(({id, name}) => <Item path={`/main?keyword=tags::${name}`} key={id} text={name} icon={icons.TAG} />)}
                </HList>
            </>}
            {singers.length > 0 && 
                    <>
                <Heading as='h3' size='md'>Singers</Heading>
                <HList>
                    {singers.map(({id, value}) => <Item path={`/main?keyword=attributes::${value}`} key={id} text={value} icon={icons.SONG2} />)}
                </HList>
            </>}
            {composers.length > 0 && 
                    <>
                <Heading as='h3' size='md'>Composers</Heading>
                <HList>
                    {composers.map(({id, value}) => <Item path={`/main?keyword=attributes::${value}`} key={id} text={value} icon={icons.SONG2} />)}
                </HList>
            </>}
                {playlists.length > 0 && 
                    <>
                        <Heading as='h3' size='md'>Playlists</Heading>
                        <VList my={2}>
                            {playlists.map((playlist) => (<Playlist w="auto" key={playlist.id} playlist={playlist}/>))}
                        </VList>
                    </>
                }

                {songs.length > 0 && 
                    <>
                        <Heading as='h3' size='md'>Songs</Heading>
                        <VList my={2}>
                            {songs.map((song) => (<SongDetails w="auto" key={song.id} song={song}/>))}
                        </VList>
                    </>
                }
            </Box>
        </Box>
    );
}