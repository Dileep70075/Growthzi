// import React, { useState, useEffect } from 'react';
// import './styles.css';
// import ButtonModal from './Home1';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import Swal from 'sweetalert2';
// import axios from 'axios';

// const DEFAULT_TEXT = "At Lodha, we stand for excellence, integrity, and innovation in the real estate industry. Discover our commitment to quality living.";

// const LandingPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [visionText, setVisionText] = useState(DEFAULT_TEXT);

//   // 🔴 Button customization states
//   const [buttonText, setButtonText] = useState('+ Add Button');
//   const [buttonColor, setButtonColor] = useState('#6b7280');
//   const [buttonSize, setButtonSize] = useState('Medium');

//   useEffect(() => {
//     const initializeText = async () => {
//       try {
//         await axios.post('http://localhost:3001/users/Text', { text: DEFAULT_TEXT });
//       } catch (error) {
//         // Already exists, ignore
//       }
//     };
//     initializeText();
//   }, []);

//   const handleEdit = async () => {
//     let quillValue = visionText;
//     const wrapper = document.createElement('div');
//     const quillDiv = document.createElement('div');
//     wrapper.appendChild(quillDiv);

//     await Swal.fire({
//       title: 'Edit Vision Text',
//       html: wrapper,
//       showCancelButton: true,
//       confirmButtonText: 'Save Changes',
//       didOpen: () => {
//         import('react-dom').then(ReactDOM => {
//           ReactDOM.render(
//             <ReactQuill
//               theme="snow"
//               value={quillValue}
//               onChange={val => { quillValue = val; }}
//               style={{ height: 150, marginBottom: 20 }}
//             />,
//             quillDiv
//           );
//         });
//       },
//       preConfirm: () => quillValue,
//     }).then(async result => {
//       if (result.isConfirmed && result.value) {
//         try {
//           const res = await axios.post('http://localhost:3001/users/Text', { text: result.value });
//           setVisionText(res.data.text);
//           Swal.fire('Saved!', '', 'success');
//         } catch (err) {
//           Swal.fire('Error', err.response?.data?.message || 'Failed to save text', 'error');
//         }
//       }
//     });
//   };

//   const dynamicSizeClass = {
//     Small: 'small-btn',
//     Medium: 'medium-btn',
//     Large: 'large-btn',
//   }[buttonSize];

//   return (
//     <>
//       <div className="main-container">
//         <nav className="navbar">
//           <div className="nav-left">
//             <a href="#">Home</a>
//             <a href="#">About Us</a>
//             <a href="#">Portfolio</a>
//             <a href="#">FAQs</a>
//             <a href="#">Gallery</a>
//             <a href="#">Testimonials</a>
//           </div>
//           <div className="nav-center">LODHA</div>
//           <div className="nav-right">
//             <button className="edit-btn" onClick={handleEdit}>Edit</button>
//           </div>
//         </nav>
//       </div>

//       <div className="Main-Container">
//         <div className="hero-section">
//           <div className="overlay-content">
//             <h1>Luxury Living Redefined</h1>
//             <p>
//               Experience the epitome of luxury living with Lodha's exquisite real estate offerings in Chandigarh.
//               Find your dream home today.
//             </p>
//             <button
//               className={`cta-button ${dynamicSizeClass}`}
//               style={{ backgroundColor: buttonColor }}
//               onClick={() => setShowModal(true)}
//             >
//               {buttonText}
//             </button>

//             {showModal && (
//               <ButtonModal
//                 onClose={() => setShowModal(false)}
//                 updateButton={({ text, color, size }) => {
//                   if (text) setButtonText(text);
//                   if (color) setButtonColor(color);
//                   if (size) setButtonSize(size);
//                 }}
//               />
//             )}
//           </div>

//           <div className="button-group">
//             <button className="btn"><span className="icon">➕</span> Add Section</button>
//             <div className="divider">|</div>
//             <button className="btn"><span className="icon">✨</span> Build with AI</button>
//           </div>
//         </div>

//         <button className="connect-domain-btn">Connect Domain</button>

//         <div style={{ display: 'flex' }}>
//           <div className="vision-section">
//             <div className="vision-content">
//               <h2>Our Vision &amp; Values</h2>
//               <div className="editable-paragraph">
//                 <p
//                   onClick={handleEdit}
//                   style={{ cursor: 'pointer' }}
//                   dangerouslySetInnerHTML={{ __html: visionText }}
//                 />
//                 <span className="edit-icon" title="Edit" onClick={handleEdit}>
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                     <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" fill="#e5732f"/>
//                   </svg>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="image-section">{/* Optional right content */}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;





























