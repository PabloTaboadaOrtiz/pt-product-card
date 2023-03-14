import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { PRODUCT_2 } from '../data/products';

describe('ProductCard', () => {
  test('debe de mostar el componente', () => {
    const wrapper = renderer.create(
      <ProductCard product={PRODUCT_2}>
        {() => <h1>Product card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
