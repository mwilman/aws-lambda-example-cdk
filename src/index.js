exports.handler = async function(event) {
    console.log("Hallo aus dem lambda");
    const result = 42+404;
    console.log("result")
    console.log(result)
    console.log("request:", JSON.stringify(event, undefined, 2));

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello, CDK! key1 is: ${event.key1}\n`
    };
};