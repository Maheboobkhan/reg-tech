// import React from 'react'

// class HeroSections extends React.Component {
//   divStyle = {
//     backgroundImage: 'url(https://regtechapi.in/images/image-000.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     width: '100%',
//     height: '500px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//     textAlign: 'center',
//   };

//   render() {
//     return (
//       <div style={this.divStyle}>
//         <h1>Regtech API</h1>
//       </div>
//     )

//   }
// }

// export default HeroSections











import React from 'react';

class HeroSections extends React.Component {
  // Define styles as a class property
  divStyle = {
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/04/04/16/42/technology-7111799_1280.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '90vh', // Full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative', // For overlay positioning
  };

  overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  };

  contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  render() {
    return (
      <div style={this.divStyle}>
        <div style={this.overlayStyle}></div>
        <div style={this.contentStyle}>
          {/* <h1 className='font-montserrat text-6xl drop-shadow-2xl'>RegTech API</h1> */}
        </div>
      </div>
    );
  }
}

export default HeroSections;
