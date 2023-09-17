import { Flex, Group, Stack } from '@mantine/core';
import MenuBtn from './MenuBtn';
import UserButton from './UserButton';
import ThemeButton from '../ThemeButton';

export default () => (
  <Stack justify="center" style={{ height: '100%' }}>
    <Group position="left" grow align="apart">
      <Flex align="center">
        <MenuBtn />
      </Flex>
      <Flex justify="flex-end" align="center">
        <Group position="right">
          <ThemeButton /> <UserButton />
        </Group>
      </Flex>
    </Group>
  </Stack>
);
