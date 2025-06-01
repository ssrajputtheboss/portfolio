import React from 'react';
import { Text, Grid, Flex, Menu, MenuList, MenuButton, Icon } from '@chakra-ui/react';
import { SiPython, SiCplusplus, SiDart, SiC } from 'react-icons/si';
import { FaChevronRight , FaJava} from 'react-icons/fa';
import SkillTag from '../SkillTag';

export default function LangMenu(): React.ReactElement {
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
            Programming Languages
          </Text>
          <Icon as={FaChevronRight} color='green.900' />
        </Flex>
      </MenuButton>
      <MenuList>
        <Grid templateColumns={{ lg: 'repeat(4, 1fr)', base: 'repeat(3,1fr)' }} gap={2} p={2}>
          <SkillTag icon={SiPython} name='Python' iconColor='blue.600' isActiveSkill={true} />
          <SkillTag icon={FaJava} name='Java' iconColor='red.500' isActiveSkill={true} />
          <SkillTag icon={SiCplusplus} name='C++' iconColor='blue.900' isActiveSkill={false} />
          <SkillTag icon={SiDart} name='Dart' iconColor='blue.200' isActiveSkill={true} />
          <SkillTag icon={SiC} name='C' iconColor='blue.400' isActiveSkill={false} />
        </Grid>
      </MenuList>
    </Menu>
  );
}
