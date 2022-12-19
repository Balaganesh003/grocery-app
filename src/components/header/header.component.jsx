import React from 'react';
import Logo from '../../img/logo.png';
import { AiFillShopping } from 'react-icons/ai';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase.config';
import { MdAdd, MdLogout } from 'react-icons/md';

// import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Avatar from '../../img/avatar.png';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);

  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch(authActions.setUser(providerData[0]));
    localStorage.setItem('user', JSON.stringify(providerData[0]));
  };

  const logout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem('user');
  };

  const toggleMenu = () => {
    dispatch(uiActions.toggleMenu());
  };

  return (
    <header className="fixed z-50 p-6 px-16 w-screen">
      {/* Desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={'/'} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              About
            </li>
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Contact
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <AiFillShopping className="text-textColor text-2xl cursor-pointer" />
            <div className=" absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-cartNumBg">
              <p className=" text-white text-xs font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className="w-10 h-10 shadow-xl rounded-full cursor-pointer"
              onClick={user ? toggleMenu : login}
            />
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-blue-300 shadow-xl flex flex-col  top-12 right-0 rounded-lg absolute">
                {user && user.email === 'k.balaganesh26@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-blue-400 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-blue-400 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg"
                  onClick={logout}>
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
