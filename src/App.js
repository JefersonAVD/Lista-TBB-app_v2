import { useEffect, useState , createContext} from "react";
import ListPage from "./routes/page.js"
import axios from "axios";
import MockAdapter from "axios-mock-adapter"
import data from "./data/data.json"
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Theme from "./layout/theme/index"

let mock = new MockAdapter(axios);

const dataContext = createContext([])

mock.onGet("/data").reply(200,data.data.nodes);

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const resp = await axios.get("/data");
      setData(resp.data);
    }
    fetchData()
  }, [])

  if(!data.length){
    return <h1>Carregando...</h1>
  }
  
  return (
    <ThemeProvider theme={Theme}>
      <dataContext.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListPage/>}>
              <Route path="/:params" element={<ListPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </dataContext.Provider>
    </ThemeProvider>
     
  );
}

export {dataContext};
