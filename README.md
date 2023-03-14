# pt-product-card

Este es un paquete de pruebas de despliegue en NPM

### Pablo Taboada

## Ejemplo

```
import {ProductCard,ProductImage,ProductTitle,ProductButtons} from 'pt-product-card'
```

```
    <ProductCard
        initialValues={{
        count: 4,
        // maxCount: 10,
        }}
        product={product}
    >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
        <>
            <ProductImage></ProductImage>
            <ProductTitle></ProductTitle>
            <ProductButtons></ProductButtons>
        </>
        )}
    </ProductCard>

```
