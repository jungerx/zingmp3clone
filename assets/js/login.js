$(".formSignIn").validate({
	rules: {
    name: {
    	required: true,
    	maxlength:50,
    	regex:/^[a-zA￾ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/i
    	
    },
    
    password: {
        required: true,
        
    },
 

},
messages:{
    name: {
    	required: 'Vui lòng nhập user name',
    	maxlength:'Vui lòng nhập không quá 50 ký tự',
    	regex:'Vui lòng nhập user name',
    },
   
    password: {
        required: 'Vui lòng nhập mật khẩu',
        regex: 'Vui lòng nhập mật khẩu bao gồm số, ký tự đặc biệt,chữ thường,chữ hoa'
    },
   
   
},
});

$(".formSignUp").validate({
	rules: {
    
    nameSign: {
    	required: true,
    	maxlength:50,
    	regex:/^[a-zA￾ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/i
    	
    },
    email: {
    	required: true,
    	email: true
    }
   ,
    
    passwordSign: {
      required: true,
  },

},
messages:{
    
    nameSign: {
    	required: 'Vui lòng nhập user name',
    	maxlength:'Vui lòng nhập không quá 50 ký tự',
    	regex:'Vui lòng nhập user name',
    },
    email: {
    	required: 'Vui lòng nhập emali',
    	email: 'Vui lòng nhập đúng định dạng email. vd:...@gmail.com'
    },
   
    passwordSign: {
      required: 'Vui lòng nhập mật khẩu',
      regex: 'Vui lòng nhập mật khẩu '
  },
   
},
});

$.validator.addMethod(
  "regex",
  function(value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  },
  "Please check your input."
);

// signUp
let user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
const form = document.querySelector(".formSignUp");
form.onsubmit = function (e) {
  e.preventDefault();
  let username = form.nameSign.value;
  let password = form.passwordSign.value;
  let data = {
    username: username,
    password: password,
  };
  if(!username || !password){
    return;
  }
  user.push(data);
  localStorage.setItem("user", JSON.stringify(user));
  form.reset();
  confirm('Bạn đã đăng kí thành công');
};

// signIn
const formSignIn = document.querySelector(".formSignIn");
const valUser=document.querySelector('#name');
const valPassword=document.querySelector('#password');
let users = JSON.parse(localStorage.getItem("user"));
let userLogin=[]
formSignIn.onsubmit = function (e) {
  e.preventDefault();
  const isUser=valUser.value;
  const isPass=valPassword.value;
  users.map(function(item) {
    checkName=item.username
    checkPass=item.password
    if(isUser===checkName && isPass===checkPass){
      alert("Đăng nhập thành công")
     return window.location.href = "../index.html";
    }else{
      return alert("Sai tài khoản hoặc mật khẩu")
    }
  });
  let isLogin = {
    isUser: isUser
  };
  userLogin.push(isLogin);
  localStorage.setItem("userLogin", JSON.stringify(userLogin));
}



