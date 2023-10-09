import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID we6yQv0-k7KWV4nZ9NaRmvdll3pgsJRNJMJtqC7lc-k",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
