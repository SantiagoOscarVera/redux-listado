import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users", // asi me refiero a esto dentro del estado
    initialState: {
        list: [] //arranca vacio la lista de usuarios
    },
    reducers: {
        setUserList: (state, action) =>{ // setUserList es una action
            state.list = action.payload;
        }
    },
})

export const { setUserList} = userSlice.actions;

export default userSlice.reducer; // exportamos solo el reducer para llevarlo al store que tiene el estado global con todos los reducers

export const fetchAllUsers = () => (dispatch) => { // funcion que retorna otra funcion // los dispatch me activan las actions
    return axios.get("https://reqres.in/api/users?per_page=12").then((response) => { 
        dispatch( setUserList(response.data.data))
    }).catch((error) => console.log(error))

}