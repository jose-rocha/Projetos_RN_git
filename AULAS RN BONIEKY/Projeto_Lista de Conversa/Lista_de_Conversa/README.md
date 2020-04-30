Pacotes usados nessa aula:

1: yarn add react-navigation

2: yarn add react-native-reanimated react-native-gesture-handler react-native-screens@2.0.0-beta.4  react-native-safe-area-context @react-native-community/masked-view

3: yarn add react-navigation-stack

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
