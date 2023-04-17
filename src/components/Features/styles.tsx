import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    [theme.fn.smallerThan('md')]: {
      marginTop: 100,
    },
  },

  title: {
    fontSize: 34,
    fontWeight: 700,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: 'green',
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  },

  card: {
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: 'green',
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default useStyles;
