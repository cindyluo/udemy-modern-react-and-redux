import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID rDi4as_LfAYnkndghgn58wDW6DchUVmtOW5XhfS3sOY'
  }
});
