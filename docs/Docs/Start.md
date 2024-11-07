---
title: 快速开始
---


## 支持的平台

- Windows 10/11 AMD64/ARM64

## 运行代码

### 安装依赖

- Go 1.21+
- Node.js 18+
- Wails 2.92+  `go install github.com/wailsapp/wails/v2/cmd/wails@latest`

### 编译/调试

``````sh
git clone https://github.com/only9464/GlideWay.git && cd GlideWay

wails dev # 调试模式运行

wails build # 编译应用 文件存在于build/bin路径下

wails build -debug -devtools # 编译可开启调试模式应用
``````

