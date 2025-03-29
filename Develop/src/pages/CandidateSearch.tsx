import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface.tsx'

const CandidateSearch = () => {
  const [Candidate, setCandidate] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate>({
    login: null,
    id: null,
    avatar_url: null,
    html_url: null,
    name: null,
    location: null,
    email: null,
    company: null,
    bio: null
  })
  
  const candidateDetermination = async (candidateIsChoosen: boolean) => {
    if (candidateIsChoosen) {
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('savedCandidates')
      if (typeof savedCandidates === 'string') {
      parsedCandidates = JSON.parse(savedCandidates);
    }
    parsedCandidates.push(selectedCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
  };
  if (currentCandidateId + 1 < results.length) {
    setCurrentCandidateId(currentCandidateId + 1);
    await searchSpecificCandidate(results[currentCandidateId + 1].login || '')
    setCurrentCandidateId(0);
    await searchSpecificCandidate();
  };

  const [currentCandidateId, setCurrentCandidateId] = useState<number>(0);

  const searchSpecificCandidate = async (user: string) => {
    const data: Candidate = await searchGithubUser(user);

    setSelectedCandidate(data);
  }

  return <h1>Candidate Search</h1>;
};

export default CandidateSearch;
