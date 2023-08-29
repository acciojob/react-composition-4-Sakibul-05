import React,{useState} from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userDetails, setUserDetails] = useState({name:"", email:"", password:""});
    function formHandler(event){
        event.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
        setUserDetails({name:name, email:email, password: password})
        
    }
    console.log(userDetails)
  return (
    <div>
      <form onSubmit={formHandler}>
        <div className="nameField">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="emailField">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="passwordField">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
