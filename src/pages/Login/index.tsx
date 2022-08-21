import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [emial,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleLogin = async() =>{
    if(emial && password ){
      const isLogged = await auth.signin(emial,password);
      console.log(isLogged);
      if (isLogged){
        navigate('/');
      }else{
        alert("Não deu certo");
      }
    }
  }

  return (

    <div>
      <h2>Página Fechada</h2>

      <input type='text'
             value={emial}
             onChange={ (e) => setEmail(e.target.value)}
             placeholder='Digite seu e-mail'
      />
      <input type='password'
             value={password}
             onChange = {(e) => setPassword(e.target.value)}
             placeholder='Digite sua senha'
      />

      <button onClick={()=>handleLogin()}>Logar</button>
    </div>
  )
}