const BASE_URL = "http://localhost:8080";
const RESOURSE_URL = `${BASE_URL}/hamsters`;


const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllHamsters = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};


export const getHamster = async (id) => {
    const rawResponse = await baseRequest({ urlPath: `/${id}`, method: "GET" });

    return await rawResponse.json();
};


export const postHamster = (body) => baseRequest({ method: "POST", body });


export const updateHamster = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });


export const deleteHamster = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });