import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Loading, Slider } from '../components/UI';
import { Card } from '../components/UI/';
import { Container, Sidebar, Content } from '../components/UI/Container';
import { useAPI } from '../utils/hooks/useAPI';
import ProductDetailCard from '../components/product/ProductDetailCard';
import useDocumentTitle from '../utils/hooks/useDocumentTitle';

function ProductDetail() {
  
  useDocumentTitle('Home');

  const { id } = useParams();
  const [imagesSlider, setImagesSlider] = useState([]);
  const [product, setProduct] = useState({});  
  const { 
    data: productData, 
    isLoading: isLoadingProduct 
  } = useAPI('product-detail', { id });

  useEffect(() => {
    if (productData?.results?.[0]?.data) {
      setProduct(productData?.results?.[0]);
      setImagesSlider(
        productData?.results?.[0]?.data?.images.map(({ image }) => {
          const newObj = {
            id: image.url,
            data: {
              main_image: {
                url: image.url,
              },
            },
          };
          return newObj;
        })
      );
      
    }
  }, [productData, isLoadingProduct, product]);

  if (isLoadingProduct || !product.data) return <Loading />;

  return (
    <>
      <Container columns="40% auto">
        <Sidebar>
          <Card>
            <Slider product items={imagesSlider} autoSlide={false}/>
          </Card>
        </Sidebar>
        <Content>
          <ProductDetailCard product={product} />
        </Content>
      </Container>
    </>
  );
}

export default ProductDetail;
