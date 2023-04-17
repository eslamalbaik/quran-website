import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import useStyles from './styles';

const BaseLayout = () => {
  const { classes } = useStyles();
  const location = useLocation();
  const links = [
    {
      link: '/',
      label: 'الرئيسية',
    },
    {
      link: '/surah',
      label: 'السور',
    },
    {
      link:'/Sabha',
      label:'السبحة الالكترونية'
    }
  ];

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={{
          initial: {
            x: '100%',
            y: 0,
          },
          in: {
            x: 0,
            y: 0,
          },
          out: {
            x: '-100%',
            y: 0,
          },
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100vh',
          width: '100vw',
        }}
      >
        <div className={classes.root}>
          <Navbar links={links} />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BaseLayout;
