

exports.main = async function(event, context){
    console.log("mahender"+ JSON.stringify(event))
    return{

        statusCode: 200,
        body: 'Hello from Lambda!'
    }
}
