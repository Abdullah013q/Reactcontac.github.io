import React, { useRef } from 'react';
import '../App.css'

 const contactform = () => {

  return (
    <form action='https://api.web3forms.com/submit' method='POST' className='form'>
      <input type="hidden" name="access_key" value={'81ab887d-2925-42b0-9836-a684efe9f3f0'} />
      <input type="text" name="name" className='name' placeholder='Your Name' autoComplete='on' required />
      <input type="email" name="email" className='email' placeholder='Your Email' autoComplete='on' required />
      <textarea name="message" className='message' placeholder='Type here for message' />
      <input type="submit" value="Send" className='button'  />
    </form>
  );
};

export default contactform;



























// import React, { useRef } from 'react';
// import '../App.css'

//  const contactform = () => {

//   return (
//     <form action='https://formspree.io/f/xjvnvpya' method='POST' className='form'>
//       <input type="text" name="user_name" className='name' placeholder='Your Name' autoComplete='on' required />
//       <input type="email" name="user_email" className='email' placeholder='Your Email' autoComplete='on' required />
//       <textarea name="message" className='message' placeholder='Type here for message' />
//       <input type="submit" value="Send" className='button'  />
//     </form>
//   );
// };

// export default contactform;