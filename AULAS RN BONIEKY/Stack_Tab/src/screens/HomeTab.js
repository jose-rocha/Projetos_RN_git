import { createDrawerNavigator} from 'react-navigation-drawer';


import Specs from './Specs';
import Sobre from './Sobre';

const HomeTabNavigator = createDrawerNavigator({
  
    Specs:{
        screen: Specs
    },
    Sobre: {
        screen: Sobre
    }

});

export default HomeTabNavigator;