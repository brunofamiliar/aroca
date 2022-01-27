import React, { 
  useEffect,
  useState
} from 'react'

import { farm, vote } from '../services/poll';
import { AlternativesType } from '../services/interfaces';

import Header from './Header'
import Welcome from './Welcome'
import Button from './Button'
import Participants from './Participants'
import { Container, Content, WrapperPoll } from './styles'

interface SelectedProps{
  id: number;
  index: number,
  overlap: Array<boolean>,
  overlapChange: boolean,
  setParticipantSelected: (e: number) => void,
  setOverlap: (e: any) => void
}

const setSelected = (items: SelectedProps) => {
  
  const { id, index, overlap, overlapChange, setParticipantSelected, setOverlap } = items;

  let overlapCopy = [...overlap]; 
  overlapCopy = overlapCopy.map(() => ( overlapChange ))
  
  if(overlapChange) {
    overlapCopy[index] = false;
  }

  setParticipantSelected(id);
  setOverlap(overlapCopy);
}

const screen: React.FC = () => {

  const [participants, setParticipants] = useState<AlternativesType[]>([])
  const [votingId, setVotingId] = useState(0)
  const [processedVotes, setProcessedVotes] = useState(0)
  const [participantSelected, setParticipantSelected] = useState(-1)
  const [overlap, setOverlap] = useState<Array<boolean>>([]);

  useEffect(() => {
    farm().then(result => { 
      setParticipants(result.participants)
      setVotingId(result.votingId)
    })
  }, []);

  useEffect(() => {
    const overlapCopy = [...overlap]

    participants.forEach(() => { overlapCopy.push(false) })

    setOverlap(overlapCopy)

  }, [participants]);

  return (
    <Container>
      <Header />
      <Content>
          <WrapperPoll>
            <h1 className="question"> Quem que você quer que fique em A Fazenda? </h1>
            <div className="survey">
              { participants.map( ({ id, name, photo }, index: number) => {
                return (
                  <Participants 
                    onClick={() => {
                      if(!(id === participantSelected)){
                        const items:SelectedProps = {
                          id, 
                          index, 
                          overlap: overlap, 
                          overlapChange: true, 
                          setParticipantSelected, 
                          setOverlap
                        }

                        setSelected(items)
                      }else{
                        const items:SelectedProps = {
                          id: -1, 
                          index, 
                          overlap: overlap, 
                          overlapChange: false, 
                          setParticipantSelected, 
                          setOverlap
                        }
                        
                        setSelected(items)
                      }
                    }} 
                    overlap={overlap[index]}
                    isSelected={participantSelected} 
                    id={id} 
                    photo={photo} 
                    name={name} 
                  />
                )
              }) }
            </div>
            <div className="wrap-button-and-processed-votes">
              <div className="wrap-voting-buttons">
                <Button 
                  onClick={() => { 
                    vote(votingId ,participantSelected)
                      .then(() => { setProcessedVotes(processedVotes + 1) })
                      .catch(console.log)
                      }
                  } 
                  disabled={participantSelected == -1} 
                  text="Votar" />
                <Button disabled={participantSelected == -1} text="Deixar votando" />
              </div>
              <div className="wrap-processed-votes">
              Votos processados nessa seção:<span className={processedVotes ? 'wrap-processed-votes-green' : 'wrap-processed-votes-red'}>{processedVotes}</span>
              </div>
            </div>
          </WrapperPoll>
          <Welcome/>
      </Content>
    </Container>
  )
}

export default screen