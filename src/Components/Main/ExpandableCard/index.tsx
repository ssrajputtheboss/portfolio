import { 
    Box ,
    Flex ,
    Text ,
    IconButton , 
    Icon ,
    Tooltip
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import CardHeading from './CardHeading';
import {
    RiArrowUpSLine ,
    RiArrowDownSLine
} from 'react-icons/ri';
import ReadMe from '../../ReadMe';
import { ProjectData } from '../../../Models';
import Donut from '../../Donut';

export default function  ExpandableCard( props : ProjectData ) : React.ReactElement{
    var [isOpen, setIsOpen] = useState<boolean>(false);
    return <Box
    overflowX="scroll"
    w={{ base:"100%" , lg:"80%"}}
    h={{ base: 'fit-content' , lg: 'fit-content' }}
    boxShadow="2xl"
    p="5"
    m="2"
    borderRadius="2xl"
    bgColor="whiteAlpha.300"
    >
        <Flex
        flexDir="row"
        justifyContent="space-between"
        alignItems="start"
        >
            <Box w="full">
                <Flex
                flexDir={{ base:'column' , lg:'row' }}
                justifyContent="space-between"
                alignItems={{ base:'center' , lg:'start' }}
                >
                    <Flex
                    flexDir="column"
                    justifyContent="space-between"
                    alignItems="start"
                    >
                        <CardHeading title={props.header} langs={props.langs} />
                        <Text p="4" fontSize="sm" > {props.description} </Text>
                        <Box
                        display = { isOpen ? 'block' : 'none' }
                        p="4"
                        >
                            <ReadMe src={props.url} />
                        </Box>
                    </Flex>
                    <Donut series={props.langs.map(({data})=>{return data;})} labels={props.langs.map(({name})=>{return name;})} />
                </Flex>
            </Box>
            <Tooltip
            hasArrow
            label={ isOpen ? "close" : "explore" }
            bgColor="blackAlpha.200"
            textColor="white"
            >
                <IconButton
                aria-label="explore-icon"
                colorScheme="blackAlpha"
                onClick= {(e)=>{
                    setIsOpen( ! isOpen );
                }}
                >
                    <Icon as={ isOpen ? RiArrowUpSLine : RiArrowDownSLine } />
                </IconButton>
            </Tooltip>
        </Flex>
    </Box>
}