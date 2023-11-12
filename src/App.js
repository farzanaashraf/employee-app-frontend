
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      "900": "#083c5d",
      "500": "#3884a7"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar/>
        <Container fixed sx={{mt:4}}>
          <Routes>
            <Route path='/' element={<Index/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/form' element={<EmployeeForm/>}></Route>
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}
 function Index(){
  return(
    <div>
      <Box component="h1" 
      sx={{ 
        fontSize: "68px",
        "-webkit-box-reflect": "below -20px linear-gradient(transparent, rgba(0,0,0,.2))",
        textAlign: "center",
        marginTop: "150px",
        color: "#083c5d"
      }}>Welcome to employee portal</Box>
    </div>
  );
  
 }
export default App;
