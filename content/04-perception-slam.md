# 04 Perception & SLAM · 感知与定位建图

## Sensors · 传感器

### LiDAR · 激光雷达

- 激光雷达原理与点云

### Camera · 相机

- 成像模型、内外参、标定

### IMU · 惯性测量

- 加速度、角速度、积分漂移

### Encoder · 编码器

- 轮式里程计

## State Estimation · 状态估计

- Kalman Filter、EKF、IEKF
- Bayes Filter、因子图优化
- Sensor Fusion 多传感器融合

## SLAM

### Front-end · 前端

- 数据关联、特征匹配、Scan Matching

### Back-end · 后端

- 图优化、回环检测、重定位

### LiDAR SLAM

- Cartographer、FAST-LIO、LIO-SAM

### Visual SLAM

- ORB-SLAM3、视觉惯性里程计

## Mapping · 地图构建

- Occupancy Grid、OctoMap
- 点云地图、3D Gaussian Splatting
- NeRF、Semantic Mapping、BEV
