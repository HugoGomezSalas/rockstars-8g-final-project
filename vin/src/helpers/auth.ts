const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVmMDBiYWMzN2FhZGMzNWExMDhhMGMiLCJlbWFpbCI6Imh1Z29nc2FsYXM3OUBnbWFpbC5jb20iLCJyb2wiOiJhZG1pbiIsImlhdCI6MTY1MDU3NzA3NywiZXhwIjoxNjUwNTg3ODc3fQ.ciw44_zll1IHgF_pbCtG5qDkBMTIj57-p-Aab0Z_bFE";

export const fetchAuth = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
