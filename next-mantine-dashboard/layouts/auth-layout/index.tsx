import { PropsWithChildren } from 'react';
import dayjs from 'dayjs';
import { Stack, createStyles, Text, useMantineTheme } from '@mantine/core';
import ThemeButton from '../admin-layout/components/ThemeButton';
import useAppState from '../../store/app';
import AuthLogo from './components/AuthLogo';

type AuthLayoutProps = PropsWithChildren<{}>;
const useStyles = createStyles(() => ({
  wrapper: { width: '100vw', height: '100vh' },
}));
const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { classes } = useStyles();
  const { colorScheme } = useAppState();
  const { colors, fontFamily } = useMantineTheme();
  return (
    <Stack justify="center" spacing={20} align="center" className={classes.wrapper}>
      <AuthLogo />
      {children}
      <ThemeButton />
      <Text
        sx={{ fontFamily: `Greycliff CF, ${fontFamily}` }}
        size={14}
        color={colorScheme === 'dark' ? colors.gray[3] : colors.dark[5]}
      >
        &copy; {dayjs().year()} Next Mantine Dashboard
      </Text>
    </Stack>
  );
};

export default AuthLayout;
