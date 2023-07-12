import './App.css'
import { MainList } from './components/MainList/MainList'
import { Provider } from 'react-redux'
import { store } from './store/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainList />
      </Provider>
    </div>
  )
}

export default App
