import { useState } from "react";

function ForgotPassword(){

const[oldPassword,setOldPassword]=useState("");
const[newPassword,setNewPassword]=useState("");

function handleReset(event){
    event.preventDefault();
    alert("Password Changed Successfully");
}

return(
   <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
            Reset Password
        </h1>
        
        <form onSubmit={handleReset}>
            
            <input

            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e)=>setOldPassword(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            
            />
            
            
            <input
            type="password" 
            placeholder="New Password"
            value={newPassword} 
            onChange={(e)=>setNewPassword(e.target.value)} 
            className="w-full p-3 border rounded mb-4" 
            
            />
            
            <button
            className="w-full bg-blue-500 text-white p-3 rounded"
            >
                Save Password
            </button>
            
        </form>
        </div>
        
        </div>
        );
    }

export default ForgotPassword;