import { PropsWithChildren } from 'react';
import { AppShell, Navbar, Header, createStyles } from '@mantine/core';
import { MantineTheme } from '@mantine/styles';

import useAppState from '../../store/app';

import Sidebar from './components/Sidebar';

import AppHeader from './components/AppHeader';
import FooterCentered from './components/Footer';

type AdminLayoutProps = PropsWithChildren<{}>;
const useStyles = createStyles((theme: MantineTheme) => ({
  navbar: {
    // "-moz-transition": "width .3s",
    // "-ms-transition": "width .3s",
    // "-o-transition": "width .3s",
    // "-webkit-transition": "width .3s",
    transition: 'width .3s',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
  },
}));
const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { classes } = useStyles();
  const { sidebarWidth } = useAppState();

  const footerLinks: { link: string; label: string }[] = [];
  return (
    <>
      <AppShell
        padding="md"
        footer={<FooterCentered links={footerLinks} />}
        navbar={
          <Navbar
            width={{ base: sidebarWidth }}
            top={0}
            height="100%"
            className={classes.navbar}
          >
            <Sidebar />
          </Navbar>
        }
        header={
          <Header height={60} p="xs" ml={sidebarWidth}>
            <AppHeader />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};
export default AdminLayout;
