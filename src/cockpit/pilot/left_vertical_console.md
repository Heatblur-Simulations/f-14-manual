# Left Vertical Console

> 🚧 TODO: Convert tables into text chunks like the F-4

## Fuel Management Panel

![Fuel Management](../../img/fuel.png)

Control panel for various fuel-related systems, CADC master reset, and the anti-skid system.

| No. | Control/Indicator         | Function                                                                                            |
|---|------------------------|----------------------------------------------------------------------------------------------------|
| 1 |QTY SEL switch            | Switch selecting what the fuel quantity tapes on the fuel quantity display shows. Spring-loaded to FEED.<br>**FEED** - Shows respective feed and fuselage tank fuel quantity.<br>**WING** - Shows respective wing tank fuel quantity.<br>**EXT** - Shows respective external fuel tank quantity. |
| 2 | FEED switch               | Switch selecting fuel feed to the engines. Guard locks the switch to NORM until lifted.           |
| 3 |WING/EXT TRANS switch     | Switch selecting operation of the wing and external tanks.<br>**ORIDE** - Override.<br>**AUTO** - Normal position.<br>**OFF** - Turns off fuel feed from the wing and external tanks. |
| 4 | Refueling probe indicator light | Transition light illuminated when refueling probe is not in extended or retracted position.       |
| 5 | DUMP switch               | OFF/DUMP switch. Allows fuel dump when speed brakes are retracted, afterburner off and weight off wheels. |
| 6 | REFUEL PROBE switch       | Selection switch toggling operation of refueling probe.<br>**ALL EXTD** - All extended, extends refueling probe and allows refueling of all tanks. Also resets WING/EXT TRANS switch to AUTO.<br>**FUS EXTD** - Fuselage extended, extends refueling probe and allows refueling of only fuselage tanks.<br>RET - Retracted, retracts refueling probe. |
| 7 | ANTI SKID SPOILER BK switch | Selection switch determining operation anti-skid and spoiler brake systems.<br>**BOTH** - Enables both anti-skid and spoiler brake function with weight on wheels.<br>**OFF** - Turns off both systems.<br>**SPOILER BK** - Spoiler brake, enables spoiler brake function with weight on wheels. |
| 8 | MASTER RESET button      | Resets CADC failure detection system and associated fault displays.                                  |

## Control Surface Position Indicator

![Control Surface](../../img/control.png)

Indicator for indication of control surface positions.

| No. | Indicator  | Function                                                                                        |
|----|--------|-------------------------------------------------------------------------------------------------|
| 1 | SPOILER    | Spoiler position indicators.<br>**DN** - Down, flush with wings.<br>**Up**-arrow - Extended above wing.<br>**Down**-arrow - Drooped below wing surface. |
| 2 | RUDDER     | Rudder position indicators, shows position of left and right rudders, each marked L or R.       |
| 3 | HORIZ TAIL | Horizontal stabilizer position indicators, shows position of left and right stabilizer surfaces, marked L or R respectively. |

## Launch Bar Abort Panel

![Launch Abort](../../img/launch-abort.png)

LAUNCH BAR – Selection switch – When held in ABORT lifts the launch bar for launch abortion. Spring-loaded to NORM (Normal) which is the standard position. Not currently used in DCS.

## Landing Gear Control Panel

![Gear Control](../../img/gear.png)

Control panel for the main landing gear and emergency stores jettison.

| No. | Control/Indicator  | Function                                                                                         |
|----|----------------|--------------------------------------------------------------------------------------------------|
| 1 | LDG GEAR           | Landing gear handle. Selects gear UP or DOWN.<br>For emergency extension in DOWN position, push handle in, turn clockwise and pull out. This releases a compressed nitrogen charge for emergency extension. |
| 2 | DOWN LOCK ORIDE    | Indicates weight on wheels when moved down by solenoid. Can be lifted up to override. Non-functional in DCS. |
| 3 | HYD ISOL           | Switch isolating landing gear, nosewheel steering and wheel brakes from the combined hydraulic system. Automatically moved to T.O./LDG by LDG GEAR in DOWN position.<br>FLT - In flight operation, isolates systems listed above.<br>T.O./LDG - Take-off/landing, connects systems listed above, allowing them to operate. |
| 4 | Transition light   | Illuminates to indicate landing gear position not corresponding to current LDG GEAR handle position. |
| 5 | EMERG STORES button | Emergency stores jettison. Illuminates to indicate activation when pressed.                       |
| 6 | NOSE STRUT switch  | Switch selecting nosewheel strut retraction.<br>EXTD - Extend, extends nosewheel strut and raises and locks launch bar.<br>OFF - Turns off nosewheel strut movement, spring-loaded to this position.<br>KNEEL - Releases pressure from nosewheel strut to retract it, kneeling aircraft. Also unlocks launch bar. |
| 7 | BRAKE-PULL handle  | Parking brake, pull out to apply parking brake, push in to release.                               |
| 8 | EJECT CMD indicator| Indicates ejection system mode for the back seat.<br>PILOT - Pilot ejects both crewmembers, RIO only himself.<br>MCO - Each position ejects both crewmen. |

# Wheels and Flaps Position Indicator
 
Indicates position of flaps and slats, speed brakes, and the landing gear. The slats are indicated as follows:

| <img src="../../img/off.png" width="100" height="100" alt="Power off"> | Power off or maneuver slats extended. |
|----------------------------------------------------------|--------------------------------------|
| <img src="../../img/slats-ext.png" width="100" height="100" alt="Slats extended"> | Slats extended.                      |
| <img src="../../img/slats-ret.png" width="100" height="100" alt="Slats retracted"> | Slats retracted.                     |

Flap Position is displayed by an indicator moving between UP and DOWN. The first marked section of the indicator indicates maneuver flap-range. The landing gear is indicated as follows:

| <img src="../../img/off.png" width="100" height="100" height="100" alt="Power off"> | Power off or unsafe gear.            |
|----------------------------------------------------------|--------------------------------------|
| <img src="../../img/gear-down.png" width="100" height="100" alt="Gear down"> | Gear down.                          |
| <img src="../../img/gear-up.png" width="100" height="100" height="100" alt="Gear up"> | Gear retracted and doors closed.    |

Speed brakes are indicated as follows:

| <img src="../../img/off.png" width="100" height="100" alt="Brake off"> | Speed brake system power off.        |
|----------------------------------------------------------|--------------------------------------|
| <img src="../../img/brake-partial.png" width="100" height="100" alt="Brake partial"> | Speed brake partial extension, not in motion. |
| <img src="../../img/brake-out.png" width="100" height="100" alt="Brake out"> | Speed brake fully extended.         |
| <img src="../../img/brake-in.png" width="100" height="100" alt="Brake in"> | Speed brake retracted.               |


