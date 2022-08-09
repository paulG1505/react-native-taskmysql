const API = 'http://10.0.2.2:3000/tasks'
export const getTasks = async () => {
    const resp = await fetch(API);
    return await resp.json();

}

export const getTask = async (id) => {
    const resp = await fetch(`${API}/${id}`);
    return await resp.json();
}

export const saveTask = async (newTask) => {
    const resp = await fetch(API, {
        method: 'POST',
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    })
    return await resp.json();
}

export const deleteTask = async idTask => {
    await fetch(`${API}/${idTask}`, {
        method: 'DELETE'
    })
}

export const updateTask = async (idTask,newTask) => {
    const resp = await fetch(`${API}/${idTask}`,{
        method: 'PUT',
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
   })
   return resp.json();
}