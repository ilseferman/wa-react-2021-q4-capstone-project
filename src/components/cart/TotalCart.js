import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Title } from '../UI';
import { getTotal, selectTotal } from '../../utils/redux/slices/cartSlice';

function TotalCart({ cart }) {
  const dispatch = useDispatch();
  dispatch(getTotal());

  const total = useSelector(selectTotal);
  if (cart.length === 0) return <Title title="Add products to the cart" />;
  
  return (
    <>
      {cart.length > 0 && (
        <Row columns="1fr" justify="right">          
          <h2><small>Total: </small> $ {total.toFixed(2)}</h2>
          <Link to="/checkout">
            <Button>
              Proceed to checkout
            </Button>
          </Link>
        </Row>
      )}
    </>
  );
}
export default TotalCart;
