import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Container, Divider, Flex, Grid, Text, Title } from '@mantine/core';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { IconPlayerPlay } from '@tabler/icons';
import useStyles from './styles';

const Ayat = () => {
  const { alafasyAyat, englishAyat, indonesianAyat }: any = useLoaderData();
  const [isPlaySound, setIsPlaySound] = useState<boolean>(false);
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const playSoundHandler = (url: any) => {
    const audio = new Audio(url);
    setIsPlaySound(true);
    audio.play();
    audio.addEventListener('ended', () => setIsPlaySound(false));
  };

  return (
    <Container className={classes.container}>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.5 }} exit={{ opacity: 0, y: 100 }}>
        <Title order={2} className={classes.heading}>
           {englishAyat?.name}
        </Title>
        <Title order={3} className={classes.subHeading}>
          - {englishAyat?.numberOfAyahs} أيات -
        </Title>
      </motion.div>

      {alafasyAyat?.ayahs?.map((item: any, index: any) => (
        <motion.div key={item?.numberInSurah} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.5 * (index + 2) }} exit={{ opacity: 0, y: -100 }}>
          <Grid mt={0} align="center">
            <Grid.Col span={1}>
              <Title order={5} color="green">
                {item?.numberInSurah}
              </Title>
            </Grid.Col>
            <Grid.Col span={6} sx={{ textAlign: 'right' }}>
              <Title order={3} mb={0} sx={{ lineHeight: '3.4rem' }}>
                {item?.text}
              </Title>
            </Grid.Col>
          </Grid>
          <Flex justify="end" mt={0}>
            <Button rightIcon={<IconPlayerPlay size={16} />} color="green" radius="sm" size="xs" onClick={() => playSoundHandler(item?.audio)} disabled={isPlaySound}>
              استمع
            </Button>
          </Flex>
          <Divider my="lg" />
        </motion.div>
      ))}
      <Flex justify="end" mt={50}>
        <Button variant="light" color="green" onClick={() => navigate('/surah')}>
         العودة إلى قائمة السور
        </Button>
      </Flex>
    </Container>
  );
};

export const ayatLoader = async ({ params }: any) => {
  const { noSurah } = params;
  const response = await fetch(`https://api.alquran.cloud/v1/surah/${noSurah}/editions/ar.alafasy,en.transliteration,id.indonesian`);
  const { data } = await response.json();

  return { alafasyAyat: data[0], englishAyat: data[1], indonesianAyat: data[2] };
};

export default Ayat;
