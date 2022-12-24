import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';

const CartItem = () => {
  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={
          'https://firebasestorage.googleapis.com/v0/b/grocery-app-28105.appspot.com/o/Images%2F1671810813019-i2.png?alt=media&token=4e38d31c-48fa-464f-b502-47bf1bb327d8'
        }
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">title</p>
        <p className="text-sm block text-gray-300 font-semibold">$ 10</p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          1
        </p>

        <motion.div whileTap={{ scale: 0.75 }}>
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
