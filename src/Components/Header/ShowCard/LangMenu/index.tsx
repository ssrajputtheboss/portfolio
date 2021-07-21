import React from "react";
import {
    Text ,
    Grid ,
    Flex ,
    Menu ,
    MenuList ,
    MenuButton ,
    Icon
} from '@chakra-ui/react';
import {
    SiPython,
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
            borderColor="tomato"
            borderWidth="medium"
            bgColor="seashell"
            >
                <Text mr="2" textColor="green.900" fontSize="sm" fontWeight="bold">Programming Languages</Text>
                <Icon as={FaChevronRight} color="green.900"/>
            </Flex>
        </MenuButton>
        <MenuList>
                <Grid 
                templateColumns={{lg:'repeat(4, 1fr)' , base: 'repeat(3,1fr)'}}
                gap={2}
                p={2}>
                    <SkillTag icon={ SiPython } name="Python" iconColor="blue.600" />
                    <SkillTag icon={ SiJava } name="Java" iconColor="red.500" />
                    <SkillTag icon={ SiCplusplus } name="C++" iconColor="blue.900" />
                    <SkillTag icon={ SiDart } name="Dart" iconColor="blue.200" />
                </Grid>
        </MenuList>
    </Menu>;
}