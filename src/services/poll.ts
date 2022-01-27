import axios from 'axios';
import { RequestPollType, AlternativesType } from './interfaces';

interface FarmProps {
  votingId: number,
  participants: AlternativesType[]
}

const farm = async (): Promise<FarmProps> => {

    const url = "https://voting-voting-info.r7.com/v1/programs/3/active-voting";

    const defaultValue: FarmProps = {
      votingId: -1,
      participants: []
    };

    return await axios.get<RequestPollType>(url)
                    .then(({ data }) => {
                        if(data.status == "success"){
                            const participants = { 
                              votingId: data.data.voting_id, 
                              participants: data.data.alternatives
                            };
                            return participants;
                        }
                        return defaultValue;
                    })
                    .catch((error) => {
                        return defaultValue;
                    })
}

const vote = async (voting_id: number, alternative_id: number): Promise<void> => {

    const url = "https://cors-anywhere.herokuapp.com/https://voting-vote-producer.r7.com/vote";
    const chosen = { voting_id, alternative_id };
    const requestOptions = {
      headers: { 
          'Content-Type': 'application/json',
          'Cache-Control' : 'no-cache',
      },
  }

    return await axios.post(url, chosen, requestOptions);
}

export { farm, vote }