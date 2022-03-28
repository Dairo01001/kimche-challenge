import dotenv from 'dotenv';

dotenv.config();

const config = {
  URI: process.env.REACT_APP_URI,
};

export default config;
