function sumexternal() {
    var str1 = parseFloat(document.getElementById("int4").value);
    var str2 = parseFloat(document.getElementById("int5").value);
    var str3 = parseFloat(document.getElementById("int6").value);
    var result = str1+str2+str3;
    console.log(result);
    document.getElementById("outputSum2").innerHTML = result;
}