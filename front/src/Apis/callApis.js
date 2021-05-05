import axios from 'axios';



export function addTodos(data){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.post('http://localhost:3001/todos',data)
            .then((response)=>{
                res(response);
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}


export function getProduct(){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.get('http://localhost:3001/todos/')
            .then((response)=>{
                res(response);
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}

