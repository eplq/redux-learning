import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string;
    surnames: string;
    age: number;
}

interface UserWithId extends User {
    id: string;
}

export interface UsersState {
    list: UserWithId[];
}

const initialState: UsersState = {
    list: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<User>) => {
            state.list.push({
                ...action.payload,
                id: crypto.randomUUID(),
            });
        },
        remove: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(
                (user) => user.id !== action.payload
            );
        },
    },
});

export const { add: addUser, remove: removeUser } = usersSlice.actions;

export default usersSlice.reducer;
