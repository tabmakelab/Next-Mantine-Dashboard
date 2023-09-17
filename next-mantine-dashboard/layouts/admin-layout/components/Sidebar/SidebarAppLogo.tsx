import { Group, Stack, Text } from '@mantine/core';
import { createStyles, useMantineTheme } from '@mantine/styles';
import { IconCompass } from '@tabler/icons-react';
import useAppState from '../../../../store/app';

const useStyles = createStyles(() => ({
  wrapper: {
    padding: '0 10px',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 96,
  },
  placeholder: {
    height: 96,
    display: 'flex',
  },
  appName: {
    fontSize: '16px!important',
    fontWeight: 700,
    margin: 0,
    padding: 0,
  },
  appSubName: {
    fontSize: '12px!important',
  },
}));
const LOGO_SIZE = 48;
const LOGO_COLLAPSE_SIZE = 42;
export default () => {
  const { classes } = useStyles();
  const { sidebarCollapse, primaryColor } = useAppState();
  const { colorScheme } = useAppState();
  const { colors } = useMantineTheme();
  return (
    <>
      <Group
        noWrap
        position="center"
        spacing={10}
        className={classes.wrapper}
        sx={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: colorScheme === 'dark' ? colors.dark[8] : colors.gray[0],
        }}
      >
        <IconCompass
          size={sidebarCollapse === true ? LOGO_COLLAPSE_SIZE : LOGO_SIZE}
          color={colors[primaryColor][9]}
        />

        <Stack
          spacing={0}
          style={{
            display: sidebarCollapse === true ? 'none' : 'flex',
            opacity: sidebarCollapse === true ? '0' : '1',
            overflow: 'hidden',
            transition: 'all 0.3s',
          }}
        >
          <Text className={classes.appName}>Mantine Next Dashboard</Text>
          <Text className={classes.appSubName}>Mantine/Next/Zustand/ky</Text>
        </Stack>
      </Group>
      <div className={classes.placeholder} />
    </>
  );
};
