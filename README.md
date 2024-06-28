## **【 Step 1.安裝 bo-components-p 】**

- 安裝 `bo-http-handler-p` 套件：
  ```
  npm i bo-http-handler-p
  ```

----------------------

## **【 Step 2.套件引用 】**

- 在 `main.js` 檔案中，全域引用 `bo-http-handler-p` 套件：

  ```
  import BOHttpHandler from 'bo-http-handler-p'
  app.use(BOHttpHandler)
  ```

----------------------

## **【 Step 3.樣式引用 】**

- 需在 `main.js` 中，全域引用 `element-plus@2.4.4` 的 css 樣式，若檔案中沒有 `element-plus` 套件則需安裝：
  ```
  npm i element-plus@2.4.4
  import '../node_modules/element-plus/dist/index.css'
  ```

- 需在 `main.js` 中 全域引用 `bo-http-handler-p` 的 style.css 樣式，且層級需蓋過 `element-plus` 的 css 樣式：
  ```
  import '../node_modules/bo-http-handler-p/dist/style.css'
  ```

----------------------

## **【 Step 4.使用方法 】**
- .vue 檔案中使用方法如下：

  ```
  this.$BOHttpHandler.get('url')
  this.$BOHttpHandler.post('url')
  this.$BOHttpHandler.put('url')
  this.$BOHttpHandler.delete('url')
  ```

