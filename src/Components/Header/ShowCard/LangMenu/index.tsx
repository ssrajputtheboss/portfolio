import React from "react";
import {
    Text ,
    Grid ,
    Flex ,
    Menu ,
    MenuList ,
    MenuButton
} from '@chakra-ui/react';
import { 
    SiJavascript,
    SiPython,
    SiTypescript,
    SiJava,
    SiCplusplus,
    SiDart
} from 'react-icons/si';
import { FaChevronRight } from 'react-icons/fa';
import SkillTag from "../SkillTag";

export default function LangMenu():React.ReactElement{
    return <Menu>
        <MenuButton>
            <Flex 
            alignItems="center"
            p="2"
            m="1"
            borderColor="black"
            borderWidth="medium"
            bgColor="green.200"
            >
                <Text mr="2" fontSize="sm" fontWeight="bold" color="green.900">Programming Languages</Text>
                <FaChevronRight/>
            </Flex>
        </MenuButton>
        <MenuList>
                <Grid 
                templateColumns={{lg:'repeat(4, 1fr)' , base: 'repeat(3,1fr)'}}
                gap={2}
                p={2}>
                    <SkillTag icon={ SiPython } name="Python" iconColor="blue.600" />
                    <SkillTag icon={ SiJavascript } name="JavaScript" iconColor="yellow.400" />
                    <SkillTag icon={ SiTypescript } name="TypeScript" iconColor="yellow.400" />
                    <SkillTag icon={ SiJava } name="Java" iconColor="red.500" />
                    <SkillTag icon={ SiCplusplus } name="C++" iconColor="blue.300" />
                    <SkillTag icon={ SiDart } name="Dart" iconColor="blue.100" />
                </Grid>
        </MenuList>
    </Menu>;
}