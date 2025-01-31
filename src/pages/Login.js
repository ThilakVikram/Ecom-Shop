export default function Login() {
    let credential = {name:"Thilak Vikram R",password:"thilak11"}
    let inputCredential = {inputName:"",inputPassword:""};
    let OnSubmit = ()=>{
        if(inputCredential.inputName == credential.name && inputCredential.inputPassword == credential.password){
            alert("Logged In")
        }
        else{
            alert("Please Try Again");
        }
    }
    return (
        <div className="w-full h-full bg-gradient-to-r from-green-700 to-gray-300 flex items-center justify-center">
            <div className="max-w-full w-96 min-w-96 aspect-square bg-gray-800 rounded-3xl shadow-xl p-8 text-gray-300">
                <div className="w-full h-fit overflow-hidden relative flex-col flex bg-gradient-to-b rounded-xl p-6 shadow-lg shadow-gray-900 justify-center">
                    <span className="text-3xl font-semibold tracking-wider w-full text-center uppercase">Welcome Back</span>
                    <span className="mt-4  text-lg font-bold w-full text-center">NAME</span>
                    <input 
                        className="text-center w-full h-12 text-xl p-4 mt-1 outline-none text-gray-700 rounded-xl bg-gray-100 shadow-md shadow-gray-600 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-600"
                        placeholder="Enter your name"
                        onChange={(e)=>{
                            inputCredential.inputName = e.target.value;
                            console.log(credential);
                        }}
                    />
                    <hr className="my-4 border-gray-600" />
                    
                    <span className=" text-lg font-bold w-full text-center">PASSWORD</span>
                    <input 
                        className="text-center w-full h-12 text-xl p-4 mt-1 outline-none text-gray-700 rounded-xl bg-gray-100 shadow-md shadow-gray-600 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-600"
                        type="password" 
                        placeholder="Enter your password"
                        onChange={(e)=>{
                            inputCredential.inputPassword = e.target.value;
                            console.log(credential)
                        }}
                    />
                    
                    <button 
                        className="mt-6 w-full font-semibold  bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 ease-in-out py-3 rounded-xl transform hover:scale-105"
                        onClick={OnSubmit}
                    >
                        LOGIN
                    </button>

                    <div className="mt-5 text-center text-gray-400 text-sm">
                        <a href="#" className="hover:text-white transition-all duration-200">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}