import React from 'react';
import Navbar from '../../components/Navbar';

const VideoList = () => {
    const videos = [
        {
            _id: 1,
            title: "Why should you invest?",
            url: "https://www.youtube.com/embed/GcZW24SkbHM"
        },
        {
            _id: 2,
            title: "The vegetable list",
            url: "https://www.youtube.com/embed/D916Xq4Fbxg"
        },
        {
            _id: 3,
            title: "Introduction to Options",
            url: "https://www.youtube.com/embed/-mO0YOTcCiQ"
        },
        {
            _id: 4,
            title: "Ideas by the Lake",
            url: "https://www.youtube.com/embed/9155SZc96kk"
        }
    ];

    return (
        <div>
            <h2 className='text-2xl font-bold m-10'>Resources</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className='m-7'>
  {videos.map((video) => (
    <div
      key={video._id}
      style={{
        marginRight: '20px',
        maxWidth: '560px',
        minWidth: '280px',
        flex: '1 0 auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: '0',
          overflow: 'hidden',
        }}
        className='rounded-lg'
      >
        <iframe
          src={video.url}
          frameborder="0"
          allowfullscreen
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
      <h3 style={{ marginBottom: '10px' }} className='font-bold text-lg m-2'>{video.title}</h3>
    </div>
  ))}
</div>

        </div>
    );
};

export default VideoList;
