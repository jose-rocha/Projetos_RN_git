Pacotes instalados no projeto

1: yarn add react-native-maps --save
	


colocar no  arquivo \mapsTeste3\android\app\src\main\AndroidManifest.xml  

<uses-permission android:name="android.permission.ACCESS_FINE_LOCATIONS" />

<meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="AIzaSyB1Z9KJesk94fXXzkPg87ocnyN7P5RX2GY"/>
<uses-library android:name="org.apache.http.legacy" android:required="false"/>                                  essa ultima é pra não dá problemas no emulador virtual




não precisa criar o link
2: react-native link react-native-maps