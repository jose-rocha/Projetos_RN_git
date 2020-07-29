import React from 'react';
import { View, StatusBar,} from 'react-native';
import {Container, HeaderPinkPai, ImgProfile,
         InputSearch, BtnSearch, NUser, Qtde,
        Celo,TPGestacao, TDica, ImgQtde, TextQtde
        } from './styles';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icone from  'react-native-vector-icons/Ionicons';



export default function Home() {
    return (
        <Container /* style={styles.container} */ >
            <StatusBar
                barStyle={'dark-content'} //por padrão a letra da StatusBar já é branca
                hidden={true} //aqui esconde a StatusBar
                backgroundColor="#da5388"
            />
            <HeaderPinkPai /* style={styles.rosa} */>
                  <View>
                        
                        <InputSearch
                            placeholder="Search"
                            placeholderTextColor="#fff"
                        /* style={styles.SearchInput} */
                        />
                        <BtnSearch /* style={styles.btnSearch} */>
                            <EvilIcons
                                name="search"
                                size={30}
                                color="#fff"
                                // style={styles.iconSearch}
                            />
                        </BtnSearch>
                    </View> 

                    <ImgProfile >
                        <ImgQtde>
                            <TextQtde>4</TextQtde>
                        </ImgQtde>            
                    </ImgProfile>    

                <NUser>
                    Maria alves 
                </NUser>  

                <Qtde>
                    12 Total     
                </Qtde> 

                <Celo>
                <Icone name="pricetag"   color="yellow" />
                </Celo>

                <TPGestacao >
                    Programa Gestação
               </TPGestacao>
               
            </HeaderPinkPai>
            <TDica>Dicas</TDica>
        </Container>
    );
}
/* const styles = StyleSheet.create({
    container: {},
    rosa: {
        backgroundColor: '#da5388',
        height: 190,
    },
     SearchInput: {
        backgroundColor: '#e05d87',
        borderRadius: 25,
        width: 250,
        marginLeft: 30,
        paddingLeft: 20,
    }, 
      btnSearch: {
        // backgroundColor: 'black',
        width: 25,
        marginLeft: 240,
        marginTop: -35,
    }, 
    iconSearch: {
        marginLeft: -2,
    },

   
    
}); */