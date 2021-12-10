import React from 'react';
import { Text, Grid, Flex, Menu, MenuList, MenuButton, Icon } from '@chakra-ui/react';
import { DiPostgresql, DiSqllite } from 'react-icons/di';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { FaChevronRight } from 'react-icons/fa';
import SkillTag from '../SkillTag';

export default function DatabaseMenu(): React.ReactElement {
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
            {' '}
            Databases{' '}
          </Text>
          <Icon as={FaChevronRight} color='green.900' />
        </Flex>
      </MenuButton>
      <MenuList>
        <Grid templateColumns={{ lg: 'repeat(4, 1fr)', base: 'repeat(3,1fr)' }} gap={2} p={2}>
          <SkillTag icon={SiMongodb} name='MongoDB' iconColor='green.600' />
          <SkillTag icon={DiPostgresql} name='PostgreSQL' iconColor='blue.400' />
          <SkillTag icon={SiMysql} name='MySQL' iconColor='blue.400' />
          <SkillTag icon={DiSqllite} name='SQLite3' iconColor='blue.400' />
        </Grid>
      </MenuList>
    </Menu>
  );
}
