import application from './src/app';
import * as http from 'http';
import {connect} from './config/db'

const PORT = process.env.PORT || 3009;
const server = http.createServer(application.instance);
server.listen(PORT, () => {
  console.log(`Server is listening on :${PORT}`);
  connect()
});