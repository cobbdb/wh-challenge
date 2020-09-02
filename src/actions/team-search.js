import axios from 'axios';
import { store } from '../store';

export default async () => {
  try {
    const { data } = await axios({
      url: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php',
      params: { t: 'new_york_yankees' },
    });
    store.dispatch({ type: 'LOAD_TEAM', team: data.teams[0] });
  } catch (error) {
    store.dispatch({ type: 'LOAD_TEAM_ERROR' });
  }
};
