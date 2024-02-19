import axios from 'axios';
import { fetchPostsStart1, fetchPostsSuccess1, fetchPostsFailure1 } from './AdminPostSlice';

export const fetchPostsByAdmin = () => async (dispatch) => {
    dispatch(fetchPostsStart1());
    try {
      const response = await axios.get(`/api/post/adminposts`);
      dispatch(fetchPostsSuccess1(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure1(error.message));
    }
  };

