import { getEpisodes } from '../services/apiService';
import axios from 'axios';

jest.mock('axios');

describe('API Service', () => {
  it('fetches episodes successfully', async () => {
    const mockData = [{ id: 1, name: 'Pilot' }];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const episodes = await getEpisodes();
    expect(episodes).toEqual(mockData);
  });

  it('handles API failure', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('API Error'));
    const episodes = await getEpisodes();
    expect(episodes).toEqual([]);
  });
});
