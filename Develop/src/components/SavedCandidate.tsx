import type { Candidate } from '../interfaces/Candidate.interface.tsx'
import { IoRemoveCircle } from 'react-icons/io5'

type SavedCandidateListProps = {
    candidate: Candidate;
    removeCandidate: (id: number) => void
};

const SavedCandidates = ({
    candidate,
    removeCandidate,
}: SavedCandidateListProps) => {
    return (
      <tr>
        { candidate ? (
            <>
                <td>
                    <img
                        src={`${candidate.avatar_url}`}
                        alt={ `Profile of ${candidate.login}` }
                        style={{
                            width: '70px',
                            borderRadius: '10px',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    />
                </td>
                <td>
                    <a href={candidate.html_url || ''} target="_blank" rel="noreferrer">
                        <h3 style= {{ color: 'white'}}>
                            {candidate.name}
                            <br />
                            <em>({candidate.login})</em>
                        </h3>
                    </a>
                </td>
                <td>{candidate.location}</td>
                <td>
                    <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
                </td>
                <td>{candidate.company}</td>
                <td>
                    <IoRemoveCircle
                        style={{
                            color: 'red',
                            margin: '0 auto',
                            display: 'block',
                            cursor: 'pointer',
                            fontSize: '50px',
                        }}
                        onClick={ () => removeCandidate(candidate.id || 0) }
                    />
                </td>
            </>
        ) : (
            <h2>No Saved candidates available</h2>
        )}
      </tr>  
    )
}

export default SavedCandidates;