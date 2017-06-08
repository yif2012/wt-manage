# mongoDB ubuntu 安装流程

## 安装mongoDB

1. 导入MongoDB 的公钥：
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
```

2. 为MongoDB创建一个list文件：
```
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
```

3. 更新本地资源包：
```
apt-get update
```

4. 安装最新稳定版本MongoDB：
```
apt-get install -y mongodb-org
```
---

## 开启mongoDB权限验证 3.0版本为例

1. 先创建一个mongoDB最高权限帐号：
```
mongo
use admin
db.createUser({user:"帐号",pwd:"密码",roles:["root"]})
```
提示：`Successfully added user: { "帐号" : "密码","roles" : [ "root" ] }`则创建成功

---
2. 修改配置文件开启权限验证功能：
```
cd /ect
vi mongod.conf
```
增加内容：
```
security:
    authorization: enabled
```
如果需要修改为外部访问可将`bindIp`注释掉 按esc键 :wq! 保存退出

---
3. 重启服务
```
service mongod restart
```
---
4. 查看权限是否开启成功
```
mongo
show tables
```
如有报错提示`not authorized on xxx to execute command` <br>
则表示成功开启验证。验证使用
```
db.auth('帐号','密码')
```
提示1，则表示验证通过，即可操作mongoDB

---
## `全文完`