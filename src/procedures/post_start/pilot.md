# 起动后（飞行员）


| 步骤 | 项目                                                                  | 动作/详情                                                                                    |
| ---- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1    | STAB AUG 开关                                                         | 全部 ON                                                                                      |
| 2    | MASTER TEST 开关                                                      | EMERG GEN                                                                                    |
|      |                                                                       | NO GO 灯应亮起约1秒后 GO 灯亮起。                                                            |
|      |                                                                       | 断开时 AHRS 灯可能短暂亮起。                                                                 |
|      |                                                                       | 告知 RIO 测试完成。                                                                          |
| 3    | VMCU 工作状态 - 确认。                                                | 在 MASTER TEST 开关从 EMERG GEN 档位退出后，以下灯光应亮起不超过2秒：                        |
|      |                                                                       | - PITCH STAB 1 和 2。                                                                        |
|      |                                                                       | - ROLL STAB 1 和 2。                                                                         |
|      |                                                                       | - YAW STAB OP 和 OUT。                                                                       |
|      |                                                                       | - SPOILERS。                                                                                 |
|      |                                                                       | - HZ TAIL AUTH。                                                                             |
|      |                                                                       | - RUDDER AUTH。                                                                              |
|      |                                                                       | - AUTO PILOT。                                                                               |
|      |                                                                       | - MACH TRIM。                                                                                |
|      |                                                                       | RUDDER AUTH 灯会保持亮起，直到按下主复位按钮来复位，且 PITCH 和 ROLL STAB AUG 开关应已关闭。 |
| 4    | 告知 RIO 测试和检查完毕                                               |                                                                                              |
| 5    | STAB AUG 开关                                                         | 全部 ON                                                                                      |
| 6    | AFTC                                                                  | 检查                                                                                         |
|      | L ENG MODE SELECT 开关 - SEC。                                        | L ENG SEC 灯亮起，左 NOZ 表读数指向零以下。                                                  |
|      | L ENG MODE SELECT 开关 - PRI。                                        | L ENG SEC 灯熄灭，NOZ 表读数至 100%。                                                        |
|      | R ENG MODE SELECT 开关 - SEC。                                        | R ENG SEC 灯亮起，右 NOZ 表读数指向零以下。                                                  |
|      | R ENG MODE SELECT 开关 - PRI。                                        | R ENG SEC 灯熄灭，NOZ 表读数至 100%。                                                        |
| 7    | 应急机翼后掠手柄                                                      | OV SW                                                                                        |
|      |                                                                       | - 如果机翼不处于停放后掠状态，将应急机翼后掠手柄移至68°升起位置。                           |
|      |                                                                       | - 然后将手柄提至完全抽出并保持，直到 HZ TAIL AUTH 注意灯熄灭且机翼后掠指示器出现 OVER 旗。   |
|      |                                                                       | - 手柄拉向最后 OV SW 位并按下。                                                              |
| 8    | 机翼后掠控制开关                                                      | AUTO                                                                                         |
| 9    | WING SWEEP DRIVE NO.1 和 WG SW DR NO. 2/MANUV FLAP 断路器（LE1、LE2） | 按下                                                                                         |
| 10   | WING/EXT TRANS 开关                                                   | OFF                                                                                          |
| 11   | MASTER RESET 按钮                                                     | 按下                                                                                         |
| 12   | 无线电/导航/起落架/显示器                                             | ON                                                                                           |
|      |                                                                       | - UHF 模式选择旋钮 - TR+G 或 BOTH。                                                          |
|      |                                                                       | - TACAN 功能选择旋钮 - T/R。                                                                 |
|      |                                                                       | - ARA-63 POWER 开关 - ON。                                                                   |
|      |                                                                       | - DISPLAYS 控制开关 - ON。                                                                   |
|      |                                                                       | - 雷达高度计 - ON。                                                                          |
| 13   | 配平                                                                  | 调定为 000                                                                                   |
| 14   | 备用姿态仪                                                            | 调平                                                                                         |
|      |                                                                       | 至少在起飞两分钟前完成此操作。                                                               |
| 15   | MASTER RESET 按钮                                                     | 按下                                                                                         |
| 16   | MASTER TEST 开关                                                      | OBC                                                                                          |
|      |                                                                       | 与 RIO 和飞行联队舰载机长协作。                                                              |
| 17   | 自动驾驶                                                              | 接通                                                                                         |
|      |                                                                       | 作为上述测试的一部分。                                                                       |
| 18   | 减速板开关                                                            | EXT，然后 RET                                                                                |
|      |                                                                       | 先测试部分展开和收起，再测试完全展开和收起。                                                 |
|      |                                                                       | 确认平尾晃动以验证综合配平系统工作正常。                                                     |
| 19   | REFUEL PROBE 开关                                                     | 全部 EXT，然后 RET                                                                           |
|      |                                                                       | 确认受油管功能正常，且受油管转移指示灯正常亮起。                                             |
| 20   | WSHLD AIR 开关                                                        | 循环检查                                                                                     |
| 21   | OBC                                                                   | OFF                                                                                          |
|      |                                                                       | 如果 OBC 启用，确认自动驾驶断开。                                                            |
| 22   | WING/EXT TRANS 开关                                                   | OFF                                                                                          |
| 23   | 配平                                                                  | 检查并调定为 000                                                                             |
|      | **舰上作业略过步骤24至42**                                            |                                                                                              |
| 24   | 应急机翼后掠手柄                                                      | 20°                                                                                         |
|      |                                                                       | **注意 - 机翼运动**                                                                          |
|      |                                                                       | 将手柄移动至20°（最前）后，启用随动限位器。                                                 |
|      |                                                                       | 按下手柄并合上保护盖。                                                                       |
|      |                                                                       | HZ TAIL AUTH 指示灯将在移出 OV SW 时短暂亮起。                                               |
| 25   | MASTER RESET 按钮                                                     | 按下                                                                                         |
| 26   | 机外照明                                                              | 检查                                                                                         |
|      |                                                                       | 根据需要。                                                                                   |
| 27   | 襟翼和前缘缝翼                                                        | DN                                                                                           |
|      |                                                                       | 检查外侧扰流板模块是否全偏转以及正常作动。                                                   |
|      |                                                                       | 同时确认水平安定面后缘是否向上抬起3°。                                                      |
| 28   | 飞行操纵                                                              | 循环检查                                                                                     |
|      |                                                                       | 确认上述操纵面可在完整行程内偏转，且偏转速率正常。                                           |
| 29   | DLC                                                                   | 检查                                                                                         |
|      |                                                                       | 确认 DLC 输入时水平安定面是否偏转。                                                          |
| 30   | ANTI SKID SPOILER BK 开关                                             | SPOILER BK                                                                                   |
| 31   | MASTER TEST 开关                                                      | STICK SW                                                                                     |
|      |                                                                       | SPOILER 灯亮，且所有扰流板放下。                                                             |
|      |                                                                       | 操纵杆向各方向移动 1 英寸时，GO 灯应亮起。                                                   |
| 32   | 扰流板和油门                                                          | 检查                                                                                         |
| 33   | ANTI SKID SPOILER BK 开关                                             | OFF                                                                                          |
| 34   | 襟翼和缝翼                                                            | UP                                                                                           |
| 35   | 机动襟翼                                                              | DN                                                                                           |
| 36   | 机翼后掠控制开关                                                      | MAN 50                                                                                       |
|      |                                                                       | 若机翼后掠未在 50° 时停止，立即选择 AUTO。                                                  |
| 37   | 机动襟翼                                                              | 收上                                                                                         |
| 38   | 机翼后掠控制开关                                                      | BOMB                                                                                         |
|      |                                                                       | 确认机动襟翼收起。                                                                           |
| 39   | 应急机翼后掠手柄                                                      | 68°                                                                                         |
| 40   | 应急机翼后掠手柄                                                      | OV SW                                                                                        |
| 41   | 机翼后掠控制开关                                                      | AUTO                                                                                         |
| 42   | MASTER RESET 按钮                                                     | 按下                                                                                         |
|      | **继续舰上作业检查单**                                                |                                                                                              |
| 43   | ANTI SKID SPOILER BK 开关                                             | BOTH                                                                                         |
| 44   | ANTI SKID                                                             | BIT                                                                                          |
|      |                                                                       | 解除停放刹车前，确保粗对准完成。                                                             |
| 45   | ANTI SKID SPOILER BK 开关                                             | OFF                                                                                          |
| 46   |                                                                       | 雷达高度表 - BIT。                                                                           |
|      |                                                                       | 按下 SET 旋钮，应显示100英尺读数并亮绿灯。                                                   |
|      |                                                                       | 松开旋钮后读数应显示0英尺，警告音应在前后驾驶舱内响起，且 ALT LOW 灯亮起。                   |
| 47   | 显示器                                                                | 检查                                                                                         |
| 48   | TACAN                                                                 | BIT                                                                                          |
| 49   | ARA-63                                                                | BIT                                                                                          |
| 50   | HUD-VIDEO                                                             | BIT                                                                                          |
| 51   | 气压高度表                                                            | SET/RESET 模式                                                                               |
| 52   | 罗盘                                                                  | 确认                                                                                         |
|      |                                                                       | 检查 HUD、VDI、HSD 和 BDHI 上的 IMU 航向。                                                   |
| 53   | 飞行仪表                                                              | 检查                                                                                         |
