const API = 'https://rickandmortyapi.com/api/character';

const getData = async (id) =>{
  //  if api url has an ID, return the api+id else only the api with all the characters
  const apiUrl = id ? `${API}{id}` : API;
  try {
    const response = await fetch(apiUrl);
    // transform the response into a json object
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
}

export default getData;