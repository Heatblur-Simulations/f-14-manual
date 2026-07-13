# Flight Controls & AFCS

The flight control system on the F-14 Tomcat is driven by the two main hydraulic
circuits, powered by pumps connected to each engine.

For longitudinal (pitch) control both tail stabilizers are deflected in unison,
acting in the same way as traditional elevators.

Lateral (roll) control is produced by both the tail stabilizers and the spoilers
working in unison. To produce roll the stabilizers are deflected opposite each
other to act as ailerons in combination with the spoilers on the side to which
roll is commanded.

The rudders on the F-14 is a standard rudder configuration albeit in a two tail,
two rudder configuration.

Control surface position is indicated on the Control Surface Position Indicator
and can also be used to check trim position with controls at neutral.

> 💡 Above 15 units AOA, the rudders should be used for lateral (roll) control
> due to the different airflow along the aircraft control surfaces.

<iframe width="560" height="315" src="https://www.youtube.com/embed/b5opjCygZug?si=dhH39mxO0XQ-5ZpC"
title="DCS World - F-14 Tomcat - Maneuvering and Flight Characteristics" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Trim

Longitudinal and lateral trim is accomplished via the trim hat on the Control
Stick. This changes the stick neutral position, thus trimming the aircraft.
Rudder trim is accomplished via the **RUDDER TRIM** switch on the Inlet
Ramps/Throttle Control Panel, changing the neutral rudder position.

The Mach Trim and ITS (Integrated Trim System) automatically trims to compensate
for changes in longitudinal trim. The Mach Trim system compensates for transonic
and supersonic trim changes and the ITS for trim changes due to flap and
speed-brake position changes.

## AFCS Automatic Flight Control System

The AFCS or Automatic Flight Control System provides additional aircraft
stability (SAS or Stability Augmentation System) via automatic control surface
commands generated from AFCS sensors. The AFCS is controlled by switches on the
AFCS Control Panel and pitch, roll and yaw can each be set individually.

The pitch and roll switches are spring-loaded to off but normally held to on by
solenoids meaning that if the system is turned off or inoperable the switches
return to off. The yaw switch is purely mechanical.

Roll SAS should not be used for situations involving flight at AOA above 15
units and should therefore be set to off for combat maneuvers.

If the autopilot emergency disengage paddle on the control stick is held down
the pitch and roll channels will be set to off.

## Autopilot

Apart from stability augmentation the AFCS is also used to provide autopilot
functionality. To use the autopilot all three stabilization channels must be
enabled.

The controls for the autopilot system are situated on the AFCS Control Panel.

Autopilot modes available are attitude hold, heading hold, ground track,
altitude hold, vector/pcd (precision course direction) and acl (automatic
carrier landing).

By setting the autopilot **ENGAGE** switch to on the attitude hold is engaged,
maintaining current aircraft attitude. Limited to within 30° pitch and 60° roll
angles and the aircraft will be automatically moved within this range. Current
attitude can be changed with the control stick and will be held when the stick
is released.

The **ENGAGE** switch is also a prerequisite for all other autopilot modes.

The **HDG** position on the HDG switch enables heading hold, maneuver the
aircraft to desired heading and with a bank angle of less than 5° to set
heading.

The ground track mode is entered by setting the HDG switch to **GT**, wait for
the **A/P REF** warning light on the left side of the Vertical Display Indicator
(VDI) to illuminate and then press the nosewheel steering button on the control
stick. The **A/P REF** warning light will then turn off and the ground track
mode will be enabled, setting the autopilot to follow a ground track by
compensating for aircraft wind drift.

The altitude hold mode is set via the **ALT**, altitude, switch and like the
ground track mode the **A/P REF** warning light will illuminate until the
nosewheel steering button is depressed, enabling the mode.

The Data Link Vector - Precision Course Direction mode is used to allow a Link 4
controller to remotely control the aircraft. This is not modelled in DCS.

Finally the ACL or Automatic Carrier Landing mode is used to conduct automatic
carrier landings in conjunction with the Link 4 data link and the on-board radar
beacon. To enable the ACL, set the VEC/PCD switch to **ACL** which will cause
the **A/P REF** warning light to illuminate. When intercepting the ACL
glideslope and with the **ACL READY** and **A/P CPLR** warning lights
illuminated on the VDI, depress the nosewheel steering button on the control
stick. This engages the ACL and lets the data link control the aircraft. The
**A/P REF** warning light will turn off.

