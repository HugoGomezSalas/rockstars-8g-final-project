const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYwMzk3ZTA5MGQxYWE2Njg0ZDdhMzciLCJlbWFpbCI6Imh1Z29nc2FsYXM3OUBvdXRsb29rLmNvbSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNjUwNjUyOTQwLCJleHAiOjE2NTA2NjM3NDB9.mQF7Ji2uYCWLSL_62BP-ETvA37ojpKVgcfEcWS091HQ";

export const fetchAuth = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
