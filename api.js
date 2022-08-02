const API = 'http://10.0.2.2:3000/tasks'
export const getTasks = async () => {
    const resp = await fetch(API);
    return await resp.json();

}