import 'babel-polyfill';
import { render } from 'react-dom';

import routes from './routes';

render(routes, document.getElementById('app'));
