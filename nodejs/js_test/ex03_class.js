class ApiResultData {
    constructor(){
        this.result;
        this.errorMessage;
        this.userName;
        this.age;
    }
}

function parseData(response){
    const apiResultData = new ApiResultData()
    apiResultData.result = response.result
    apiResultData.errorMessage = response.errorMessage
    apiResultData.username = response.user_name
    // apiResultData.age = response.age
    console.log(apiResultData)
}
const apiResponse = {
    result : true,
    user_name : '강감찬',
    age : 10,
    errorMessage : '정상처리됨',
}

parseData(apiResponse)
