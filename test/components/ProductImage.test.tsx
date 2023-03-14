import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { PRODUCT_2 } from '../data/products';

describe('ProductImage', () => {
  test('debe de mostar el componente', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://hola.jpg"></ProductImage>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe de mostar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={PRODUCT_2}>
        {() => <ProductImage></ProductImage>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
