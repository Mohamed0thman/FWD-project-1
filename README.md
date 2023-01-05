"# resize image API"

- you can use app's endpoint for resizing image
- customize width and height as you like
- caching image

## Usage

by

- installing app's dependency
  ```shell
    npm install
  ```
- start dev server by using
  ```shell
    npm run dev
  ```
- visiting images endpoint and providing valid prams 
  # Example
  `http://localhost:3000/images?filename=sunflower&width=300&height=800`
   ``
 
  ![example](./docs/image/exmple.PNG)
  ---

## Scripts
1- to build the app
```shell
    npm run build
```
2- to start development server

```shell
    npm run dev
```

3- to test the app
```shell
    npm run test
```
## Endpoints
* "/" => home page with welcome message
* "/images?filename={image-name}&width={image-width}&height={image-height}" =>  create thumbs from images 
    by providing name , width and height of the image.
---
