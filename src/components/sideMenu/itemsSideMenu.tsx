import { Book, Home, Person } from "@mui/icons-material";

type typeItemsMenu = {
  icon:JSX.Element;
  toURL:string;
  name_category:string;
  expand_more:boolean
  submenu?:string[];
}
export const itemsMenu:typeItemsMenu[] = [
  {
      icon: <Home/> ,
      toURL:"",
      name_category:'Pagina Inicial',
      expand_more:false, 
  },

  {
      icon: <Person /> ,
      toURL:"",
      name_category:'Usuarios',
      expand_more:false, 
  },

  {
      icon: <Book />,
      toURL:"",
      name_category:'Livros',
      expand_more:false, 
  },
  
]