import { Button } from '@mantine/core';
import type { NextPage } from 'next';
import { HeaderInfo } from '../components/HeaderInfo';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
    <HeaderInfo title="Home" content="A Recreational Cycling Club in Eastern North Carolina" />
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Button>Heres a button</Button>
        </h1>
      </main>
    </div>
    </>
  )
}

export default Home
