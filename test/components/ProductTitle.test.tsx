import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { PRODUCT_1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostar el componente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product"></ProductTitle>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe de mostar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={PRODUCT_1}>
        {() => <ProductTitle></ProductTitle>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
