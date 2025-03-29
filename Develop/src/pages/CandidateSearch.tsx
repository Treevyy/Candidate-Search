import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface.tsx'

const CandidateSearch = () => {
  const [Candidate, setCandidate] = useState<Candidate[]>([]);
  const [results, setResults] = useState<Candidate>({
    login: '',
    id: '',
    avatar_url: '',
    html_url: '',
    name: '',
    location: '',
    email: '',
    company: '',
    bio: ''
  })
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
