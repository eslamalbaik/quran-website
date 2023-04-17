import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'grid',
    placeItems: 'center',
    [theme.fn.largerThan('md')]: {
      height: '100vh',
      width: '800vh',

    },

    [theme.fn.smallerThan('md')]: {
      paddingTop: 100,
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:'40px',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
      order: 2,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  text: {
    maxWidth: 500,
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      order: 1,
      maxWidth: 600,
      paddingBottom: '1rem',
      margin: '0 auto',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: 'green' }).background,
    color: 'green',
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default useStyles;
