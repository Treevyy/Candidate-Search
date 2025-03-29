import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface.tsx'

const CandidateSearch = () => {
  const [Candidate, setCandidate] = useState<Candidate[]>([]);
  const [results, setResults] = useState<Candidate>({
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
  return <h1>Candidate Search</h1>;
};

export default CandidateSearch;
