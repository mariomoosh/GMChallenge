const SendRequest = async (url,method,postData = null,headers = null)=>{
    try{
        const requestOptions = {
            method,
            headers: headers,
            body: postData !== null ? JSON.stringify(postData) : null
        }

        const response = await fetch(url,requestOptions).then((response)=>{
            return response.ok 
                    ? response.json() 
                    : Promise.reject(response);            
        });
        return response;
    }catch(err){           
        return {
            error:true,
            message:"Unexpected error happened!"
        };
    };
}

const HTTPVERBS = {
    Get:"get",
    Post:"post",
    Put:"put",
    Delete:"delete"
}

export { SendRequest , HTTPVERBS };