import React, { useState, useEffect } from 'react';
import './styles.css'; // External CSS file
import ButtonModal from './Home1';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
const DEFAULT_TEXT = "At Lodha, we stand for excellence, integrity, and innovation in the real estate industry. Discover our commitment to quality living.";
const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [visionText, setVisionText] = useState(DEFAULT_TEXT);
   const [buttonText, setButtonText] = useState('+ Add Button');
  const [buttonColor, setButtonColor] = useState('#6b7280');
  const [buttonSize, setButtonSize] = useState('Medium');
 useEffect(() => {
    const initializeText = async () => {
      try {
        // Try to post the default text
        await axios.post('http://localhost:3001/users/Text', { text: DEFAULT_TEXT });
      } catch (error) {
        // Ignore 400 or conflict errors if text already exists
      }
    };

    initializeText();
  }, []);
  const handleEdit = async () => {
  let quillValue = visionText;
  const wrapper = document.createElement('div');
  const quillDiv = document.createElement('div');
  wrapper.appendChild(quillDiv);

  await Swal.fire({
    title: 'Edit Vision Text',
    html: wrapper,
    showCancelButton: true,
    confirmButtonText: 'Save Changes',
    didOpen: () => {
      import('react-dom').then(ReactDOM => {
        ReactDOM.render(
          <ReactQuill
            theme="snow"
            value={quillValue}
            onChange={val => { quillValue = val; }}
            style={{ height: 150, marginBottom: 20 }}
          />,
          quillDiv
        );
      });
    },
    preConfirm: () => quillValue,
  }).then(async result => {
    if (result.isConfirmed && result.value) {
      try {
        // ✅ Always send POST request to update or create the text
        const res = await axios.post('http://localhost:3001/users/Text', {
          text: result.value,
        });

        setVisionText(res.data.text);
        Swal.fire('Saved!', '', 'success');
      } catch (err) {
        Swal.fire('Error', err.response?.data?.message || 'Failed to save text', 'error');
      }
    }
  });
};
  const dynamicSizeClass = {
    Small: 'small-btn',
    Medium: 'medium-btn',
    Large: 'large-btn',
  }[buttonSize];
  return (
    <>
    <div className="main-container">
      <nav className="navbar">
       <div className="nav-left">
  <Link to="/Register">Home</Link>
  <Link to="/AboutUs">About Us</Link>
  <Link to="/Portfolio">Portfolio</Link>
  <Link to="/FAQs">FAQs</Link>
  <Link to="/Gallery">Gallery</Link>
  <Link to="/Testimonials">Testimonials</Link>
</div>
        <div className="nav-center">LODHA</div>
        <div className="nav-right">
          <button className="edit-btn">Edit</button>
        </div>
      </nav>
</div>
<div className="Main-Container">
      <div className="hero-section">
        <div >
          <div >
           <div className="overlay-content">
            <h1>Luxury Living Redefined</h1>
            <p>
              Experience the epitome of luxury living with Lodha's exquisite real estate offerings in Chandigarh.
              Find your dream home today.
            </p>
            <button
              className={`cta-button ${dynamicSizeClass}`}
              style={{ backgroundColor: buttonColor , color: 'white' }}
              onClick={() => setShowModal(true)}
            >
              {buttonText}
            </button>

            {showModal && (
              <ButtonModal
                onClose={() => setShowModal(false)}
                updateButton={({ text, color, size }) => {
                  if (text) setButtonText(text);
                  if (color) setButtonColor(color);
                  if (size) setButtonSize(size);
                }}
              />
            )}
          </div>

           <div className="button-group">
      <button className="btn">
        <span className="icon">➕</span> Add Section
      </button>
      <div className="divider">|</div>
      <button className="btn">
        <span className="icon">✨</span> Build with AI
      </button>
    </div>
        </div>
</div>
      </div>
      <button className="connect-domain-btn">Connect Domain</button>
     <div style={{ display: 'flex' }}>
  <div className="vision-section">
    <div className="vision-content">
      <div>
      <h2>Our Vision &amp; Values</h2>
        <div className="editable-paragraph">
                <p
                  onClick={handleEdit}
                  style={{ cursor: 'pointer' }}
                  dangerouslySetInnerHTML={{ __html: visionText }}
                />
                <span className="edit-icon" title="Edit" onClick={handleEdit}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" fill="#e5732f"/>
                  </svg>
                </span>
              </div>
    </div>
    </div>
  </div>

  <div className="image-section">
    {/* Optional: Add another block to show flex behavior */}
  </div>
</div>

    </div>
    </>
    
  );
};

export default LandingPage;
