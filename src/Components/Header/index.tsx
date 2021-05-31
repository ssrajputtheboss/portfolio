import { 
    Box , 
    Flex , 
    Avatar , 
    IconButton , 
    Icon , 
    Tooltip 
} from '@chakra-ui/react';
import { 
    FaChevronRight ,
    FaChevronLeft 
} from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import ShowCard from './ShowCard';

export default function Header() : React.ReactElement{
    var [isOpen, setIsOpen] = useState<boolean>(false);
    return <Box 
    top="0"
    position="fixed"
    w={isOpen ? 'max-content':'min-content'}
    >   
        <Flex
        flexDir={{ base : 'column' , lg: 'row'}}
        alignItems="start"
        justifyContent="start"
        mt={10}
        w="full"
        h="40"
        p="4"
        >
            <Avatar 
            src="https://avatars.githubusercontent.com/u/62293640?v=4"
            h="10" 
            w="10" />
            
            <Tooltip
            hasArrow
            label={isOpen? 'Shrink':'Expand To Read About Me'}
            textColor="white"
            bgColor="blackAlpha.200"
            >
                <IconButton
                aria-label="Icon"
                colorScheme="blackAlpha"
                onClick={
                    (e:any)=>{
                        setIsOpen(!isOpen);
                    }
                }
                >
                    <Icon as={
                        isOpen? FaChevronLeft:FaChevronRight
                    } />
                </IconButton>
            </Tooltip>

            <ShowCard isVisible={isOpen} />

        </Flex>
    </Box>;
}