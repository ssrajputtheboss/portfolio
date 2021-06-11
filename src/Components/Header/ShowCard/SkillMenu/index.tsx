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
import { RiFlutterFill } from 'react-icons/ri';
import { 
    SiAndroidstudio ,
    SiReact ,
    SiNodeDotJs ,
    SiDjango ,
    SiDocker ,
    SiSpring
} from 'react-icons/si';
import { FaChevronRight } from 'react-icons/fa';
import SkillTag from "../SkillTag";

export default function SkillMenu():React.ReactElement{
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
                <Text mr="2" textColor="green.900" fontSize="sm" fontWeight="bold">Skills</Text>
                <Icon as={FaChevronRight} color="green.900"/>
            </Flex>
        </MenuButton>
        <MenuList>
                <Grid 
                templateColumns={{lg:'repeat(4, 1fr)' , base: 'repeat(3,1fr)'}}
                gap={2}
                p={2}>
                    <SkillTag icon={ RiFlutterFill } name="Flutter" iconColor="blue.400" />
                    <SkillTag icon={ SiAndroidstudio } name="Android" iconColor="green.500" />
                    <SkillTag icon={ SiReact } name="React" iconColor="blue.700" />
                    <SkillTag icon={ SiNodeDotJs } name="NodeJS" iconColor="green.400" />
                    <SkillTag icon={ SiDjango } name="Django" iconColor="blue.400" />
                    <SkillTag icon={ SiDocker } name="Docker" iconColor="blue.500" />
                    <SkillTag icon={ SiSpring } name="Spring Boot" iconColor="green.400" />
                </Grid>
        </MenuList>
    </Menu>;
}