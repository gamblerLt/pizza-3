import HTTP from "./index";

const login = (data) => HTTP.post('/login', data);
const getUserById = (id) => {
    return HTTP.get(`/users/${id}`);
};
const createUser = (user) => {
    return HTTP.put(`/user`, user);
};

export {
    login,
    getUserById,
    createUser
}
