import React from 'react';

const Article = () => {

    const myStyle={
        backgroundColor: 'red',
        fontSize: '25px',
        color: 'white',
        margin:  '0 40px', 
        padding: '20px'
    }
   
    return (
        <div>
            <article className='blog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam placeat maiores eum aperiam accusantium atque? Porro officia delectus excepturi.
            
          <h2 style={myStyle}>Hello React</h2>
          <p style={{backgroundColor:'bisque', fontWeight:'bold', margin:  '10px 40px',padding:'20px', fontSize:'20px'}}>This is article tag for style !</p>
            
            </article>
        </div>
    );
};

export default Article;