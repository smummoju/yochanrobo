// const serverURL = "http://localhost:5000";

const fetchPlayerDetails = (email) => {
  return fetch(`/api/player/get?email=${email}`)
    .then((res) => res.json())
    .then(
      (result) => {
        if (!result) {
          return {};
        }
        return result;
      },
      (err) => {
        console.log(err);
      }
    );
};

const createNewPlayer = (data) => {
  const body = data;
  console.log(body);
  return fetch("/api/player/create/", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const savePlayerData = (data) => {
  const body = data;
  return fetch("/api/player/update/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export { fetchPlayerDetails, createNewPlayer, savePlayerData };
