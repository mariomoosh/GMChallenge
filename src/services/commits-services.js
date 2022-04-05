import appConfig from "../configs/appConfigs";
import * as apiServices from "./apiServices";

const ghHeaders = {
    "Content-Type":"application/json",
    "Authorization":`Token ${appConfig.token}`
}

const getCommits = async ()=>{
    const response = await apiServices.SendRequest(`${appConfig.GitHubApiUrl}/commits`,apiServices.HTTPVERBS.Get,null,ghHeaders);
    return response;
}

export {getCommits}