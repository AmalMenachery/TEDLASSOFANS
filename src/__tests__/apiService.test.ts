import nock from 'nock';
import { getEpisodes } from '../services/apiService';

describe('API Service', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('fetches episodes successfully', async () => {
    const mockData = [{ id: 1, name: 'Pilot' }];

    nock('https://api.tvmaze.com')
      .get('/shows/44458/episodes')
      .reply(200, mockData);

    const episodes = await getEpisodes();
    expect(episodes).toEqual(mockData);
  });

  it('handles API failure', async () => {
    nock('https://api.tvmaze.com')
      .get('/shows/44458/episodes')
      .reply(500);

    const episodes = await getEpisodes();
    expect(episodes).toEqual([]);
  });
});