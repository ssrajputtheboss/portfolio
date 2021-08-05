import React from "react";
import { Flex } from "@chakra-ui/layout";
import { ProfileLinkExpandable } from "./ProfileLinkExpandable";
import { 
    SiGithub, 
    SiTwitter ,
    SiLinkedin
} from "react-icons/si";

export const Footer = ():React.ReactElement =>{
    const profiles = [
        'https://github.com/ssrajputtheboss',
        'http://twitter.com/ssrajputtheboss',
    ];
    const icons = [
        SiGithub,
        SiTwitter,
        SiLinkedin
    ]
    const colors = [
        'white',
        'twitter.500',
        'blue.800'
    ]
    return <footer style={{ height:'fit-content', width:'100vw' }}>
        <Flex
        flexDir="row"
        justifyContent="space-around"
        alignItems="center"
        w="full"
        h="52"
        bgColor="black"
        >
            {profiles.map((url:string,i:number)=><ProfileLinkExpandable color={colors[i]} icon={icons[i]} url={url} />)}
        </Flex>
    </footer>
}