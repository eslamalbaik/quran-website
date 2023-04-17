import { motion } from 'framer-motion';
import { Container, Title } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import SurahListTable from '../../components/SurahListTable';
import useStyles from './styles';

const SurahList = () => {
  const surahListData: any = useLoaderData();
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.5 }} exit={{ opacity: 0, y: 100 }}>
        <Title order={2} className={classes.heading}>
        سور  القرآن     
           </Title>
        <Title order={3} mb={30} className={classes.subHeading}>
          - {surahListData.length} سورة -
        </Title>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 3 }} exit={{ opacity: 0, y: -100 }}>
        <SurahListTable data={surahListData} />
      </motion.div>
    </Container>
  );
};

export const surahListLoader = async () => {
  const response = await fetch('https://api.alquran.cloud/v1/surah');
  const { data } = await response.json();
  const filteredData = data.map((item: any) => {
    return {
      number: item.number.toString(),
      englishName: item.name,
      // englishNameTranslation: item.englishNameTranslation,
      numberOfAyahs: item.numberOfAyahs.toString(),
    };
  });
  return filteredData;
};

export default SurahList;
