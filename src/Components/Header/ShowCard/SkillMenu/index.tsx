import React from 'react';
import { Text, Grid, Flex, Menu, MenuList, MenuButton, Icon } from '@chakra-ui/react';
import { RiFlutterFill } from 'react-icons/ri';
import { FaAws } from 'react-icons/fa';
import {
  SiAndroidstudio,
  SiReact,
  //    SiDjango ,
  SiNodedotjs,
  SiDatadog,
  SiTerraform,
  SiDocker,
  SiSpring,
  SiJavascript,
  SiTypescript
} from 'react-icons/si';
import { FaChevronRight } from 'react-icons/fa';
import SkillTag from '../SkillTag';

export default function SkillMenu(): React.ReactElement {
  return (
    <Menu>
      <MenuButton>
        <Flex
          alignItems='center'
          p='2'
          m='1'
          borderColor='tomato'
          borderWidth='medium'
          bgColor='seashell'>
          <Text mr='2' textColor='green.900' fontSize='sm' fontWeight='bold'>
            Skills
          </Text>
          <Icon as={FaChevronRight} color='green.900' />
        </Flex>
      </MenuButton>
      <MenuList>
        <Grid templateColumns={{ lg: 'repeat(4, 1fr)', base: 'repeat(3,1fr)' }} gap={2} p={2}>
          <SkillTag icon={FaAws} name='AWS' iconColor='orange.500' isActiveSkill={true}/>
          <SkillTag icon={SiDatadog} name='DataDog' iconColor='purple.700' isActiveSkill={true}/>
          <SkillTag icon={SiTerraform} name='Terraform' iconColor='purple.500' isActiveSkill={true}/>
          <SkillTag icon={SiJavascript} name='JavaScript' iconColor='yellow.400' isActiveSkill={true} />
          <SkillTag icon={SiTypescript} name='TypeScript' iconColor='yellow.400' isActiveSkill={false} />
          <SkillTag icon={RiFlutterFill} name='Flutter' iconColor='blue.400' isActiveSkill={true}/>
          <SkillTag icon={SiAndroidstudio} name='Android' iconColor='green.500' isActiveSkill={false}/>
          <SkillTag icon={SiReact} name='React' iconColor='blue.700' isActiveSkill={false}/>
          <SkillTag icon={SiNodedotjs} name='NodeJS' iconColor='green.400' isActiveSkill={false}/>
          <SkillTag icon={SiDocker} name='Docker' iconColor='blue.500' isActiveSkill={true}/>
          <SkillTag icon={SiSpring} name='Spring Boot' iconColor='green.400' isActiveSkill={false}/>
        </Grid>
      </MenuList>
    </Menu>
  );
}
