import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    paddingTop: 100,
  },

  heading: {
    fontSize: 32,
    fontWeight: 600,
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },

  subHeading: {
    fontSize: 20,
    fontWeight: 400,
    color: 'green',
    textAlign: 'center',
  },
}));

export default useStyles;
