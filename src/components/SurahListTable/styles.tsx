import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    paddingTop: 100,
  },

  th: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
  },

  link: {
    color: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}));

export default useStyles;
