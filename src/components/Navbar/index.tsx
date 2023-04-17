import { NavLink, useNavigate } from 'react-router-dom';
import { Header, Container, Group, Burger, Paper, Transition, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useStyles, { HEADER_HEIGHT } from './styles';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

const Navbar = ({ links }: HeaderResponsiveProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const navigate = useNavigate();

  const items = links.map((link) => (
    <NavLink key={link.label} to={link.link} end className={classes.link}>
      {link.label}
    </NavLink>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Title order={3} size="1.5rem" className={classes.title} onClick={() => navigate('/')}>
        <span className={classes.highlight}>موقع</span>    القرآن
        </Title>

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default Navbar;
