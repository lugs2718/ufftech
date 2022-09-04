//This is an example of online Emulator by https://aboutreact.com
import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Modal,
  TextInput,
} from 'react-native';

const App = () => {
  const [result, setResult] = useState('');
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(0);

  emails = [
    'gustavopereira.lg65@gmail.com',
    'luizgsp@id.uff.br',
    'fernando253@gmail.com',
    'mariaclr124@gmail.com',
  ];

  senhas = ['12345', '54321', '01010', '31415'];

  const calcular = () => {
    let calc = 0;
    let str = '';
    let numbers = [];
    let operations = [];

    // criando um array apenas com os números da string result
    if (typeof result == 'string') {
      for (let i = 0; i < result.length; i++) {
        if (
          result[i] != '+' &&
          result[i] != '-' &&
          result[i] != 'x' &&
          result[i] != '/' &&
          result[i] != '^'
        ) {
          str += result[i];
        } else {
          numbers.push(parseFloat(str));
          str = '';
        }
        if (i == result.length - 1) {
          numbers.push(parseFloat(str));
        }
      }

      // agora, devemos criar outro array apenas para as operações
      for (let i = 0; i < result.length; i++) {
        if (
          result[i] == '+' ||
          result[i] == '-' ||
          result[i] == 'x' ||
          result[i] == '/' ||
          result[i] == '^'
        ) {
          operations.push(result[i]);
        }
      }

      // por fim, uma repetição para alcançarmos o resultado final
      // fato importante: o array numbers semore terá um elemento a mais que operations.
      calc = numbers[0];
      for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
          case '+':
            calc += numbers[i + 1];
            break;
          case '-':
            calc -= numbers[i + 1];
            break;
          case 'x':
            calc *= numbers[i + 1];
            break;
          case '/':
            calc /= numbers[i + 1];
            break;
          case '^':
            calc = Math.pow(calc, numbers[i + 1]);
        }
      }

      return calc;
    } else {
      return 0;
    }
  };

  const validarDados = (input, dados) => {
    res = true
    for(let i = 0; i < dados.length; i++){
      if(res && input === dados[i]){
        return true;
      }
    }

    return false;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Modal animationType="slide" transparent={false} visible={visible}>
        <View style={styles.container2}>
          <View style={styles.signIn}>
            <Text style={{ fontSize: 30, paddingBottom: 10 }}>Calculadora</Text>

            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              value={Text}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              value={Number}
              keyboardType="numeric"
              maxLength = {5}
              onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.submit} onPress={ ()=>{
              setVisible(!(validarDados(email, emails) && validarDados(senha, senhas)));
            }}>
              <Text>entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.display}>
        <Text style={{ fontSize: 40 }}> {result} </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => setResult(parseFloat(result) + Math.PI)}>
          <Text style={{ fontSize: 30 }}>π</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => setResult(parseFloat(result) + Math.E)}>
          <Text style={{ fontSize: 30 }}>e</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => setResult(result + '^')}>
          <Text style={{ fontSize: 30 }}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            if (result[result.length - 1] == '/') {
              setResult(result.substring(0, result.length - 1));
            } else {
              setResult(result + '/');
            }
          }}>
          <Text style={{ fontSize: 30 }}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + 1)}>
          <Text style={{ fontSize: 30 }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + 2)}>
          <Text style={{ fontSize: 30 }}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + 3)}>
          <Text style={{ fontSize: 30 }}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            if (result[result.length - 1] == '+') {
              setResult(result.substring(0, result.length - 1));
            } else {
              setResult(result + '+');
            }
          }}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '4')}>
          <Text style={{ fontSize: 30 }}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '5')}>
          <Text style={{ fontSize: 30 }}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '6')}>
          <Text style={{ fontSize: 30 }}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            if (result[result.length - 1] == '-') {
              setResult(result.substring(0, result.length - 1));
            } else {
              setResult(result + '-');
            }
          }}>
          <Text style={{ fontSize: 30 }}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '7')}>
          <Text style={{ fontSize: 30 }}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '8')}>
          <Text style={{ fontSize: 30 }}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '9')}>
          <Text style={{ fontSize: 30 }}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            if (result[result.length - 1] == 'x') {
              setResult(result.substring(0, result.length - 1));
            } else {
              setResult(result + 'x');
            }
          }}>
          <Text style={{ fontSize: 30 }}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '.')}>
          <Text style={{ fontSize: 30 }}>,</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setResult(result + '0')}>
          <Text style={{ fontSize: 30 }}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (typeof result == 'string') {
              setResult(result.substring(0, result.length - 1));
            } else {
              setResult('');
            }
          }}>
          <Text style={{ fontSize: 30 }}>back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.equalButton}
          onPress={() => {
            if (result != '') {
              setResult(calcular());
            } else {
              return '';
            }
          }}>
          <Text style={{ fontSize: 30 }}>=</Text>
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
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  display: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '20%',
    backgroundColor: '#ecedec',
    borderRadius: 10,
    marginTop: 15,
  },
  buttons: {
    flex: 0.15,
    flexDirection: 'row',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  button: {
    width: 75,
    height: 75,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 10,
  },
  button1: {
    width: 75,
    height: 75,
    backgroundColor: '#edffe6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 10,
  },
  button2: {
    width: 75,
    height: 75,
    backgroundColor: '#e8f2fc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 10,
  },
  equalButton: {
    width: 75,
    height: 75,
    backgroundColor: '#e5dff2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 10,
  },
  signIn: {
    width: '60%',
    height: '60%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  input: {
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 10
  },
  submit: {
    backgroundColor: 'red',
    width: 50,
    heigth: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,

  },
});
