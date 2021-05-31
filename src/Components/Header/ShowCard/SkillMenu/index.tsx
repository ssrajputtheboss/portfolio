import React from "react";
import {
    Text ,
    Grid ,
    Flex ,
    Menu ,
    MenuList ,
    MenuButton
} from '@chakra-ui/react';
import { RiFlutterFill } from 'react-icons/ri';
import { 
    SiAndroidstudio ,
    SiReact ,
    SiNodeDotJs ,
    SiDjango
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
            borderColor="black"
            borderWidth="medium"
            bgColor="green.200"
            >
                <Text mr="2" fontSize="sm" fontWeight="bold" color="green.900">Skills</Text>
                <FaChevronRight/>
            </Flex>
        </MenuButton>
        <MenuList>
                <Grid 
                templateColumns={{lg:'repeat(5, 1fr)' , base: 'repeat(3,1fr)'}}
                gap={2}
                p={2}>
                    <SkillTag icon={ RiFlutterFill } name="Flutter" iconColor="blue.400" />
                    <SkillTag icon={ SiAndroidstudio } name="Android" iconColor="green.500" />
                    <SkillTag icon={ SiReact } name="React" iconColor="blue.700" />
                    <SkillTag icon={ SiNodeDotJs } name="NodeJS" iconColor="green.400" />
                    <SkillTag icon={ SiDjango } name="Django" iconColor="blue.400" />
                </Grid>
        </MenuList>
    </Menu>;
}