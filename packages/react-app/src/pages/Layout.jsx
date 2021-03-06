import React, { useContext } from 'react';
import styles from 'styles/Home.module.css';
import { Web3Context } from 'contexts/Web3Context';
import { Container } from '@chakra-ui/react';
import { Header, ConnectWeb3 } from 'components/index';

export const Layout = ({ children }) => {
  const { account, providerChainId } = useContext(Web3Context);
  const valid =
    !!account && (providerChainId === 100 || providerChainId === 137);

  // eslint-disable-next-line no-console
  // console.log(valid, account, providerChainId);

  return (
    <div>
      <Header>
        <div>Hello</div>
      </Header>
      <div className={styles.container}>
        <Container>{valid ? children : <ConnectWeb3 />}</Container>
      </div>
    </div>
  );
};
