import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import axios from "axios";

export const userSlice = createSlice({
    name: "users", // asi me refiero a esto dentro del estado
    initialState: {
        list:[] //arranca vacio la lista de usuarios
    },
    reducers:{

    }   
})

export default userSlice.reducer; // exportamos solo el reducer para llevarlo al store que tiene el estado global con todos los reducers

export const fetchAllUsers = () => () => { // funcion que retorna otra funcion
    axios.get("https://reqres.in/api/users?per_page=12").then((response) => {}).catch((error) => console.log(error))

}