# Sentence Vizu

**句子可视化分析工具** - 通过彩色标记让英语语法变得直观易懂

## 🚀 项目概述

Sentence Vizu 是一个面向英语学习者、学生和写作者的在线工具。它通过可视化的方式，将复杂的英语句子结构变得清晰易懂。用户输入一个句子，系统会立即识别出其中每个单词的词性（名词、动词、形容词等），并用不同的颜色高亮显示。

## ✨ 核心功能

- **实时句子分析**: 使用 compromise.js 进行词性标注
- **彩色词性标记**: 不同词性用不同颜色高亮显示
- **直观图例**: 清晰的颜色说明帮助理解
- **响应式设计**: 适配桌面端和移动端
- **Waitlist 功能**: 为高级功能收集早期用户

## 🛠️ 技术栈

- **框架**: Next.js 14 + TypeScript
- **样式**: Tailwind CSS
- **NLP 处理**: compromise.js
- **部署**: Vercel

## 🎨 词性颜色映射

- 🔵 **蓝色** - 名词 (Noun)
- 🔴 **红色** - 动词 (Verb)
- 🟢 **绿色** - 形容词 (Adjective)
- 🟠 **橙色** - 副词 (Adverb)
- 🟣 **紫色** - 代词 (Pronoun)
- 🩷 **粉色** - 介词 (Preposition)
- 🩵 **青色** - 连词 (Conjunction)
- 🟡 **浅绿** - 限定词 (Determiner)

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
sentence-vizu/
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 主页面
├── components/
│   ├── SentenceAnalyzer.tsx  # 句子分析器组件
│   └── Waitlist.tsx          # 等待列表组件
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 使用方法

1. 在输入框中粘贴或输入任何英语句子
2. 点击 "Analyze Sentence" 按钮或按 Enter 键
3. 查看句子的彩色词性标记结果
4. 参考图例了解每种颜色的含义

## 🔮 未来计划

- 传统句子图解功能 (Reed-Kellogg)
- 语法结构可视化
- 句子复杂度分析
- 多语言支持

## �� 许可证

MIT License 