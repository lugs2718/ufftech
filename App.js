//This is an example of online Emulator by https://aboutreact.com
import React, {useState} from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [result, setResult] = useState('');
  const [arr, setArr] = useState([]);

  const calcular = () => {
    let calc = 0;
    let str = '';
    let numbers = [];
    let operations = [];

    // criando um array apenas com os números da string result
    for(let i = 0; i < result.length; i++){
      if(result[i] != '+' && result[i] != '-' && result[i] != 'x' && result[i] != '/'){
        str += result[i];
      } else {
        numbers.push(parseFloat(str));
        str = '';
      }
      if(i == result.length - 1){
        numbers.push(parseFloat(str));
      }
    }

    // agora, devemos criar outro array apenas para as operações
    for(let i = 0; i < result.length; i++){
      if(result[i] == '+' || result[i] == '-' || result[i] == 'x' || result[i] == '/'){
        operations.push(result[i]);
      } 
    }

    // por fim, uma repetição para alcançarmos o resultado final
    // fato importante: o array numbers semore terá um elemento a mais que operations.
    calc = numbers[0];
    for(let i = 0; i < operations.length; i++){
      switch(operations[i]){
        case '+':
          calc += numbers[i+1]; 
          break;
        case '-':
          calc -= numbers[i+1];
          break;
        case 'x':
          calc *= numbers[i+1];
          break;
        case '/':
          calc /= numbers[i+1];
          break;
      }
    }
    
    calc.toString;
    return calc;
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.display }>
        <Text style={{ fontSize: 25 }}> { result } </Text>
      </View>

      <View style={{backgroundColor:'grey', flex: 0.1}}>
        <Text>
        {arr}
        {[1,2,3]}
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + 1)
}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + 2) }>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + 3) }>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => {
            if(result[result.length-1] == '+'){
              setResult(result.substring(0, result.length-1))
            }else{
            setResult(result + '+')}}
            }>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => {
            if(result[result.length-1] == '-'){
              setResult(result.substring(0, result.length-1))
            }else{
            setResult(result + '-')}}
            }>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => {
            if(result[result.length-1] == 'x'){
              setResult(result.substring(0, result.length-1))
            }else{
            setResult(result + 'x')}}
            }>
          <Text>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result + '.')}>
          <Text>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => setResult(result.substring(0, result.length-1))}>
          <Text>back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={ () => {
          setResult(calcular());
        } }>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },
  display:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '10%',
    backgroundColor: '#ecedec',
    borderRadius: 10
  },
  buttons:{
    flex: 0.15,
    flexDirection: 'row',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  button:{
    width: 60,
    height: 60,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 10
  }
});
