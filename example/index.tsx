import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const PRODUCT = {
  id: '1',
  title: 'coffe Mug - Card',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      initialValues={{
        count: 4,
        // maxCount: 10,
      }}
      product={PRODUCT}
    >
      {({ reset, count, increaseBy, isMaxCountReached }) => (
        <>
          <ProductImage></ProductImage>
          <ProductTitle></ProductTitle>
          <ProductButtons></ProductButtons>
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
