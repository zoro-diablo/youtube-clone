import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchFromApi } from "../utils/fetchFromApi";
import Videos from "../components/Videos";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data: videos, isLoading, isError } = useQuery(
    ["searchVideos", searchTerm],
    () => fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => data.items)
  );

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h5" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
