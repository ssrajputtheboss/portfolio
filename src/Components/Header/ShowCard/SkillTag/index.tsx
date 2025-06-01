import { Tag, Text, Icon, Flex } from '@chakra-ui/react';
import React from 'react';
import { Skill } from '../../../../Models';

export default function SkillTag({ name, icon, iconColor , isActiveSkill}: Skill): React.ReactElement {
  const opacity = isActiveSkill ? 1 : 0.5;
  return (
    <Tag maxW={{ base: '20', lg: '2xl' }} _hover={{ bgColor: 'blackAlpha.400' }} opacity={opacity} >
      <Flex flexDir='column' alignItems='center' justifyContent='space-between' p='2'>
        <Icon as={icon} h={{ sm: '8', lg: '20' }} w={{ sm: '8', lg: '20' }} color={iconColor} />
        <Text fontSize='smaller' color='green.900'>
          {name}
        </Text>
      </Flex>
    </Tag>
  );
}
