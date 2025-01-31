import React, { useState } from 'react';

const ImageLoader = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={className}>
      {loading && <p>Loading image...</p>}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageLoader;