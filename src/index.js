exports.handler = async function(event) {
    console.log("Hallo aus dem lambda");
    const result = 42+404;
    console.log("result")
    console.log(result)
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/json" },
        body: JSON.stringify({ message: "Hello from my new Lambda node!"})
    };
};