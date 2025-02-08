const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getAllUsers = async ():Promise<IUser[]> => {
    return await fetch(baseUrl + '/users')
        .then(res => res.json())
};
