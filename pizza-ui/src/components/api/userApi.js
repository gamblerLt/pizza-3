import HTTP from "./index";

const createUser = (user) => HTTP.post('/users', user);
const getUserById = (id) => HTTP.get(`/users/${id}`);

export {
    createUser,
    getUserById
}

