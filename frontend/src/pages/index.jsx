import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Notes from '../components/Notes/Notes';
import Filter from '../components/Filter/Filter';

import styles from './index.module.scss';
import { StateContext } from '../contexts/stateContext';

import callApi from '../utils/callApi';

export default function Index() {
  const { state, setState } = useContext(StateContext);

  const fetchNotes = async () => {
    callApi('/notes').then(res => setState(res.results));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      {state && state.notes && state.notes.length > 0 && (
        <main className={styles.wrapper}>
          <Filter colors={state.colors} />
          <Notes colors={state.colors} notes={state.notes} />
        </main>
      )}
      <Footer copyright="Кирилл Мисоченко" />
    </div>
  );
}
