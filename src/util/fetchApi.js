
class ApiGetter{
    constructor(callAdress){
        this.callAdress = callAdress; 
    }
   async makeApiCall(callback,errorCallback){
        fetch(this.callAdress)
        .then(res => {
            if(callback != null){
                callback(res.json)
            }else{
                console.error("No callback");
            }
        }, (err) => {
            errorCallback(err)
        })
    }
}

export default ApiGetter