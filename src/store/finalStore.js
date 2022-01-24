import { createStore} from 'redux';
import rootReducer from '../Reducers/rootReducer';

const finalStore = createStore(rootReducer);
export default finalStore;