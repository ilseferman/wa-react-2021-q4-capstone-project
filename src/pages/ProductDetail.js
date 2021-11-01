import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Loading, Slider } from '../components/UI';
import { Card } from '../components/UI/';
import { Container, Sidebar, Content } from '../components/UI/Container';
import { useAPI } from '../utils/hooks/useAPI';
import { useAppContext } from '../utils/context';
import ProductDetailCard from '../components/product/ProductDetailCard';

function ProductDetail() {
  const { id } = useParams();
  const [imagesSlider, setImagesSlider] = useState([]);
  const [product, setProduct] = useState([]);
  const { data: productData, isLoading: isLoadingProduct } = useAPI(
    'product-detail',
    { id }
  );
  const { appContext, setAppContext } = useAppContext();

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
      setAppContext({
        title: product.data?.name,
      });
      document.title = appContext.title;
    }
  }, [productData, isLoadingProduct, product, appContext.title, setAppContext]);

  if (isLoadingProduct) return <Loading />;

  return (
    <>
      <Container columns="40% auto">
        <Sidebar>
          <Card>
            <Slider product items={imagesSlider} />
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
