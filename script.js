$(document).ready(function(){
    $('#signup').validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            sname:{
                required:true,
                minlength:3
            },
            emailaddress:{
                required:true,
                email:true
            },
        }
    })
})