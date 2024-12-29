
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor, store } from './redux/store';
import Loading, { PersistGate } from './components/LoadingComponent';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGte Loading={<Loading />} persistor={persistor}>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </PersistGte>
        </Provider>
    )
}