Pacotes instalados no projeto

1: yarn add react-native-maps --save
	
2: yarn add @react-native-community/geolocation

3: yarn add react-native-maps-directions --save


colocar no  arquivo \mapsTeste3\android\app\src\main\AndroidManifest.xml  

<uses-permission android:name="android.permission.ACCESS_FINE_LOCATIONS" />

<meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="AIzaSyB1Z9KJesk94fXXzkPg87ocnyN7P5RX2GY"/>
<uses-library android:name="org.apache.http.legacy" android:required="false"/>                                  essa ultima é pra não dá problemas no emulador virtual




não precisa criar o link
4: react-native link react-native-maps

no arquivo index.js, a parte que usa a localização real do dispositivo agora ficou diferente da do curso.

pimeira usa o import novo

import Geolocation from '@react-native-community/geolocation';


 async componentDidMount(){
   
   await Geolocation.getCurrentPosition(
    async  ({ coords:{latitude, longitude} })=>{
        this.setState({
          region:{
            latitude,
            longitude,
            latitudeDelta:0.043,
            longitudeDelta:0.034
          }
        });
      },
      ()=>{  }, //ERRO
      {
        timeout:2000,
        maximumAge:1000,
      }
    )
  }
