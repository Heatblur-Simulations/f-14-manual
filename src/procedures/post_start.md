# Post Start

> 🚧 TODO: Verify for accuracy.

## Pilot

| Step | Item                                                                | Action/Details                                                                                                                                                                         |
| ---- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | STAB AUG switches                                                   | All ON                                                                                                                                                                                 |
| 2    | MASTER TEST switch                                                  | Set to EMERG GEN                                                                                                                                                                       |
| 3    | VMCU operation                                                      | Check for momentary illumination (~2s) of:<br>- PITCH STAB 1/2<br>- ROLL STAB 1/2<br>- YAW STAB OP/OUT<br>- SPOILERS<br>- HZ TAIL AUTH<br>- RUDDER AUTH<br>- AUTO PILOT<br>- MACH TRIM |
| 4    | Notify RIO                                                          | Advise test complete                                                                                                                                                                   |
| 5    | STAB AUG switches                                                   | All ON                                                                                                                                                                                 |
| 6    | AFTC                                                                | L/R ENG MODE SELECT: SEC → PRI                                                                                                                                                         |
| 7    | Emergency WING SWEEP handle                                         | If not overswept:<br>Move to 68°<br>Then full OV SW<br>Hold until HZ TAIL AUTH light goes out and OVER flag appears<br>Then stow                                                       |
| 8    | Wing-sweep mode switch                                              | AUTO                                                                                                                                                                                   |
| 9    | WING SWEEP DRIVE NO.1 and WG SW DR NO.2/MANUV FLAP circuit breakers | In                                                                                                                                                                                     |
| 10   | WING/EXT TRANS switch                                               | OFF                                                                                                                                                                                    |
| 11   | MASTER RESET pushbutton                                             | Depress                                                                                                                                                                                |
| 12   | COMM/NAV/GEAR/DISPLAYS                                              | Set all to ON:<br>- UHF to TR+G or BOTH<br>- TACAN to T/R<br>- ARA-63 to ON<br>- DISPLAYS power switches ON<br>- RADAR ALT ON                                                          |
| 13   | Trim                                                                | Set to 000                                                                                                                                                                             |
| 14   | Standby attitude gyro                                               | Erect                                                                                                                                                                                  |
| 15   | MASTER RESET pushbutton                                             | Depress                                                                                                                                                                                |
| 16   | MASTER TEST switch                                                  | Set to OBC                                                                                                                                                                             |
| 17   | Autopilot                                                           | Engage                                                                                                                                                                                 |
| 18   | Speed brake switch                                                  | Extend → Retract                                                                                                                                                                       |
| 19   | REFUEL PROBE switch                                                 | Extend → Retract                                                                                                                                                                       |
| 20   | WSHLD AIR switch                                                    | Cycle                                                                                                                                                                                  |
| 21   | OBC                                                                 | OFF                                                                                                                                                                                    |
| 22   | WING/EXT TRANS switch                                               | OFF                                                                                                                                                                                    |
| 23   | Trim                                                                | Re-check and set to 000                                                                                                                                                                |

## RIO

| Step | Item                         | Action/Details                                                                                                                     |
| ---- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1    | EMERG GEN check              | Ensure completed before continuing                                                                                                 |
| 2    | ECS system                   | Allow ECS to run ≥ 3 minutes before powering avionics/AWG-9                                                                        |
| 3    | WCS switch                   | Set to STBY (AWG-9 COND light should illuminate)                                                                                   |
| 4    | LIQ COOLING switch           | Set to AWG-9 or AWG-9/AIM-54 (if loaded)                                                                                           |
| 5    | IR/TV power switch           | STBY or IR/TV                                                                                                                      |
| 6    | CATEGORY knob                | NAV                                                                                                                                |
| 7    | NAV MODE switch              | Align                                                                                                                              |
| 8    | Communications               | U/VHF MODE: T/R G<br>DATA LINK: ON                                                                                                 |
| 9    | TACAN                        | Set function selector to T/R                                                                                                       |
| 10   | RADAR WARNING RCVR panel     | Display type: NORM<br>PWR: ON<br>TEST: SPL<br>MODE: LMT                                                                            |
| 11   | DECM knob                    | STBY<br>Wait for light to go off → HOLD 3 sec → ACT for OBC                                                                        |
| 12   | IFF MASTER knob              | STBY<br>CODE: Set as required<br>Test panel: All test functions<br>ANT switch: AUTO                                                |
| 13   | AUTO BIT 2                   | Verify complete (on TID)                                                                                                           |
| 14   | CAP (nav init)               | Enter own A/C lat/lon and elevation                                                                                                |
| 15   | Altimeter                    | Reset                                                                                                                              |
| 16   | Computer address panel       | Enter mission data: WP, FP, etc.                                                                                                   |
| 17   | DDD (radar display)          | Set                                                                                                                                |
| 18   | TID controls                 | Set:<br>CONTRAST / BRIGHT<br>CLSN: OFF<br>ALT NUM / SYM ELEM / LAUNCH ZONE / VEL VECTOR: ON<br>DATA LINK / JAM STROBE: As required |
| 19   | Multiple display indicator   | TEST button: Press<br>BRIGHTNESS: Set                                                                                              |
| 20   | DATA/ADF switch              | Set to BOTH                                                                                                                        |
| 21   | Hand control panel           | Light test: Press<br>El Vernier: Set 0°                                                                                            |
| 22   | AN/ALE-39                    | BURST: 3<br>INTERVAL: 0.1<br>SALVO: 2<br>SALVO INTERVAL: 0.4                                                                       |
| 23   | CANOPY DEFOG/CABIN AIR lever | Set to CABIN AIR                                                                                                                   |
| 24   | D/L reply                    | As required                                                                                                                        |
| 25   | AAI panel                    | TEST/CHAL CC switch: Test → check DDD display                                                                                      |
| 26   | Indicator lights             | Test                                                                                                                               |
| 27   | DDI BIT                      | Test                                                                                                                               |
| 28   | After INS alignment complete | NAV mode: INS<br>Program restart: Press<br>STBY/READY lights: OFF<br>TID NAV: INS                                                  |
| 29   | DEST data                    | Verify                                                                                                                             |
| 30   | BRG/DIST to destination      | Check                                                                                                                              |
| 31   | Own A/C groundspeed          | Check                                                                                                                              |
| 32   | Magnetic variation           | Check                                                                                                                              |
| 33   | KY-28/KY-58                  | Set as required                                                                                                                    |
| 34   | Standby attitude gyro        | Erect                                                                                                                              |
| 35   | Notify pilot                 | Ready to taxi                                                                                                                      |
