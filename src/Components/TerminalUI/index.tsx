import { 
    Box ,
    IconButton,
    Icon , 
    Tooltip,
    Text ,
    Flex ,
    Input
} from '@chakra-ui/react';
import TerminalTitle from './TerminalTitle';
import { useState } from 'react';
import React from 'react';
import { BsTerminal } from 'react-icons/bs';


export default function TerminalUI( {getCommand} : {getCommand :Function}) : React.ReactElement{
    const [ lastText , setLastText ] = useState<string>('');
    const [ isTerminalOpen , setIsTerminalOpen ] =  useState<boolean>(false);
    const execCommand = (command : string , input : HTMLInputElement)=>{
        if(command.toLowerCase() === 'clear' ||  command.toLowerCase() === 'cls'){
            getCommand( command );
            setLastText('');
        }else{
            let output:string = getCommand( command ) ;
            setLastText(  lastText + '\n$ '+input.value+'\n  '+ output);
        }
        input.value = '';
    }
    if( ! isTerminalOpen){
        return <Tooltip
        hasArrow
        label="Open Terminal"
        bgColor="blackAlpha.900"
        textColor="white"
        >
            <IconButton
                _hover={{ bgColor:"blue" }}
                position="fixed"
                bottom={{ base: "8", lg:"20"}}
                right={{ base: "8", lg:"20"}}
                h="20"
                w="20"
                borderRadius="50%"
                aria-label="floating-button"
                colorScheme="blackAlpha"
                onClick = { (e)=>{
                    setIsTerminalOpen(true);
                }}
                >
                    <Icon color="white" as={ BsTerminal } h="10" w="10" />
            </IconButton>
        </Tooltip>
    }
    return <Box
    w="full"
    position="fixed"
    bottom="10"
    h="40"
    >
        <TerminalTitle onClose={()=>{
            setIsTerminalOpen(false);
        }} />

        <Box
        h="full"
        w="full"
        borderWidth="thick"
        borderColor="grey"
        bgColor="black"
        minH="20"
        overflowY="scroll"
        >
            <Flex
            flexDir="column"
            justifyContent="start"
            alignItems="start"
            >
                { lastText.split('\n').map( (v , i) => {
                    return <Flex
                    flexDir="row"
                    justifyContent="start"
                    alignItems="center"
                    key={i}
                    >
                        <Text px="1" textColor = "green.400" >{v.substring(0,2)}</Text>
                        <Text px="1" textColor = "white">{v.substring(2,v.length) || ''}</Text>
                    </Flex>
                } )}
            </Flex>
            <Flex
            flexDir="row"
            justifyContent="start"
            alignItems="center"
            >
                <Text px="1" textColor = "green.400">{'$ '}</Text>
                <Input
                border="none"
                px="1"
                w="full"
                textColor = "white"
                onKeyDown={(e)=>{
                    if(e.keyCode === 13 ){
                        let value : string  = e.currentTarget.value.trim();
                        execCommand( value , e.currentTarget );
                        e.preventDefault();
                        if(e.currentTarget.parentElement){
                            if(e.currentTarget.parentElement.parentElement){
                                e.currentTarget.parentElement.parentElement.scrollTop = e.currentTarget.parentElement.parentElement.scrollHeight;
                            }
                        }
                    }
                }}
                _focus={{ outline:'none' }}
                >
                </Input>
            </Flex>
        </Box>
    </Box>;
}