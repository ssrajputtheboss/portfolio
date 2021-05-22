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

export default function  ExpandableCard( props : ProjectData ) : React.ReactElement{
    var [isOpen, setIsOpen] = useState<boolean>(false);
    return <Box
    overflowX="scroll"
    w={{ base:"100%" , lg:"2xl"}}
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
        alignItems="center"
        >
            <Box w="full">
                <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="start"
                >
                    <CardHeading title={props.header} lang={props.lang} />
                    <Text p="4" fontSize="sm" > {props.description} </Text>
                    <Box
                    display = { isOpen ? 'block' : 'none' }
                    p="4"
                    >
                        <ReadMe src={props.url} />
                    </Box>
                </Flex>
            </Box>
            <Tooltip
            hasArrow
            label={ isOpen ? "close" : "explore" }
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