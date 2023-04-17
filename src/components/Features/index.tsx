import { motion } from 'framer-motion';
import { Title, Text, Card, SimpleGrid, Container } from '@mantine/core';
import { IconUser, IconSearch, IconVolume } from '@tabler/icons';
import useStyles from './styles';

const featuresData = [
  {
    title: 'أنيق وسهل الاستخدام',
    description: 'تم تصميم التطبيق مع مراعاة نهج سريع الاستجابة وسهل الاستخدام',
    icon: IconUser,
  },
  {
    title: 'التلاوة',
    description: 'الاستماع إلى تلاوة صوتية',
    icon: IconVolume,
  },
  {
    title: 'البحث الذكي',
    description: 'بحث متقدم للغاية يتيح البحث عن أي شيء في القرآن.',
    icon: IconSearch,
  },
];

const Features = () => {
  const { classes } = useStyles();

  const features = featuresData.map((feature) => (
    <motion.div key={feature.title} whileHover={{ scale: 0.95 }}>
      <Card shadow="md" radius="md" className={classes.card} p="xl">
        <feature.icon size={50} stroke={2} color="green" />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    </motion.div>
  ));

  return (
    <Container size="lg" py="xl" className={classes.container}>
      <Title order={2} className={classes.title} align="center" mt="sm">
      ميزاتنا
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
      يوفر هذا التطبيق القرآني الفريد والغني بالمعلومات الكثير من الميزات المفيدة.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
