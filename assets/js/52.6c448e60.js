(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{414:function(t,e,r){"use strict";r.r(e);var n=r(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"redis-事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-事务"}},[t._v("#")]),t._v(" Redis 事务")]),t._v(" "),r("p",[t._v("Redis 事务可以一次执行多个命令， 并且带有以下两个重要的保证：")]),t._v(" "),r("ul",[r("li",[t._v("事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。")]),t._v(" "),r("li",[t._v("事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。")])]),t._v(" "),r("p",[t._v("一个事务从开始到执行会经历以下三个阶段：")]),t._v(" "),r("ul",[r("li",[t._v("开始事务。")]),t._v(" "),r("li",[t._v("命令入队。")]),t._v(" "),r("li",[t._v("执行事务。")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("以下是一个事务的例子， 它先以 "),r("strong",[t._v("MULTI")]),t._v(" 开始一个事务， 然后将多个命令入队到事务中， 最后由 "),r("strong",[t._v("EXEC")]),t._v(" 命令触发事务， 一并执行事务中的所有命令：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('redis 127.0.0.1:6379> MULTI\nOK\n \nredis 127.0.0.1:6379> SET book-name "Mastering C++ in 21 days"\nQUEUED\n \nredis 127.0.0.1:6379> GET book-name\nQUEUED\n \nredis 127.0.0.1:6379> SADD tag "C++" "Programming" "Mastering Series"\nQUEUED\n \nredis 127.0.0.1:6379> SMEMBERS tag\nQUEUED\n \nredis 127.0.0.1:6379> EXEC\n1) OK\n2) "Mastering C++ in 21 days"\n3) (integer) 3\n4) 1) "Mastering Series"\n   2) "C++"\n   3) "Programming"\n')])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"redis-事务命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-事务命令"}},[t._v("#")]),t._v(" Redis 事务命令")]),t._v(" "),r("p",[t._v("下表列出了 redis 事务的相关命令：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("命令及描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3638.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DISCARD"),r("OutboundLink")],1),t._v(" 取消事务，放弃执行事务块内的所有命令。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3639.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EXEC"),r("OutboundLink")],1),t._v(" 执行所有事务块内的命令。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3640.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MULTI"),r("OutboundLink")],1),t._v(" 标记一个事务块的开始。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3641.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UNWATCH"),r("OutboundLink")],1),t._v(" 取消 WATCH 命令对所有 key 的监视。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[WATCH key "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3642.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key ...]"),r("OutboundLink")],1),t._v(" 监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);