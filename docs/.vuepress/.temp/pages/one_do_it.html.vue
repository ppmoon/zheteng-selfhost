<template><div><h1 id="开始动手-搭建自己的-云" tabindex="-1"><a class="header-anchor" href="#开始动手-搭建自己的-云"><span>开始动手！搭建自己的“云”</span></a></h1>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备"><span>准备</span></a></h2>
<h3 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件"><span>硬件</span></a></h3>
<p>我们需要选择一台硬件设备来运行“云”软件。首先推荐旧笔记本电脑。因为他有如下几个优点：</p>
<ol>
<li>笔记本电脑一般都是x86架构平台。适配软件生态非常丰富。</li>
<li>笔记本电脑为了移动特性，一般功耗比较低，相对来说比较省电。</li>
<li>笔记本电脑携带一块电池，可以避免断电情况下系统中断导致的数据丢失问题。</li>
</ol>
<p>即便没有笔记本电脑，我们也有很多其他的选择，善于折腾的读者甚至可以用ARM架构的手机来运行“云”软件，这往往更加省电。只是需要一些额外的工作来调试系统环境。</p>
<p>有些更加专业的极客甚至可以使用路由器、电视盒子、工控机来运行这些“云软件”。我们唯一要做的事情就是找一台电脑，就可以开始搭建自己的“云”。</p>
<h3 id="软件" tabindex="-1"><a class="header-anchor" href="#软件"><span>软件</span></a></h3>
<p>软件并不会有特别之处。我们不对操作系统进行限制。因为目前主流搭建云的方案都会采用容器化技术。这项技术是全平台不挑选操作系统的。所以不管是win、linux、mac都可以搭建自己的私有云。</p>
<p>本文在进行介绍的时候会以linux的fedora系统为例。因为该系统具备最新的软件生态，且有方便管理linux的Cockpit软件协助调整系统配置，可以让我们少学几条linux命令。</p>
<p>关于容器环境，我们不使用传统的docker，改用podman，一方面podman是rootless的容器化技术，更加安全。另外，通过podman我们可以学习一些其他的linux技能。</p>
<h3 id="空白电脑到准备环境" tabindex="-1"><a class="header-anchor" href="#空白电脑到准备环境"><span>空白电脑到准备环境</span></a></h3>
<p>讲述如何从一台电脑安装fedora一直到配置完podman，以及简单介绍cockpit。</p>
</div></template>


