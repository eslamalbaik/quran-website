import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: '#fff',
    marginTop: 100,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: 'green',
    cursor: 'pointer',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },

  anchor: {
    color: 'inherit',
  },

  highlight: {
    color: '#000',
    fontSize: '1.2rem',
  },
}));

export default useStyles;
