(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{458:function(t,o,_){"use strict";_.r(o);var n=_(1),r=Object(n.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("有关面试经典问题的回答，用于博主自己复习，也可参考。")]),t._v(" "),o("h3",{attrs:{id:"原型和原型链-假设构造函数名person"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链-假设构造函数名person"}},[t._v("#")]),t._v(" 原型和原型链？（假设构造函数名Person）")]),t._v(" "),o("ul",[o("li",[t._v("每一个实例对象都有一个隐式原型"),o("code",[t._v("__proto__")]),t._v("，指向的就是构造函数的原型对象Person.prototype；")]),t._v(" "),o("li",[t._v("每一个构造函数都有一个显式原型"),o("code",[t._v("prototype")]),t._v("，也就是原型对象，包含构造函数身上的方法和属性（所以每一个实例对象都可以访问到构造函数中的方法和属性，就是通过这一关系 实例对象."),o("strong",[t._v("proto")]),t._v("->构造函数.prototype）；")])]),t._v(" "),o("p",[t._v("请牢记上面两条规则，接下来的推论是基于上面两条规则")]),t._v(" "),o("ul",[o("li",[t._v("我们定义的一个构造函数实际上是Function这一构造函数的一个"),o("strong",[t._v("实例对象")]),t._v("，由上面两条关系可以得到，构造函数既然本身是一个实例，那么身上肯定也有一个__proto__，指向Function.prototype；")]),t._v(" "),o("li",[t._v("接下来再看看Function.prototype，可以注意到它是Function这个构造函数的原型对象，关键词是"),o("strong",[t._v("对象")]),t._v("，由第一条关系可以得到，对象身上有一个__proto__，指向构造函数的原型对象，那么Function的原型对象是谁构造的呢？答案是：Object。所以Function.prototype.__proto__指向的就是Object.prototype。")]),t._v(" "),o("li",[t._v("讲到这里就会发现，原型链的定义也已经出来了，实例对象->构造函数->Function构造函数->Object，这样层层往上的关系就是原型链了")])])])}),[],!1,null,null,null);o.default=r.exports}}]);