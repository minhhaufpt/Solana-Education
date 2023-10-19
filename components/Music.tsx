import React from 'react';
type Props = {
  name: string;
  auto: boolean;
};

const Music = ({ name, auto }: Props) => {
  const src = '/music/' + name + '.mp3';
  return (
    <audio autoPlay>
      <source src={src}></source>
    </audio>
  );
};

export default Music;