The ACL can be used in conjunction with the APC (see Throttle Controls) for a
fully automatic landing. The ACL can be disengaged via the **PLM** button on the
right throttle and the APC via the **CAGE/SEAM** button on the left throttle.

All the autopilot modes can be overridden by enough force on the control stick
or by depression of the autopilot emergency disengagement paddle, automatically
resetting all autopilot switches to off.

## Spoilers

The spoilers located on the upper surfaces of the wings are used to control roll
as detailed above under Flight Control System, for braking on the ground as part
of the Antiskid system and as a part of the DLC system (see next section).

The spoilers are only used forwards of 62° wing-sweep as further aft these
conflict with the fuselage.

In case of a spoiler malfunction the spoiler symmetry protection logic disables
all of the spoilers in the same section as the failed spoiler, either inboard or
outboard spoilers. If this occurs the **SPOILERS** caution light on the
Caution - Advisory Indicator illuminates.

To override this the switch corresponding to the relevant section on the Spoiler
Failure Override can be set to override by lifting the guard and setting the
switch to **ORIDE** and then depressing the **MASTER RESET** button on the Fuel
Management Panel.

Spoiler position can be seen on the Control Surface Position Indicator.

## DLC Direct Lift Control

The DLC or Direct Lift Control is used to control vertical glideslope position
without pitch control inputs or engine throttle commands. The DLC uses the two
inboard spoiler sections in conjunction with small corrections on the tail
stabilizers to control lift.

The DLC is engaged by depression of the DLC switch on the control stick with
flaps down and throttles less than **MIL**. This causes the inboard spoilers to
extend to half and enables the DLC & maneuver flap command thumbwheel on the
control stick to control them. The DLC also requires the AFCS roll and pitch
channels, the inboard spoilers and the hydraulic systems to be operative as
well.

Rotation of the thumbwheel forwards extends the spoilers towards the max up
position, decreasing lift and adjusting glideslope position downward. Rotation
of the thumbwheel aft retracts the spoilers towards the flush position,
increasing lift and adjusting glideslope position upward.

Another depression of the DLC switch disengages the system.

## Flaps and Slats

The flaps and slats on the F-14 Tomcat can be used in two modes.

The normal flap and slat extension is controlled using the **FLAP** handle on
the Throttle Quadrant. The flaps can be set to anywhere between retracted and
fully extended where the flaps will extend to 35° and the slats to 17°. The
auxiliary flaps, the innermost section, only have two positions, retracted and
extended. They will extend fully when the **FLAP** handle is at more than 5°
extension.

If a fault exists preventing retraction of flaps the **FLAP** handle should be
moved to the **UP** position and then moved outboard and up to the **EMER UP**
position, overriding faulty interlocks.

The other mode is the maneuver flap system in which the CADC uses the flaps and
slats automatically to improve aircraft performance. In this mode the flaps
extends to 10° maximum and the slats to 7° maximum and the innermost flap
section is disabled.

While normally automatic the maneuver flap system can be manually controlled
using the DLC & maneuver flap command thumbwheel on the control stick. Forward
thumbwheel rotation retracts the flaps and slats and aft thumbwheel rotation
extends them.

When sweeping the wings the flaps are limited by the wing-sweep position. Aft of
21° sweep the auxiliary (inboard flaps) are disabled up. Aft of 50° all flaps
are disabled up. The slats are not inhibited by wing-sweep.

Position of the flaps and slats are indicated on the Wheels-Flaps Position
Indicator.

The **FLAP** light on the pilot Caution - Advisory Indicator indicates a
malfunction in the flap system with flaps at non symmetrical positions. The
**REDUCE SPEED** warning light on the left side of the Vertical Display
Indicator (VDI) indicates flaps not retracted above 225 knots indicated
airspeed.

## Speedbrakes

The speedbrakes on the F-14 Tomcat consists of three sections on the tail
located between the engines and these are powered by the combined hydraulic
system.

The speedbrake controls are located on the right Throttle and can be set to
desired position depending on how long the switch is held to the extend
position. Retraction always fully retracts the speedbrakes.

To protect the speedbrakes they will start retracting above 400 knots and will
continue to do so with increasing airspeed, additionally selection of **MIL**
power or above automatically retracts them.

As the speedbrakes disturb airflow around the tail the fuel dump is disabled
with speedbrake extension as to not have the fuel hit the aircraft.

Position of the speedbrakes can be seen on the Wheels-Flaps Position Indicator.
