const host = 'http://localhost:8000'
const loginRoute = `${host}/api/auth/login`;
const registerRoute = `${host}/api/auth/register`;
const logoutRoute = `${host}/api/auth/logout`;
const allUsersRoute = `${host}/api/auth/allusers`;
const sendMessageRoute = `${host}/api/messages/addmsg`;
const recieveMessageRoute = `${host}/api/messages/getmsg`;

export {loginRoute, registerRoute, logoutRoute, 
    allUsersRoute, sendMessageRoute, recieveMessageRoute}