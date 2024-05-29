import React from 'react';
import ChildComp from './ChildComp';

const ParentComp = () => {
  const data = {
    title: "Hello, World!",
    content: "This is a simple example of a child component."
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComp title={data.title} content={data.content} />
    </div>
  );
};

export default ParentComp;