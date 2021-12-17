import axios from 'axios';

async function getData(page) {
    try{
        const {data} = await axios.get(`https://api.stackexchange.com/2.3/questions?page=${page}&pagesize=20&order=asc&min=10&max=100&&sort=votes&site=stackoverflow`);
        return { data }
    }catch(err){
        // alert(err.toString())
        return { err }
    }
}

export {
   getData
}