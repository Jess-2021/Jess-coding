# NPM

![npm install](https://pic2.zhimg.com/80/v2-4ed001e953fc79f0def09f24a01d6ae1_720w.jpg)

### 流程
- 检查lockfile有没有文件；如果有则读取并检查完整性，如果完整则直接结束，如果不完整则检查缓存，如果存在则复制到node_modules，build并生成lockfile；
- 如果不存在，则获取包信息，构建包依赖树，检查是否有缓存，没缓存则将包内容解压到缓存，复制到node_modules，build并lockfile；
- 都要确保lockfile有相应的文件，再者则是缓存里；