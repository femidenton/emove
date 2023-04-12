import axios from "./axios";

export const signUpUser = async (data: any) => {
  try {
    const response = await axios.post(
      "/users/register",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const verifyUser = async (id: string, token: string) => {
  try {
    const response = await axios.get(`/users/verify/${id}/${token}`)
    return response.data
  } catch (error: any) {
    return error.response;
  }
}

export const loginUser = async (data: any) => {
  try {
    const response = await axios.post("/users/login", JSON.stringify(data), {
      headers: { "Content-Type": "application/json", accept: "*/*" },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const fetchRoutes = async() => {
  try {
    const response = await axios.get("/users/getAllRoutes")
    return response.data;
  } catch (err) { 
    return err;
  }
}