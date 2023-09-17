import { Box, createStyles, Navbar } from '@mantine/core';
import SidebarMenuNested from './Nested/SidebarMenuNested';
import SidebarAppLogo from './SidebarAppLogo';

const useStyles = createStyles(() => ({
  appName: {
    boxSizing: 'border-box',
    position: 'relative',
  },
}));
export default () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Navbar.Section className={classes.appName}>
        <SidebarAppLogo />
      </Navbar.Section>
      <SidebarMenuNested />
    </Box>
  );
};
