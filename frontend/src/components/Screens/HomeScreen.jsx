import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../Product/Product";
import { listProducts } from "../../actions/productActions";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";

const HomeScreen = ({match}) => {

  const keyword = match.params.keyword
  // call action creator from component using useDispatch hook
  const dispatch = useDispatch();
  // accesing product from store using useSelector hook
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch,keyword]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} key={product._id} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
