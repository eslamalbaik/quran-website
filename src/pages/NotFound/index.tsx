import { Title, Text, Button, Container, Group } from '@mantine/core';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>لقد وجدت مكانًا سريًا.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
      للأسف ، هذه ليست سوى صفحة 404. ربما أخطأت في كتابة العنوان ، أو تم نقل الصفحة إلى عنوان URL آخر.
            </Text>
      <Group position="center">
        <Button variant="subtle" color="green" size="md" onClick={() => navigate('/')}>
        أعدني إلى الصفحة الرئيسية        </Button>
      </Group>
    </Container>
  );
};

export default NotFound;
