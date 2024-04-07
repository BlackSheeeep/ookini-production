#!/bin/bash

# 指定目标目录
target_directory="/www/wwwroot/kimono/wp-content/ookini"
# 循环执行脚本
while true; do
# 切换到目标目录

cd "$target_directory"

git pull origin main

  # 延迟间隔（以秒为单位）
  sleep 30  # 每隔60秒执行一次，可根据需要进行调整
done
