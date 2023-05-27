# Servicio REST GET

El servicio responde con un listado de productos (encontrados y sugeridos)

Para los productos encontrados se basa en el parámetro “filter” de tipo String que
este tenga coincidencia con el atributo nombre del producto

Para los productos sugeridos regresa 2 productos de la misma categoría

## Ejemplo

GET

```bash
http://localhost:3000/products?filter=samsung
```

Respuesta

```bash
{"product":
    [
        {"name":"Samsung Galaxy","category":"electronics"},
        {"name":"Samsung A10","category":"electronics"},
        {"name":"Samsung A20","category":"electronics"},
        {"name":"Motorola V3","category":"electronics"},
        {"name":"Motorola V2","category":"electronics"}]
}
```
