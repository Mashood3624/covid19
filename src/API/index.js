import  axios from 'axios';

const url = "https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true";

export const fetchdata = async() => {
    try{

        const { data: { deceased, infected, recovered, tested, sourceUrl } } =  await axios.get(url);

        return { deceased, infected, recovered, tested, sourceUrl }
    } catch(error){

    }
    
};

const urldaily = "https://api.apify.com/v2/datasets/9eUGCilmJ8HDf60mL/items?format=json&clean=1";

export const fetchdatadaily = async() => {
    try{

        const { data } =  await axios.get(urldaily);
        
        return data
    } catch(error){

    }
    
};