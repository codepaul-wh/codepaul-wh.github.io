(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{413:function(e,s,a){"use strict";a.r(s);var t=a(26),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"redis-分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-分区"}},[e._v("#")]),e._v(" Redis 分区")]),e._v(" "),a("p",[e._v("分区是分割数据到多个Redis实例的处理过程，因此每个实例只保存key的一个子集。")]),e._v(" "),a("h3",{attrs:{id:"分区的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区的优势"}},[e._v("#")]),e._v(" 分区的优势")]),e._v(" "),a("ul",[a("li",[e._v("通过利用多台计算机内存的和值，允许我们构造更大的数据库。")]),e._v(" "),a("li",[e._v("通过多核和多台计算机，允许我们扩展计算能力；通过多台计算机和网络适配器，允许我们扩展网络带宽。")])]),e._v(" "),a("h3",{attrs:{id:"分区的不足"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区的不足"}},[e._v("#")]),e._v(" 分区的不足")]),e._v(" "),a("p",[e._v("redis的一些特性在分区方面表现的不是很好：")]),e._v(" "),a("ul",[a("li",[e._v("涉及多个key的操作通常是不被支持的。举例来说，当两个set映射到不同的redis实例上时，你就不能对这两个set执行交集操作。")]),e._v(" "),a("li",[e._v("涉及多个key的redis事务不能使用。")]),e._v(" "),a("li",[e._v("当使用分区时，数据处理较为复杂，比如你需要处理多个rdb/aof文件，并且从多个实例和主机备份持久化文件。")]),e._v(" "),a("li",[e._v("增加或删除容量也比较复杂。redis集群大多数支持在运行时增加、删除节点的透明数据平衡的能力，但是类似于客户端分区、代理等其他系统则不支持这项特性。然而，一种叫做presharding的技术对此是有帮助的。")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"分区类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区类型"}},[e._v("#")]),e._v(" 分区类型")]),e._v(" "),a("p",[e._v("Redis 有两种类型分区。 假设有4个Redis实例 R0，R1，R2，R3，和类似user:1，user:2这样的表示用户的多个key，对既定的key有多种不同方式来选择这个key存放在哪个实例中。也就是说，有不同的系统来映射某个key到某个Redis服务。")]),e._v(" "),a("h3",{attrs:{id:"范围分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#范围分区"}},[e._v("#")]),e._v(" 范围分区")]),e._v(" "),a("p",[e._v("最简单的分区方式是按范围分区，就是映射一定范围的对象到特定的Redis实例。")]),e._v(" "),a("p",[e._v("比如，ID从0到10000的用户会保存到实例R0，ID从10001到 20000的用户会保存到R1，以此类推。")]),e._v(" "),a("p",[e._v("这种方式是可行的，并且在实际中使用，不足就是要有一个区间范围到实例的映射表。这个表要被管理，同时还需要各 种对象的映射表，通常对Redis来说并非是好的方法。")]),e._v(" "),a("h3",{attrs:{id:"哈希分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希分区"}},[e._v("#")]),e._v(" 哈希分区")]),e._v(" "),a("p",[e._v("另外一种分区方法是hash分区。这对任何key都适用，也无需是object_name:这种形式，像下面描述的一样简单：")]),e._v(" "),a("ul",[a("li",[e._v("用一个hash函数将key转换为一个数字，比如使用crc32 hash函数。对key foobar执行crc32(foobar)会输出类似93024922的整数。")]),e._v(" "),a("li",[e._v("对这个整数取模，将其转化为0-3之间的数字，就可以将这个整数映射到4个Redis实例中的一个了。93024922 % 4 = 2，就是说key foobar应该被存到R2实例中。注意：取模操作是取除的余数，通常在多种编程语言中用%操作符实现。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);