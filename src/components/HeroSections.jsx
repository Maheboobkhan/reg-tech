// // import React from 'react'

// // class HeroSections extends React.Component {
// //   divStyle = {
// //     backgroundImage: 'url(https://regtechapi.in/images/image-000.jpg)',
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     backgroundRepeat: 'no-repeat',
// //     width: '100%',
// //     height: '500px',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     color: 'white',
// //     textAlign: 'center',
// //   };

// //   render() {
// //     return (
// //       <div style={this.divStyle}>
// //         <h1>Regtech API</h1>
// //       </div>
// //     )

// //   }
// // }

// // export default HeroSections











// import React from 'react';

// class HeroSections extends React.Component {
//   // Define styles as a class property
//   divStyle = {
//     backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/04/04/16/42/technology-7111799_1280.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     width: '100%',
//     height: '90vh', // Full viewport height
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//     textAlign: 'center',
//     position: 'relative', // For overlay positioning
//   };

//   overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     zIndex: 1,
//   };

//   contentStyle = {
//     position: 'relative',
//     zIndex: 2,
//   };

//   render() {
//     return (
//       <div style={this.divStyle}>
//         <div style={this.overlayStyle}></div>
//         <div style={this.contentStyle}>
//           <h1 className='font-montserrat text-6xl drop-shadow-2xl'>RegTech API</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default HeroSections;










import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Banner extends Component {
  componentDidMount() {
    Aos.init({
      duration: 1000,
    });
  }
  render() {
    return (
      <header className="w-[100vw] h-[100vh] absolute top-0 left-0 right-0 bottom-0 blur-[0px] bg-cover bg-center text-white flex items-center justify-center text-center -z-50"
      data-aos="fade-up"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2023/10/21/12/35/ai-generated-8331364_1280.jpg')" }}>
              {/* // style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2022/04/04/16/42/technology-7111799_1280.jpg')" }}> */}
              {/* // style={{ backgroundImage: "url('https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=600')" }}> */}
        <h1 className="text-6xl text-gray-300 font-montserrat text-shadow-lg">RegTech API</h1>
      </header>
    );
  }
}

export default Banner;
