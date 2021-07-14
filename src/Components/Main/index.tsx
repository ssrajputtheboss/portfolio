import { 
    Box  ,
    Flex,
    Heading
} from '@chakra-ui/react';
import React from 'react';
import ExpandableCard from './ExpandableCard';
import jsonData from '../../data/data.json';
import { ProjectData } from '../../Models';
import TerminalUI from '../TerminalUI';
import { useState } from 'react';
import { execCommand , sortData ,searchData , filterData , changeDirectory } from '../../helpers';
import { Command } from '../../Models';

export default function  Main() : React.ReactElement{
    const [ cards , setCards ] =  useState<Array<ProjectData>>(jsonData);
    const performOperation =  function( operation : Command ){
        if( operation.func === 'sort' ){
            if( operation.subFunc !== 'invalid'){
                setCards([...sortData( operation.subFunc )]);
                return;
            }
        }else if( operation.func === 'search' ){
            if( operation.subFunc !== 'invalid'){
                setCards([...searchData( operation.subFunc )]);
                return;
            }
        }else if( operation.func === 'filter' ){
            if( operation.subFunc !== 'invalid'){
                setCards(filterData( operation.subFunc ));
                return;
            }
        }else if( operation.func === 'cd' ){
            if( operation.subFunc !== 'invalid'){
                setCards(changeDirectory( operation.subFunc ));
                return;
            }
        }else
            setCards([...jsonData]);
    }
    return <Box
    w="full"
    h="full"
    p="2"
    >
        <Heading p="4" color="twitter.500" textAlign="center">Projects</Heading>
        <Flex
        flexDir="column"
        alignItems="center"
        p={3}
        >
            {cards.map( (v : ProjectData , i) => {
               return  <ExpandableCard
               key={i}
               projectLink={ v.projectLink }
               isLive = { v.isLive }
               header = { v.header }
               url = {v.url}
               description = {v.description}
               langs={v.langs}
               stack={v.stack}
           />
            } )}
        </Flex>   

        <TerminalUI getCommand={function(cmd : string) : string{
            return execCommand( cmd , performOperation );
        }}/>
    </Box>
}