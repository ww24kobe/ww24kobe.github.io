(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{236:function(s,a,t){"use strict";t.r(a);var n=t(28),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux下安装samba服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux下安装samba服务"}},[s._v("#")]),s._v(" Linux下安装samba服务")]),s._v(" "),t("p",[s._v("samba作用：主要用于window和linux系统之间进行共享文件。")]),s._v(" "),t("p",[s._v("安装基本步骤如下:")]),s._v(" "),t("ul",[t("li",[s._v("步骤1 yum安装samba")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y samba\n")])])]),t("ul",[t("li",[s._v("步骤2 安装好之后在建立一个用户(把同时创建用户的家作为共享文件目录)")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v("\tsamtest\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\tsamtest\n")])])]),t("ul",[t("li",[s._v("步骤3 将系统用户加入到samba配置里面")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("smbpasswd -a samtest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("刚刚创建的用户"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("后面链接会提示输入密码(如123456)(window连接的密码)")]),s._v(" "),t("ul",[t("li",[s._v("步骤4 启动samba服务,命令如下")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" smb start\n")])])]),t("ul",[t("li",[s._v("步骤5\nwindow进行连接，快捷键win+r:输入"),t("code",[s._v("\\\\192.168.247.129")]),s._v("(linux的ip地址)\n后面会提示输入用户名和密码: samtest  123456")])]),s._v(" "),t("p",[s._v("也可以在window中可将共享目录映射为网络驱动器,后续可以直接去计算机中打开,操作起来更加方便。")])])}),[],!1,null,null,null);a.default=e.exports}}]);