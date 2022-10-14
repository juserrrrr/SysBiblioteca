import { CssBaseline, Button, Typography, TextField, InputAdornment, Divider, CircularProgress } from "@mui/material"
import { AlternateEmail, Book, LockOpen } from '@mui/icons-material'
import { Box } from "@mui/system"
import React,{ FormEvent, useState } from "react"


function LoginPage() {
  const [email,setEmail] = useState<String>('');
  const [password,setPassword] = useState<String>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
    setIsLoading(true);
    setPassword('');
  }

  return(
    <>
    <CssBaseline/>
      <Box sx={{
        width:"100vw",
        height:"100vh",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',}}
        >
          <Box sx={{width:'800px',height:'400px',display:'flex'}}>

            <Box sx={{width:'30%',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Book sx={{fontSize:'200px',color:'white'}} />
            </Box>

            <Divider orientation="vertical" flexItem sx={{margin:'5%'}}/>
            
            <Box sx={{width:'70%',alignItems:"center",display:'flex',justifyContent:'center'}}>
              <Box sx={{width:'100%',height:'70%',flexDirection:'column',alignItems:'center',display:'flex',bgcolor:'white',borderRadius:'30px',textAlign:'center'}}>
                <Typography variant="h4" margin={2}>
                  Login
                </Typography>

                <Box component='form' autoComplete="off" onSubmit={handleSubmit} sx={{'& .MuiTextField-root': { m: 1, width: '35ch' },'& .MuiButton-root': { m: 1, width: '30ch' },flexDirection: 'column',}}>
                  <TextField
                    type='email'
                    label='Email'
                    required
                    disabled={isLoading}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <AlternateEmail />
                        </InputAdornment>),}}
                  />
                  
                  <TextField
                    type='password'
                    label='Senha'
                    required
                    disabled={isLoading}
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <LockOpen/>
                        </InputAdornment>),}}
                  />
                  <Button 
                    disableElevation
                    type="submit"
                    variant="contained" 
                    color="primary"
                    disabled={isLoading}
                    endIcon={isLoading && <CircularProgress variant="indeterminate" size={20}/>}
                    >  
                    Entrar
                  </Button>
                </Box>
              </Box>
            </Box>
            
          </Box>
      </Box>
    </>
  )
} 

export default LoginPage;
