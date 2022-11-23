---
title: Recurrence
cover: https://cdnb.artstation.com/p/assets/images/images/007/095/957/large/mark-chang-lab3.jpg
layout: post
---

## 修改小组成员照片


- 首先将照片文件上传到<u>**img/avatar**</u>文件夹下
- 修改<b>**__config.yml**</b>配置文件中的<b>**doctors**</b>或<b>**members**</b>配置项，比如要添加一个成员，需要在配置文件中添加如下信息：-name: 成员姓名photo: 照片储存路径intro: 成员简介删除和修改成员信息同理。


## 上传文章

- 文章首部按如下格式编写：
  
  ```html
  ---
  title: 文章标题
  layout: post
  cover: 文章封面
  ---
  ```
  

文章封面将图片(.jpg, .png, .gif)文件上传到<b>**img/post_cover**</b>文件夹下，在cover后填写图片路径<b>**<u>/img/post_cover/xxx.jpg</u>**</b>。

- 正文部分使用markdown语法编辑即可。
  
- 文章编写完成后，将md文件上传到 **__posts文件夹**下，文章的命名格式为：文章发布时间(年-月-日-文章标题)， 如：2018-01-01-squarezero.md，表示2018年1月1日发布的标题为squarezero的文章。
  

## 一些注意问题

#### 图片链接需要改为http协议。

自己写的爬虫保存的markdown文件中的图片链接有些为https协议的，jekyl生成的页面中这种图片显示会不正常，所以图片链接需要改为http协议，使用notepad++批量替换https为http即可。
