import { ItemType } from 'antd/es/menu/hooks/useItems';
import { Link } from 'react-router-dom';

export const menuDummy: ItemType[]  = [
    {
        key:'home',
        icon:null,
        label:(
            <Link to="/home"  rel="noopener noreferrer">
             Home
            </Link>
          ),

    },
    {
        key:'buttons',
        icon:null,
        label:(
            <Link to="/buttons"  rel="noopener noreferrer">
             Button
            </Link>
          )

    },
    {
        key:'inputs',
        icon:null,
        label:(
            <Link to="/inputs"  rel="noopener noreferrer">
              Inputs
            </Link>
          )

    },

]