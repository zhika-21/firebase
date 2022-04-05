<div> 
<h1>Register</h1>
<input  onChange={(e)=> setNewUser({...newUser,email:e.target.value})} placeholder="type your email"/>
<input  onChange={(e)=> setNewUser({...newUser,password:e.target.value})} placeholder="type your password"/>
<button onClick={()=>sigUpwithEmailAndPassword(newUser.email,newUser.password)}>Register</button>
</div>
<div>
<button onClick={()=> logOut()}>Log out {user?.email}</button>
</div>
<div>
<h1>Login</h1>
<input  onChange={(e)=> setLoginUser({...loginUser,email:e.target.value})} placeholder="type your email"/>
<input  onChange={(e)=>setLoginUser({...loginUser,password:e.target.value})} placeholder="type your password"/>
<button onClick={()=>logignWithEmail(loginUser.email,loginUser.password)}>Login </button>
</div>