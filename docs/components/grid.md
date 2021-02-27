---
title: Grid 网格
---

# 网格

### 基本布局

<grid-demo-1></grid-demo-1>

#### 代码

```html
<r-row>
  <r-col span="8">
    <div>8</div>
  </r-col>
  <r-col span="8">
    <div>8</div>
  </r-col>
  <r-col span="8">
    <div>8</div>
  </r-col>
</r-row>
<r-row>
  <r-col span="6">
    <div>6</div>
  </r-col>
  <r-col span="6">
    <div>6</div>
  </r-col>
  <r-col span="6">
    <div>6</div>
  </r-col>
  <r-col span="6">
    <div>6</div>
  </r-col>
</r-row>
<r-row>
  <r-col span="4">
    <div>4</div>
  </r-col>
  <r-col span="4">
    <div>4</div>
  </r-col>
  <r-col span="4">
    <div>4</div>
  </r-col>
  <r-col span="4">
    <div>4</div>
  </r-col>
  <r-col span="4">
    <div>4</div>
  </r-col>
  <r-col span="4">
    <div>4</div>
  </r-col>
</r-row>
```

### 分栏间隔

<grid-demo-2></grid-demo-2>

#### 代码

```html
<r-row gutter="10">
  <r-col span="8">
    <div>8</div>
  </r-col>
  <r-col span="8">
    <div>8</div>
  </r-col>
  <r-col span="8">
    <div>8</div>
  </r-col>
</r-row>
<r-row gutter="10">
  <r-col span="6">
    <div>6</div>
  </r-col>
  <r-col span="6">
    <div>6</div>
  </r-col>
  <r-col span="6">
    <div>6</div>
  </r-col>
  <r-col span="6">
    <div>6</div>
  </r-col>
</r-row>
```

### 分栏偏移

<grid-demo-3></grid-demo-3>

#### 代码

```html
<r-row gutter="10">
  <r-col span="8">
    <div>8</div>
  </r-col>
  <r-col span="8" offset="8">
    <div>8</div>
  </r-col>
</r-row>
<r-row gutter="10">
  <r-col span="6" offset="6">
    <div>6</div>
  </r-col>
  <r-col span="6" offset="6">
    <div>6</div>
  </r-col>
</r-row>
<r-row gutter="10">
  <r-col span="4">
    <div>4</div>
  </r-col>
  <r-col span="4" offset="4">
    <div>4</div>
  </r-col>
  <r-col span="4" offset="8">
    <div>4</div>
  </r-col>
</r-row>
<r-row gutter="10">
  <r-col span="2">
    <div>2</div>
  </r-col>
  <r-col span="2" offset="2">
    <div>2</div>
  </r-col>
  <r-col span="2">
    <div>2</div>
  </r-col>
  <r-col span="2" offset="2">
    <div>2</div>
  </r-col>
  <r-col span="2">
    <div>2</div>
  </r-col>
  <r-col span="2" offset="2">
    <div>2</div>
  </r-col>
  <r-col span="2">
    <div>2</div>
  </r-col>
  <r-col span="2" offset="2">
    <div>2</div>
  </r-col>
</r-row>
```
