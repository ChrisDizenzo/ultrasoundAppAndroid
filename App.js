import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';

const App = () => {

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.header}>Applications</Text>
          <FlatList 
            data={SystemObjects}
            renderItem={( {item} ) =>     
            <View style={styles.container}>
              <Image style={{width: item.x, height: item.y, padding: 10}} source={item.icon}></Image>
              <Text style={styles.data}>{item.name}</Text> 
            </View>}
            keyExtractor={item => item.id}
          />
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    width: '100%',
  },
  header: {
    fontWeight: "bold",
    fontSize: 40,
    marginHorizontal: 10,
    marginTop: 20,
    textAlign: 'left',
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  data: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    height: 44, 
  },
  link: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    alignContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(195, 195, 195)',
    marginRight: 10,
    paddingVertical: 5,
  }
});

const SystemObjects = [
  {
      "name": "Aorta",
      "id": 0,
      "desc": "Is the Abdominal Aorta > 3 cm?\nAre the Iliac Arteries > 1.5 cm in diameter?\nIs there an aortic dissection?",
      "views": [],
      "icon": require('./Assets.xcassets/aortaIcon.imageset/aortaIcon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "Cardiac",
      "id": 1,
      "desc": "What is the global function/contractility?\nIs there cardiac activity?\nIs there pericardial effusion?\nAre there signs of RV strain?",
      "views": [],
      "icon": require('./Assets.xcassets/cardioIcon.imageset/cardioIcon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "DVT",
      "id": 2,
      "desc": "Does the Common Femoral Vein fully compress?\nDoes the Popliteal vein fully compress?",
      "views": [],
      "icon": require('./Assets.xcassets/dvtIcon.imageset/dvtIcon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "EFAST",
      "id": 3,
      "desc": "Is there free fluid in the abdomen?\nIs there fluid/blood in the pericardium?\nIs there blood in the thorax?\nIs there pneumothorax?",
      "views": [],
      "icon": require('./Assets.xcassets/efastIcon.imageset/efastIcon.png'),
      "x": 30,
      "y": 40,
  },
  {
      "name": "Gallbladder",
      "id": 4,
      "desc": "Are there Gallstones?\nIs there a Murphie's sign?\nIs there thickening of the CBD or anterior wall?\nIs there pericholecystic fluid?",
      "views": [],
      "icon": require('./Assets.xcassets/gallbladderIcon.imageset/gallbladderIcon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "HIMAP",
      "id": 5,
      "desc": "Is the patient in shock?\nIs there evidence of pulmonary embolism or pneumonia?\nAre there signs of MI or cardiac tamponade?",
      "views": [],
      "icon": require('./Assets.xcassets/himapIcon.imageset/himapIcon.png'),
      "x": 20,
      "y": 40,
  },
  {
      "name": "IVC",
      "id": 6,
      "desc": "Is the IVC < 1.5 cm or > 2.5 cm?\n Does the IVC collapse >40% with respiration?",
      "views": [],
      "icon": require('./Assets.xcassets/ivcIcon.imageset/ivcIcon.png'),
      "x": 20,
      "y": 40,
  },
  {
      "name": "OB/GYN 1st",
      "id": 7,
      "desc": "Is there intrauterine pregnancy?",
      "views": [],
      "icon": require('./Assets.xcassets/obgynIcon.imageset/obgynIcon.png'),
      "x": 40,
      "y": 25,
  },
  {
      "name": "OBGYN 2nd/3rd",
      "id": 8,
      "desc": "Is there a viable intrauterine pregnancy?",
      "views": [],
      "icon": require('./Assets.xcassets/obgyn23Icon.imageset/obgyn23Icon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "Ocular",
      "id": 9,
      "desc": "Is the Optic Nerve Sheath > 5 mm?\nIs there other ocular pathology?",
      "views": [],
      "icon": require('./Assets.xcassets/ocularIcon.imageset/ocularIcon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "Genitourinary",
      "id": 10,
      "desc": "Is there hydronephrosis?\nIs the bladder distended?",
      "views": [],
      "icon": require('./Assets.xcassets/kidneyIcon.imageset/kidneyIcon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "Soft Tissue/MSK",
      "id": 11,
      "desc": "Is there fluid collection? Signs of fasciitis or foreign body?\nIs there an interruption in bony cortex?\nCan the degree of angulation or displacement be assessed?\nIs there tendon injury?",
      "views": [],
      "icon": require('./Assets.xcassets/softtissueIcon.imageset/softtissueIcon.png'),
      "x": 40,
      "y": 40,
  },
  {
      "name": "Thoracic",
      "id": 12,
      "desc": "Are A-lines present?\nAre B-lines present?",
      "views": [],
      "icon": require('./Assets.xcassets/respiratoryIcon.imageset/respiratoryIcon.png'),
      "x": 40,
      "y": 35,
  }
]

export default App;
