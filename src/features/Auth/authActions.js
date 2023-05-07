import {
    createAsyncThunk
} from "@reduxjs/toolkit"
import axios from "axios"


export const RegisterUser = createAsyncThunk(
    "authUser/registerUser",
    async (userDetails, {
        rejectWithValue
    }) => {
        try {
       
             const response = await axios.post('http://localhost:3003/api/users', userDetails)
           

            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())
        }

    }
)

export const ResetPassword = createAsyncThunk(
    "authUser/resetPassword",
    async (userDetails, {
        rejectWithValue
    }) => {
        try {

             const response = await axios.post('http://localhost:3003/api/users/reset', userDetails)
           

            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())
        }

    }
)

export const loginUser = createAsyncThunk(
    "authUser/loginUser",
    async (loginDetails, {
        rejectWithValue
    }) => {
        try {
            // console.log(loginDetails);
             const response = await axios.post('http://localhost:3003/api/users/login',loginDetails)
           

            localStorage.setItem('user', JSON.stringify(response.data))
            return response.data
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data.message : error.message || error.toString())
        }
    }
)

export const logoutUser = createAsyncThunk(
    "authUser/logoutUser",
    async () => {
        try {
            const response = await localStorage.removeItem('user')
            return response
        } catch (error) {
            return error.message
        }
    }
)