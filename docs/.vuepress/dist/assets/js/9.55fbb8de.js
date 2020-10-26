(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{423:function(s,t,a){s.exports=a.p+"assets/img/github_pages_config.9b5a5eae.jpg"},424:function(s,t,a){s.exports=a.p+"assets/img/github_pages_config2.381ab899.jpg"},438:function(s,t,a){"use strict";a.r(t);var e=a(6),n=function(s){s.options.__data__block__={flowchart_382ee16a:"st=>start: Start\ne=>end: 通过访问https://qiuzhongrun.github.io/blog访问到博客内容\nop_github_repo=>operation: 创建一个github项目blog\nop_vuepress_project=>subroutine: 根据vuepress-theme-reco创建出vuepress工程blog\nop_hook=>operation: github端配置好Github Pages的钩子\nop_ci=>parallel: travis-ci自动构建推送到Github Pages\n\nst->op_github_repo->op_vuepress_project->op_hook->op_ci->e"}},r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("ul",[e("li",[s._v("vuepress好看")]),s._v(" "),e("li",[s._v("Github Pages配合github好管理")]),s._v(" "),e("li",[s._v("travis-ci足够自动化")])]),s._v(" "),e("p",[s._v("所以选择vuepress + Github Pages + travis-ci 搭建一个个人博客。")])]),s._v(" "),e("p",[s._v("很幸运的是，有一个我喜欢的主题"),e("a",{attrs:{href:"https://vuepress-theme-reco.alexWjj.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),e("OutboundLink")],1),s._v("。作为一个前端freshbird，它能最大程度地减少我的掉毛数。下面的搭建过程就以这个主题展开。以我自己的工程blog举例。")]),s._v(" "),e("FlowChart",{attrs:{id:"flowchart_382ee16a",code:s.$dataBlock.flowchart_382ee16a,preset:"ant"}}),e("h1",{attrs:{id:"创建github工程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建github工程"}},[s._v("#")]),s._v(" 创建github工程")]),s._v(" "),e("p",[s._v("打开官网主页"),e("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Pages"),e("OutboundLink")],1),s._v("，你会发现它的教程其实很详细，这里不赘述。这里讨论的是它的两种方式，[User or organization site]和[project-site]注意，如果没搞清楚这两个，后面你会很困惑的。")]),s._v(" "),e("p",[s._v("下面主要讲一下关于Github Pages配置的区别：project → Settings → GitHub Pages")]),s._v(" "),e("h3",{attrs:{id:"user-or-organization-site"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-or-organization-site"}},[s._v("#")]),s._v(" User or organization site")]),s._v(" "),e("p",[s._v("以个人或者组织的角度，全新创建一个"),e("span",{staticStyle:{color:"red"}},[s._v("github.io")]),s._v("为结尾的github工程。注意前面红色的字，如果你一旦以"),e("span",{staticStyle:{color:"red"}},[s._v("github.io")]),s._v("为结尾创建工程，然后你会惊奇地发现Github Pages配置时无法选择展示的Source了。\n"),e("img",{attrs:{src:a(423),alt:"github_pages_config.jpg"}}),s._v("\n这个意思是说以后你去访问https://username.github.io/blog访问到的只能是master分支的内容，这会带出一个很棘手的问题：“为何我什么都配置了，最后只能显示master代码分支的README.md文件，不是预期的gh-pages分支里的静态文件?”。")]),s._v(" "),e("p",[s._v("解决的办法也有，那就是顺着它的思路，使用mater分支当做build后静态资源存放的分支，代码分支放到别处去。参考"),e("a",{attrs:{href:"https://juejin.im/post/5d0715f6f265da1ba56b1e01",target:"_blank",rel:"noopener noreferrer"}},[s._v("拯救懒癌文档君 - VuePress + Travis CI + Github Pages 自动线上生成文档"),e("OutboundLink")],1),s._v(",我被伤到了，这种方案我就不细说了。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[s._v("这种方式的工程一般在Github Pages配置的时候，需要选择主题。")])]),s._v(" "),e("h3",{attrs:{id:"project-site"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-site"}},[s._v("#")]),s._v(" project-site")]),s._v(" "),e("p",[s._v("以工程的角度来创建一个专门展示工程，这里就可以选择分支了。切记工程名不要是"),e("span",{staticStyle:{color:"red"}},[s._v("github.io")]),s._v("为结尾。\n"),e("img",{attrs:{src:a(424),alt:"github_pages_config.jpg"}}),s._v("\ngh-pages分支是Github Pages约好的分支，这个后面travis-ci推送的时候会自动创建。这个方式不单只可以创建新的工程的时候适用，老工程也同样适用。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[s._v("这种方式的工程在Github Pages配置的时候，不要选择主题，因为我们用的是vuepress的主题。")])]),s._v(" "),e("h1",{attrs:{id:"根据vuepress-theme-reco创建出vuepress工程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据vuepress-theme-reco创建出vuepress工程"}},[s._v("#")]),s._v(" 根据vuepress-theme-reco创建出vuepress工程")]),s._v(" "),e("ol",[e("li",[s._v("下载空github工程")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意你clone你自己的路径哈，下面这个是我的举例")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/qiuzhongrun/blog.git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入工程")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("初始化vuepress工程\n在主题的"),e("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github地址"),e("OutboundLink")],1),s._v("有很清晰的初始化方式，下面贴出我的。")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加theme-cli工具")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @vuepress-reco/theme-cli\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请注意这里的 . 意思是当前blog目录下")]),s._v("\ntheme-cli init "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# run")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("在theme-cli工具init一个工程的时候，会让你选style，我选了afternoon-grocery，会带来很多已存在的文章，但是也给了很多我参考，后续删除即可。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("? What"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s the title of your project? blog\n? What'")]),s._v("s the description of your project? 个人博客\n? What"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s the author'")]),s._v("s name? Qiu Zhongrun\n? What style "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" you want your home page to be?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Select afternoon-grocery, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you want to download alexWjj"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s '")]),s._v("午后南杂'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  blog\n  doc\n❯ afternoon-grocery\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("修正偏差\n①添加base\n②修改title\n③修正dest目标路径为docs/.vuepress/dist")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  base"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/blog/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" # ①添加base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 为了后面访问的时候有上下文，没有这玩意儿，你访问就会出问题\n  title"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"欢迎你，这是我的博客！"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" # ②修改title，自己看着办哈\n  description"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Enjoy when you can, and endure when you must.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  dest"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docs/.vuepress/dist'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" # ③修正dest目标路径为docs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist，这个必须和稍后的自动部署的local_dir保持一致\n  head"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/favicon.ico'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'viewport'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'width=device-width,initial-scale=1,user-scalable=no'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  markdown"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lineNumbers"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/medium-zoom'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flowchart'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h1",{attrs:{id:"travis-ci部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci部署"}},[s._v("#")]),s._v(" travis-ci部署")]),s._v(" "),e("p",[s._v("参考这里的"),e("a",{attrs:{href:"https://vuepress-theme-reco.alexWjj.com/views/other/deploy.html#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"}},[s._v("自动部署"),e("OutboundLink")],1),s._v("，这里不展开讲，只讲一些注意点。")]),s._v(" "),e("ol",[e("li",[s._v("build命令里面写的是"),e("code",[s._v("npm run build")]),s._v("，如果你看着不顺眼，可以修改为"),e("code",[s._v("yarn build")]),s._v("意思是一个意思。")]),s._v(" "),e("li",[s._v("设置token的时候，除了delete repo的权限不给，其他都给上吧。")]),s._v(" "),e("li",[s._v("授权travis-ci Manage repositories on GitHub的时候，不要全选，就选你要的就行")]),s._v(" "),e("li",[s._v("要在https://github.com/qiuzhongrun/blog/settings，也就是你的github repository的Settings里修改Github Pages的Source为gh-pages，这个分支你可以自己建，也可以等第一次跑完travis-ci它自动创建好后再选。")])]),s._v(" "),e("p",[s._v("到此，只要push一次代码，就会触发travis-ci自动build，推送到指定分支(gh-pages)，然后你在https://qiuzhongrun.github.io/blog就可以访问到了。")]),s._v(" "),e("h1",{attrs:{id:"后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),e("p",[s._v("后续使用的时候，发现一些问题，这里也记录下来以供参考。")]),s._v(" "),e("h3",{attrs:{id:"热部署hot-reload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热部署hot-reload"}},[s._v("#")]),s._v(" 热部署Hot Reload")]),s._v(" "),e("p",[s._v("没错，vuepress 1.x这个功能是有问题的，在这个"),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/1283",target:"_blank",rel:"noopener noreferrer"}},[s._v("#issue"),e("OutboundLink")],1),s._v("里有讲，至今未见关闭。\n解决办法也有多人提出多种方案，我采用"),e("a",{attrs:{href:"https://github.com/pepsifan",target:"_blank",rel:"noopener noreferrer"}},[s._v("pepsifan"),e("OutboundLink")],1),s._v("提出的nodemon解决方案，亲测有效。\n下面是"),e("a",{attrs:{href:"https://github.com/pepsifan",target:"_blank",rel:"noopener noreferrer"}},[s._v("pepsifan"),e("OutboundLink")],1),s._v("的方案：")]),s._v(" "),e("ol",[e("li",[s._v("安装nodemon")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D nodemon\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("修改package.json，增加命令")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nodemon --ext md,vue --watch .vuepress --watch . --exec vuepress dev docs"')]),s._v(" # 新增的启动命令\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("start启动")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个方案监控了.vue和.md文件的变动，会触发vuepress工程reload，浏览器刷新可见新内容。")])],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);t.default=r.exports}}]);