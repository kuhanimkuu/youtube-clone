export const API_KEY = 'AIzaSyDEIk5IYWWvdun9ciUwKRVl5HybhOZZ7Uo';


export const valueConverter =(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value >=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}