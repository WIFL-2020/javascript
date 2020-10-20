第一步：打开 git_bash 这个窗口

![image-20200920183655967](ssh.assets/image-20200920183655967.png)

![image-20200920183747605](ssh.assets/image-20200920183747605.png)

 生成的密钥在C:\\\\Users\当前用户名称\\.ssh 文件夹里面

在`gitee`网站中添加公钥

![image-20200920183946169](ssh.assets/image-20200920183946169.png)

找到ssh公钥

![image-20200920184019752](ssh.assets/image-20200920184019752.png)

![image-20200920184119340](ssh.assets/image-20200920184119340.png)



可以将之前的 `https`仓库地址给删除 然后再增加新的 ssh协议的仓库地址

```bash
# 查看别名
git remote -v
```

![image-20200920184338507](ssh.assets/image-20200920184338507.png)

```bash
# 删除别名
# git remote remove 别名名称
git remote remove origin
```

![image-20200920184503232](ssh.assets/image-20200920184503232.png)

需要重新给我们的添加别名 

```bash
# git remote add 别名 ssh地址
```

![image-20200920184812399](ssh.assets/image-20200920184812399.png)