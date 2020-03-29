# CRP - Critical Rendering Path，关键渲染路径

## 前端性能优化
### URI解析 ->  
- 解

### DNS解析(一般20ms - 120ms) ->  
- 减少DNS请求次数，由于我们的网站是从多个服务器拿资源的，所以需要解析多个服务器的DNS -> :collision: DNS预获取，在meta，link添加请求服务器资源域名;

### TCP三次握手建立链接通道 ->  
发送HTTP请求 ->  
- :collision: 减少HTTP请求和资源大小。base64虽然会增大图片体积，但是不用发起请求（移动端很好用）；
- :collision: 缓存。强缓存和协商缓存（文件）；本地缓存（数据）
  - 强缓存 -> Expries时间戳，Cache-Control等；
  - 协商缓存 -> 
    - Last-Modified/If-Modified-Since, 最后修改时间，收到 -> 缓存 -> 带请求头 -> 检验最后修改时间 -> 如果是再之前就返回304，不然就返回新数据（时间为秒计算）
    - Etag/If-None-Match，hash编码值，唯一标识，如果变化时服务端就修改，流程和modified一样；

### 服务器处理响应 ->  
### TCP四次挥手 ->  

### 浏览器解析渲染  
- 浏览器渲染流程：
    - 字符转换（字节码）->  
    - Token令牌 ->  
    - 词法分析 ->  
    - DOM构建 ->  
      - 将分析出来的对象，构建成DOM数。:collision:减少深层嵌套，标签语义化；
    - CSSOM构建
      - css是从后面开始解析，和DOM树同样的道理。:collision: 减少选择器层级；
    - 布局计算 ->  
      - 回流
        - 由于渲染到页面时是一直发生在DOM树和CSSOM构建完之后，
      - 重绘
    - 构建成Render树


## CSS的引入方式
- link方式，异步方式的请求，单线程处理（chrome一般最多6-7个请求）
- import，同步，阻塞请求
- style, 是第一次拿HTML时就拿回来；不需要请求，并且不宜太大；同解析HTML一样道理；
  
## JS引入方式
- async 请求的方式，谁先回来就执行 -> :collision: 不能有依赖
- defer 等页面渲染完成再执行，有顺序 -> :collision:有顺序