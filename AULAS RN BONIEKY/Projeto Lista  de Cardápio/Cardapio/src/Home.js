import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import HomeList from './HomeList';
import HomeProducts from './HomeProducts'

const Navegador = createStackNavigator ({
    HomeList:{
        screen: HomeList,
        navigationOptions:{
            title: 'Restaurante',
            headerTitleAlign: 'center'
          
        }
        
    },
    HomeProducts:{
        screen: HomeProducts,
            navigationOptions: ({navigation})=>  ({ 
                title:navigation.state.params.title,
                tabLabel:'',
                tabBarIcon:({focused, tintColor})=> {
                    if(focused){
                        return  (
                            <Image  source={require('../assets/images/home_azul.png')} style={styles.icone} />
                        )
                    } else {
                        return  (
                            <Image  source={require('../assets/images/home_preto.png')} style={styles.icone} />
                        )
                    }
                }
            
                

            })
    }
});

export default  createAppContainer(Navegador);