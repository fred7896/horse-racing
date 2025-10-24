import React, { useEffect } from 'react';
import { useGameStore } from './store/useGameStore';
import Stables from './pages/Stables';

import horsesData from './data/horses.json';
import usersData from './data/users.json';
import racesData from './data/races.json';
import leaguesData from './data/leagues.json';

const App = () => {
  const initializeGame = useGameStore((state) => state.initializeGame);

  useEffect(() => {
    initializeGame({
      users: usersData,
      horses: horsesData,
      races: racesData,
      leagues: leaguesData,
    });
  }, [initializeGame]);

  return <Stables />;
};

export default App;
