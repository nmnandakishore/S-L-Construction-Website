document.querySelector("#contact-form-send").addEventListener('click', function(e){
    document.querySelector("#modal .loading").setAttribute("style", "display: inline-block;");
    document.querySelector("#modal #toggleModalButton").classList.add('hidden');

    var name = document.querySelector("input#input-name").nodeValue;
    var phone = document.querySelector("input#input-phone").nodeValue;
    var workType = document.querySelector("#input-job").nodeValue;

    var msg = document.querySelector("input#msg") ? document.querySelector("input#msg").nodeValue : "";
    
    var xhr = new XMLHttpRequest();

    var url = 'https://script.google.com/macros/s/AKfycbweQx0SNw1f3qClrTBxQfrhi4c0QbEM2TkdorwZDHV4inRtIvvkFhZM3JszjE0Q8I-mVA/exec';
    xhr.open("POST", url, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        document.querySelector("#modal .loading").removeAttribute("style");
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            if(xhr.responseText === 1){
                document.querySelector("#modal .success-icon").classList.remove('hidden');
                document.querySelector("#modal .failure-icon").classList.add('hidden');
                document.querySelector("#modal .text").innerHTML = "Your message was sent. Someone will reach you shortly. Thank you.";
            } else {
                document.querySelector("#modal .success-icon").classList.add('hidden');
                document.querySelector("#modal .failure-icon").classList.remove('hidden');
                document.querySelector("#modal .text").innerHTML = "Something went wrong. Your message couldn't be sent. Please try again after a while.";                
            }
        } else if(this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
            document.querySelector("#modal .success-icon").classList.add('hidden');
            document.querySelector("#modal .failure-icon").classList.remove('hidden');
            document.querySelector("#modal .text").innerHTML = "Something went wrong. Your message couldn't be sent. Please try again after a while";                        
        }
        document.querySelector("#modal #toggleModalButton").classList.remove('hidden');
        document.querySelector("#modal #toggleModalButton").focus();
    }
   
    var postData = {
        "name" : name,
        "phone" : phone,
        "workType" : workType,
        "mag" : msg ? msg : ""
    }
    xhr.send(postData);

    
})




