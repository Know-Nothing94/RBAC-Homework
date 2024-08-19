/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80017 (8.0.17)
 Source Host           : localhost:3306
 Source Schema         : homework

 Target Server Type    : MySQL
 Target Server Version : 80017 (8.0.17)
 File Encoding         : 65001

 Date: 27/08/2023 16:19:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for acmanagement
-- ----------------------------
DROP TABLE IF EXISTS `acmanagement`;
CREATE TABLE `acmanagement`  (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `roomID` int(11) NULL DEFAULT NULL,
  `roomName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `keepTime` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ACStatus` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `curTem` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `setTem` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of acmanagement
-- ----------------------------
INSERT INTO `acmanagement` VALUES ('kt-1', 101, '101班', 'offline', '10h', NULL, NULL, NULL, NULL);
INSERT INTO `acmanagement` VALUES ('kt-10', 203, '203班', 'online', '200d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-11', 204, '204班', 'online', '200d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-2', 101, '101班', 'online', '58d10h', 'close', NULL, '28', NULL);
INSERT INTO `acmanagement` VALUES ('kt-3', 103, '103班', 'online', '58d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-4', 104, '104班', 'online', '200d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-5', 105, '105班', 'online', '200d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-6', 106, '106班', 'online', '200d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-7', 107, '107班', 'online', '200d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-8', 201, '201班', 'online', '200d10h', 'run', '制冷', '28', '28');
INSERT INTO `acmanagement` VALUES ('kt-9', 202, '202班', 'online', '200d10h', 'run', '制冷', '28', '28');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `roles` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'Super Admin', '111111', 'admin', '我是个超级管理员', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 'admin-token');
INSERT INTO `user` VALUES (2, 'Normal Editor', '666666', 'user', '我是个普通用户', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 'editor-token');

SET FOREIGN_KEY_CHECKS = 1;
