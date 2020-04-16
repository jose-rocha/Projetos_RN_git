Pacotes usados nessa aula:

1: yarn add react-navigation

2: yarn add react-native-reanimated react-native-gesture-handler react-native-screens@2.0.0-beta.4  react-native-safe-area-context @react-native-community/masked-view

3: yarn add react-navigation-stack

5: yarn add react-navigation-tabs

6: yarn add react-native-vector-icons

------  Observação: a tela Configs peguei umas dicas da aula de Switch para poder fazer o Switch da tela,
        Switch é a opção seleconar e não deixar selecionado.

A Tela de Specs para poder fazer um botão peguei dicas a respeito do ToucableOpacity na aula de WorkShop do sujeito programador aula Tarefas. ---


As configurações iniciais está baseada na aula do Sujeito Programador do módulo 8 "Navegação" -> Trabalhando com Tabs, para que o app funcionasse sem problemas.  


lembre que para funcionar o passar dedo e abrir o "Drawer" precisa configurar o arquivo MainActivity.java e deixa-lo como é mostradoabaixo:





package com.drawernavigator;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "DrawerNavigator";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate(){
    return new ReactActivityDelegate(this, getMainComponentName()){
      @Override
      protected ReactRootView createRootView(){
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
