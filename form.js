let formid = document.getElementById("googleForm")
let pipelineName = document.getElementById("pipeLineName")
let errorpipeline = document.getElementById("errorPipeline")
let gcsproject = document.getElementById("gcsProject")
let gcsnameerror = document.getElementById("gcsName")
let bucketName = document.getElementById("gcsBucketName")
let fileslocation = document.getElementById("gcslocation")
let credentials = document.getElementById("credentials")
let runminutes = document.getElementById("runevery")
let bucketerror = document.getElementById("gcsbucket")
let fileserror = document.getElementById("gcslocationerror")
let credentialserror = document.getElementById("gcscred")
let runeveryerror = document.getElementById("runeveryerror")



function validatelegth() {
    let gcsName = gcsproject.value
    let pipelinenamevalue = pipelineName.value;
    let bucketvalue = bucketName.value;
    let fileslocationvalue = fileslocation.value;
    let credentialsvalue = credentials.value;
    let runtimevalue = runminutes.value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var bucket = /[!@#$%^&*()_+\=\[\]{};'"\\|,.<>\?]+/;
    var location = /[!@#$%^&*()_+\=\[\]{};'"\\|,<>\?]+/;


    if (pipelinenamevalue.length < 5) {

        errorpipeline.textContent = "Pipeline name should be minimum 5 characters";
    } else if (pipelinenamevalue.startsWith("-") || pipelinenamevalue.startsWith("+") || pipelinenamevalue.startsWith("_")) {
        errorpipeline.textContent = "Pipeline name should not statrt with  _ or + or -"
    } else if (format.test(pipelinenamevalue)) {
        errorpipeline.textContent = "Pipeline Name should not consists of special characters"
    } else {
        errorpipeline.textContent = ""
    }
    if (gcsName.length < 5) {

        gcsnameerror.textContent = "Gcs name should be minimum 5 characters";
    } else if (gcsName.startsWith("-") || gcsName.startsWith("+") || gcsName.startsWith("_")) {
        gcsnameerror.textContent = "GCS name should not statrt with  _ or + or -"
    } else if (format.test(gcsName)) {
        gcsnameerror.textContent = "GCS name should not consists of special characters"
    } else {
        gcsnameerror.textContent = ""
    }
    if (bucketvalue.length < 5) {
        bucketerror.textContent = "Bucket name should be minimum 5 characters";
    } else if (bucketvalue.startsWith("-") || bucketvalue.startsWith("+") || bucketvalue.startsWith("_")) {
        bucketerror.textContent = "Bucket name should not statrt with  _ or + or -"
    } else if (bucket.test(bucketvalue)) {
        bucketerror.textContent = "Bucket name should not consists of special characters"
    } else {
        bucketerror.textContent = ""
    }
    if (fileslocationvalue.length < 5) {

        fileserror.textContent = "File name should be minimum 5 characters";
    } else if (fileslocationvalue.startsWith("-") || fileslocationvalue.startsWith("+") || fileslocationvalue.startsWith("_")) {
        fileserror.textContent = "File name should not statrt with  _ or + or -"
    } else if (location.test(fileslocationvalue)) {
        fileserror.textContent = "File name should not consists of special characters"
    } else {
        fileserror.textContent = ""
    }
    if (credentialsvalue.length < 5) {
        credentialserror.textContent = "Credentials should be minimum 5 characters";
    } else if (credentialsvalue.startsWith("-") || credentialsvalue.startsWith("+") || credentialsvalue.startsWith("_")) {
        credentialserror.textContent = "Credentials should not statrt with  _ or + or -"
    } else if (format.test(credentialsvalue)) {
        credentialserror.textContent = "Credentials should not consists of special characters"
    } else {
        credentialserror.textContent = ""
    }
    if (runtimevalue.length < 5) {

        runeveryerror.textContent = "Minutes should be minimum 5 characters";
    } else if (runtimevalue.startsWith("-") || runtimevalue.startsWith("+") || runtimevalue.startsWith("_")) {
        runeveryerror.textContent = "Minutes should not statrt with  _ or + or -";
    } else if (format.test(runtimevalue)) {
        runeveryerror.textContent = "Minutes should not consists of special characters";
    } else {
        runeveryerror.textContent = ""
    }
}


formid.addEventListener("submit", function(event) {
    event.preventDefault();
    validatelegth();

});
