// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const BASE_URL = "http://localhost:4000";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    mode: "cors",
  }),
  endpoints: (builder) => ({}),
});
