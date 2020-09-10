import React from 'react';

export default function CommentList(props) {
  const {comments} = props;
  return (
    <div>
      <p>Comments by JSON Placeholder</p>
      {comments.map(comment => (
        <dl key={comment.id}>
          <strong>
            <dt>{comment.name}</dt>
          </strong>
          <dd>{comment.body}</dd>
        </dl>
      ))}
    </div>
  );
}
