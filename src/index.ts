
export const handler = async (event: {key1: string, key2: string, key3:string}) => {
    console.log("request:", JSON.stringify(event));

    // return response back to upstream caller
    return sendRes(200, "HELLLOOO7");
};

const sendRes = (status: number, body: string) => {
    return {
        statusCode: status,
        headers: {
            "Content-Type": "text/html",
        },
        body: body,
    };
};