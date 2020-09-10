import React, {useState, useEffect} from 'react';
import CommentList from '../components/CommentList';
export default function CommentListContainer() {
  const API = 'https://jsonplaceholder.typicode.com/comments/?_limit=2';

  let [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API);
        const data = await res.json();
        return setComments(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [API]);
  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
}
