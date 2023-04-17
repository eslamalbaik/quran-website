import { Container, Group, ActionIcon, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

const Footer = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title order={3} size="1.5rem" className={classes.title} onClick={() => navigate('/')}>
           <span className={classes.highlight}>موقع </span>
           القرآن  
        </Title>

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <a className={classes.anchor} href="https://github.com/eslamD7" target="_blank" rel="noreferrer noopener">
              <IconBrandGithub size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a className={classes.anchor} href="https://www.youtube.com/channel/UCbLuuDn6fOytNr5nNDtJ7ag" target="_blank" rel="noreferrer noopener">
              <IconBrandYoutube size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a className={classes.anchor} href="https://twitter.com/eslam_D7" target="_blank" rel="noreferrer noopener">
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
