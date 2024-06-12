import { StyleSheet } from "react-native-web";  
import { SIZES } from '../constants/Sizes';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: SIZES.height,
        width: SIZES.width,
      },
      signInContainer: {
        alignItems: 'center',
        marginVertical: 20,
      },
      signInText: {
        fontSize: 16,
        marginBottom: 10,
      },
      signInButton: {
        backgroundColor: '#0a7ea4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      signInButtonText: {
        color: '#fff',
        fontSize: 16,
      },
      OptionsCont: {
        marginTop: 20,
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        
      },    
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        paddingTop: 30,
        marginTop: 50,
      },
      Myprofile: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
      },
      option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: '#ccc',
      },
      optionArrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
      
      },
      icon: {
        marginRight: 15,
        color: '#555',
      },
      optionText: {
        fontSize: 18,
      },

      // league screen specific styles
      LegueCont:{
        marginTop: 5,
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      leagueImage: {
        width: 40,
        height: 40, 
        resizeMode: 'cover', 
        borderRadius: 999,

      },
      optionName:{
        fontSize: 16,
        marginLeft: 10,
        alignSelf: 'center',
      }
})

export default styles;