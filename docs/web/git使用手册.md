# git使用手册
![git](./image/git.png "git")

## 分支
+ 新建分支`git branch 分支名`
+ 查看分支`git branch -a`
+ 删除分支`git branch -d 分支名`
+ 创建分支并切换到分支上`git branch -b 分支名`
+ 更新远程分支`git fetch --prune`
+ 合并分支,把某个分支合并到master主分支上`git merge 分支名`
+ 切换分支`git checkout 分支名`

## 常用
+ 查看状态`git status`
+ 提交到stage`git add . 或者 git add a.txt 或者 git rm a.txt`
+ 从stage撤回`git reset HEAD 或者 git reset a.txt`
+ 提交的备注信息`git commit -m '这里是备注信息'`
+ 回到分支更改前的节点`git checkout .`
+ 查看日志`git log`，查看log日志时在命令行输入一个单词会把log保存成文件
+ 查看每次提交的文件列表`git log --stat`
+ 查看某次提交的修改内容`git show commitID`
+ git pull之后查看代码更新内容 `git diff HEAD^`
+ 显示工作目录与git仓库之间的差异`git diff HEAD`
+ 移动提交记录`git rebase 目标节点或分支`

## 远程分支
+ 克隆远程仓库`git clone 远程仓库的地址`
+ 添加远程仓库地址(origin 是远程仓库的代名词)`git remote add origin 地址`
+ 更新本地的远程分支目录`git remote update origin --prune`
+ 将本地仓库中的远程分支更新成了远程仓库相应分支最新的状态`git fetch`
+ 本地分支foo追踪远程分支origin/main`git branch -u origin/main foo`
### push
+ 提交`git push -u origin master`
+ 把本地分支推送到远端,如果远程没有这个分支则会创建一个`git push origin 本地分支:远程分支`
+ 删除远程分支`git push origin :远程分支`
+ pull requests提交：新建一个分支feature, 推送到远程服务器. 然后reset你的main分支和远程服务器保持一致, 否则下次你pull并且他人的提交和你冲突的时候就会有问题.
### pull
+ 拉取新远程分支到本地，当分支名不同时相当于追踪远程分支`git checkout -b 本地分支 origin/远程分支`
+ 拉取远程分支`git pull origin 远程分支:本地分支`
+ 拉取远程分支到本地的远程分支，不会合并到当前分支,如果本地没有这个分支则会创建一个这个分支`git fetch origin :foo`

## 辨析
+ git rebase会有更线性的节点树,git merge保留历史提交记录
+ `git pull origin foo` 相当于：`git fetch origin foo; git merge o/foo`
+ `git pull origin bar~1:bugFix` 相当于：`git fetch origin bar~1:bugFix; git merge bugFix`