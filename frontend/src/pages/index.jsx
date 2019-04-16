import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './index.module.scss';

import { Notes, Archive } from '../containers';
import { Header, Footer } from '../components';

const Index = () => (
  <Router>
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        <Switch>
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/" component={Notes} />
        </Switch>
      </main>
      <Footer className={styles.footer} copyright="Кирилл Мисоченко" />
    </div>
  </Router>
);

export default Index;
