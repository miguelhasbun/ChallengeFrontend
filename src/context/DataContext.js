import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/';

export const DataContext = React.createContext({});

export const DataContextProvider = ({children}) =>{
    const [data, setData] = React.useState([]);

    const handleNodeRemoval = async (id) => {
        const filterData = data.filter(el => {
            return el.id !== id;
        });
        setData(filterData);
        //Fetch Delete
        await axios.delete(API_URL+id);
    }

    const handleSubmit = async (e,task) =>{
        e.preventDefault();
        console.log(task);
        let response = await axios.post(API_URL, task);
        console.log(response);
        task.id = response.data.task.id;
        setData([...data,task]);
        //Fetch Post
        e.target.reset();
    }

    const handleToggleComplete = async (id) =>{
        const newData = data.map(item => {
            if(item.id !== id) return item;
            item.finalizado = !item.finalizado;
            return item;
        })
        setData(newData);
        let task = data.find(task => task.id === id);
        //Fetch Put
        console.log(newData);
        await axios.put(API_URL+id, task);
    }

    React.useEffect(()=>{
        const fetchData = async () =>{
            const response = await axios.get(API_URL);
            // Fethc y setData
            setData(response.data);
        }
        fetchData();
    },[]);

    return (
        <DataContext.Provider value={{
            data,
            setData,
            handleNodeRemoval,
            handleSubmit,
            handleToggleComplete
        }}>
            {children}
        </DataContext.Provider>

    )
}