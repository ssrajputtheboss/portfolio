import { 
    Box,
    Text,
    Flex,
    Divider,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import { 
    ReadMeKey ,
    ReadMeValue
} from "../../../Models";
import { getHeaderSize } from "../../../helpers";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import parse from 'html-react-parser'; 

export default function GetReadMeWidget( { rkey , rvalue} : { rkey : ReadMeKey , rvalue: ReadMeValue}) : React.ReactElement{
    if( rkey.type === 'header'){
        return <Flex
        flexDir="column"
        >
            <Text fontWeight="bold" fontSize={ getHeaderSize( rkey.info) }> {rvalue.title} </Text>
            <Divider orientation="horizontal" />
            <Text fontSize="smaller"> {parse(rvalue.content.replace(/\n/g,'<br>'))} </Text>
        </Flex>;
    }
    else if( rkey.type === 'code' ){
        return <Box maxW={{ base:"100%" , lg:"xl"}} m="2" p="5">
        <SyntaxHighlighter
        showLineNumbers={true}
        language={rkey.info}
        style={docco}
        >
            { rvalue.content }
        </SyntaxHighlighter></Box>;
    }else if( rkey.type === 'link' ){
        if( rkey.info === 'image' ){
            return <Image
            src={ rvalue.content }
            alt="image"
            />
        }else{
            return <a
            href={ rvalue.content }
            >{rvalue.title}
            </a>;
        }
    }
    else return <></>;
}