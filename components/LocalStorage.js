



 /*
  * setUsetInfo - save user info temporary
  * localStorage
  */
 export const setUserInfo = ({
    _id = '',
    u_name = '',
    u_email = '',
    isAdmin = false,
  }) => { 
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        _id,
        u_name,
        u_email,
        isAdmin,
      })
    );
  };
  
  export const clearUser = () => {
    localStorage.removeItem('userInfo');
  };
  
  //localStorage.removeItem('userInfo');
  export const getUserInfo = () => {
    return localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : { _id: '', u_name: '', u_email: '', isAdmin: '' };
  };
  
  
  
  /*
   * getCartItems - function that returns user's cart items
   */
  export const getCartItems = () => {
   const cartItems = localStorage.getItem('cartItems')
     ? JSON.parse(localStorage.getItem('cartItems'))
     : [];
   return cartItems;
  };
  
   
   /*
    * setCartItems - function that set customer's cart items
    */
  export const setCartItems = (cartItems) => {
     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };
   
  
  
  /*
  * setHomeColor - function to set home background color and button
  */
  export const setHomeColor = (homeColor) => {
   localStorage.setItem('homeColor', JSON.stringify(homeColor));
  };
  
  /*
   * getHomeColor - function to return home background color and button
   */
   export const getHomeColor = () => {
    const homeColor = localStorage.getItem('homeColor')
      ? JSON.parse(localStorage.getItem('homeColor'))
      : [];
    return homeColor;
   };
   
  
   /*
    * setHomeText - function to set home background color and button
    */
  export const setHomeText = (homeText) => {
    localStorage.setItem('homeText', JSON.stringify(homeText));
   };
   
  
   /*
    * getHomeText - function to return home background color and button
    */
  export const getHomeText = () => {
     const homeText = localStorage.getItem('homeText')
       ? JSON.parse(localStorage.getItem('homeText'))
       : [];
     return homeText;
    };
    
    
   
  export const cleanCart = () => {
    localStorage.removeItem('cartItems');
  };
  
  export const getShipping = () => {
    const shipping = localStorage.getItem('shipping')
      ? JSON.parse(localStorage.getItem('shipping'))
      : {
          email: '',
          phone: '',
          address: '',
          city: '',
          country: '',
        };
    return shipping;
  };
  
  export const setShipping = ({
    email = '',
    phone = '',
    address = '',
    city = '',
    country = '',
  }) => {
    localStorage.setItem(
      'shipping',
      JSON.stringify({ email, phone, address, city, country })
    );
  };