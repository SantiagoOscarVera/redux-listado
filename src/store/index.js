import { configureStore } from "@reduxjs/toolkit";
import users from "./reducer-slices/users";

export default configureStore({
    reducer: { // reducer del store que esta formado por varios reducers que vienen de la carpeta slice
        users
    }
})