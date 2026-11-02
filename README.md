# 机器人知识库

网站地址：<https://yeluo-123.github.io/Foxbot.github.io/>

网站正文存放在 `content/` 文件夹。**写笔记只需要修改对应的 `.md` 文件**；`index.html`、`app.js` 和 `styles.css` 负责页面显示。

| 章节 | Markdown 文件 |
| --- | --- |
| 首页 | `content/README.md` |
| 数学基础 | `content/01-mathematical-foundations.md` |
| 机器人建模与控制 | `content/02-robot-modeling-control.md` |
| 系统与通信 | `content/03-systems-communication.md` |
| 感知与定位建图 | `content/04-perception-slam.md` |
| 导航与规划 | `content/05-navigation-planning.md` |
| 学习与具身智能 | `content/06-learning-embodied-ai.md` |
| 研究与实践 | `content/07-research-practice.md` |

## 在 VS Code 中编辑

1. 打开本仓库的 `content/` 文件夹，选择对应章节的 `.md` 文件。
2. 在现有的 `##` 主题标题下写内容。可以添加 `###` 小标题、段落、列表、链接、表格和代码块。
3. 保存后，在本仓库目录运行：

```powershell
git add content
git commit -m "Update notes"
git push origin main
```

GitHub Pages 会在 `main` 分支更新后重新发布。

## 直接在 GitHub 网页编辑

打开仓库中的 `content/` → 选择章节文件 → 点击右上角铅笔图标 → 编辑 → 点击 **Commit changes**。网站每个章节右上角也有“在 GitHub 编辑”链接。

## Markdown 示例

````markdown
## Calculus · 微积分

### 梯度

梯度是各个变量方向上的偏导数组成的向量。

- 定义：写在这里
- 例子：写在这里

```python
def gradient(x, y):
    return (2 * x, 2 * y)
```

[参考资料](https://example.com)
````

如果要插入图片，把图片放在 `content/assets/` 中，然后在 Markdown 文件中写 `![图片说明](assets/文件名.png)`。网页和 GitHub 的 Markdown 预览都会使用同一路径。
