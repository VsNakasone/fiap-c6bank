import { Checkbox, FormControlLabel, Typography, Button, Container} from '@mui/material';
import React, {useState, useEffect, FormEvent} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';


const theme = createTheme();
export default function LoginPage() {

    const [empresa, setEmpresa] = useState<string | undefined | null | FormDataEntryValue>('');
    const [nome, setNome] = useState('');
    const [contador, setContador] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [open, setOpen] = useState<boolean>(false);
    

 useEffect(() => {
    if(contador == 0){
        document.title = `Executando useEffect a primeira vez ${contador}`;
    }else{
        document.title = `Executando useEffect a cada alteração ${contador}`;
    }
   // setContador(contador +1);
    console.log(`Executando useEffect a cada chamada ${contador}`);
},[contador]); 
    
useEffect (() => {
    if(nome.length > 0){
        console.log(`Executando useEffect mudando para maiúculo ${nome}`);
    }
},[nome])

useEffect(()=>{
    if(password && password.length < 6){
        setError(true);
        setErrorMessage('A senha deve ter no mínimlo 6 caracteres');
        //enviar o formulário para o servidor
    }else if(password){
        setError(false);
        setErrorMessage('');
        setOpen(true);
    }
},[password]);


const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
event.preventDefault();
//FormData- qualquer campo que estiver dentro da tag form é capturado por essa classe
const data = new FormData(event.currentTarget);

console.log(data.get('email'));
console.log(data.get('password'));

setEmail(data.get('email'));
setPassword(data.get('password'));
}
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box sx={{mt:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">
                    Login
            </Typography>

        <Box component='form' onSubmit={handleSubmit}>
                  
{/* <button onClick={()=>setContador(contador+1)}>Take the Shot</button>*/}
{ /* <button onClick={()=> setNome(nome.toLocaleUpperCase())}>Muda Nome</button>*/}
{/*'O State contador vale: ' + contador*/}

    <TextField margin='normal' required fullWidth id='email' label='Digite o e-mail' name='email' autoComplete='email' autoFocus/>
    <TextField margin='normal' required fullWidth id='password' type='password' label='Digite a senha' name='password' autoComplete='current-password' autoFocus/>
        <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Lembrar de mim"/>
        <Button type="submit" fullWidth variant="contained" sx={{mt:3,  mb:2}}>Entrar</Button>
             {error && <Typography color="error">{errorMessage}</Typography>}
        </Box>
    </Box>
    <Copyright site="https:www.avanade.com.br" sx={{mt:8, mb: 4}}/>
    
    {open && <Snackbar open={open} hide={6} message= 'Usuário autenticado com sucesso...Aguarde...' />}
    
    </Container>
    </ThemeProvider>
    
  )
}