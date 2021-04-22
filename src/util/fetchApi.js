
class ApiGetter{
    constructor(callAdress){
        this.callAdress = callAdress; 
    }
   async makeApiCall(callback,errorCallback){
        fetch(this.callAdress)
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
            if (errorCallback != null){
                errorCallback(error)
            }else{
                console.error(error)
            }
        }
        
        )
    }
}

export default ApiGetter