import { startServer } from '../index.js';

const port = process.env.PORT || 8080;

startServer().listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
