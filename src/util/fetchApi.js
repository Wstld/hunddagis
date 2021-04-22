
class ApiGetter{
    constructor(callAdress,abortController){
        this.callAdress = callAdress;
        this.abortController = abortController; 
    }
   async makeApiCall(callback,errorCallback){
        fetch(this.callAdress, {signal: this.abortController})
        .then(res => res.json())
        .then((result) => {
            if(callback != null){
                callback(result)
            }
            else{
                console.error("No callback")
            }
        },
        (error) => {
            if(error.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                if (errorCallback != null){
                    errorCallback(error)
                }else{
                    console.error(error)
                }
            }
           
        }
        
        )
    }
}

export default ApiGetter