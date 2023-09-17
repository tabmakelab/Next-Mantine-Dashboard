import dynamic from 'next/dynamic';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { NextPage } from 'next';
import Router from 'next/router';

const AuthLayout = dynamic(import('../../layouts/auth-layout'), { ssr: false });

const SignInPage: NextPage = () => {
  const welcome = 'Welcome Back!';
  return (
    <AuthLayout>
      <Container mt={0}>
        <Title align="center" sx={{ fontWeight: 900 }}>
          {welcome}
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper sx={{ minWidth: 420 }} withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button
            fullWidth
            mt="xl"
            onClick={() => {
              Router.push('/dashboard');
            }}
          >
            Sign in
          </Button>
        </Paper>
      </Container>
    </AuthLayout>
  );
};

export default SignInPage;
