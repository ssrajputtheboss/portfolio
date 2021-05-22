import { Box , Grid } from "@chakra-ui/layout";
import React from "react";
import { 
    ReadMeProps ,
    ReadMeKey ,
    ReadMeValue
} from "../../Models";
import { fetchReadMeFromURL, getReadMeJSON } from "../../helpers";
import { useState } from "react";
import { useEffect } from "react";
import GetReadMeWidget from "./GetReadMeWidget";

export default function ReadMe( { src } : ReadMeProps ) : React.ReactElement{
    const [ text , setText ] = useState<string>('');
    useEffect(() => {
        const fetchData = async() => {
            const data:string = await fetchReadMeFromURL(src);
            setText( data );
        };
        fetchData();
    } );
    const readmeJson : Map< ReadMeKey , ReadMeValue > = getReadMeJSON( text );
    const imgUrls : Array< [ReadMeKey , ReadMeValue]> = Array.from(readmeJson).filter( ( [k,v], i ) => {
        return k.info === 'image';
    })
    const readmeUi = Array.from(readmeJson).map( ( [k,v], i ) => {
        if(k.info === 'image')
            return <></>;
        return <Box
        w={{ base:"100%" , lg:"xl"}}
        >
            <GetReadMeWidget key={i} rkey={k} rvalue={v} />
        </Box>;
    } );
    const imageGrid = imgUrls.map( ([ k, v] , i) => {
        return <GetReadMeWidget key={'image'+i} rkey={k} rvalue={v} />
    } );
    return <Box
    >
        {readmeUi}
        <Grid 
            templateColumns='repeat(3,1fr)'
            gap={1}
            p={1}
            id="grid"
            >
                {imageGrid}
        </Grid>
    </Box>
}