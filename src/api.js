import axios from "axios";

export async function getResource(baseURL,endpoint='')
{
    let {data} = await axios.get(baseURL+endpoint);
    return await data;
}

export async function UpdateResource(baseURL, endpoint='', data)
{
    return (await axios.put(baseURL+endpoint, data));
}

export async function deleteResource(baseURL, endpoint)
{
    return (await axios.delete(baseURL+endpoint));
}

export async function postResource(baseURL, endpoint, data)
{
    return (await axios.post(baseURL+endpoint, data));
}