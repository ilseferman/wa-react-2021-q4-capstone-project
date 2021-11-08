import  { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, selectCart } from '../../utils/redux/slices/cartSlice';

export function useProductDetail(product){
  const [stock, setStock] = useState(product.data.stock);
  const [amount, setAmount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState();
  
  const [currentProduct, setCurrentProduct] = useState({
    id: product.id,
    mainimage: product.data.mainimage.url,
    name: product.data.name,
    price: product.data?.price,
    stock: product.data.stock,
    amount,
  });
  
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  

  const handleChange = (event) => {
    const newAmount = +event.target.value;
    setAmount(newAmount);
    
    if (newAmount > stock){
      setError(`Not enough products available`);
      return;
    } else {
      setError(undefined);
      setCurrentProduct((prev) => {
        return { ...prev, amount: newAmount };
      });
    }

  }
  
  const addToCart = () => {
    if(!error){
      setStock((prev) =>  prev - amount );
      setAmount(0);
      dispatch(addProduct(currentProduct));
    }
  }

  const isDisabled = useCallback(() => {    
    if (amount === 0 || stock === 0 || amount > stock) setDisabled(true);
    else setDisabled(false);
  }, [amount, stock]); 
  
  useEffect(() => {
    const cartProduct = cart.find(({ id }) => id === product.id);
    if (cartProduct) {
      
      setStock((prev) => prev - cartProduct.amount);
    }
  },[product.id, cart]);

  useEffect(() => {    
    isDisabled();
  }, [amount, isDisabled]);

  return {
    stock,
    amount,
    handleChange,
    error,
    addToCart,
    disabled
  }
}