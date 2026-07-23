# The Digital Flight Control System

The Digital Flight Control System (DFCS) was designed to replace the F-14's
original analogue Automatic Flight Control System (AFCS). The DFCS retained all
the functions of the AFCS, including a stability augmentation system, an
autopilot, and auxiliary control functions for the spoilers, control authority,
and automatic trim. In addition, the DFCS provides functions to enhance high AOA
and Power Approach flight characteristics.

The DFCS augments the aircraft natural damping characteristics and provides
automatic commands for control of attitude, altitude, heading, and approach
modes selected by the pilot. All DFCS functions are integrated into the primary
flight control system.

The DFCS also provides an Up and Away Automatic Rudder Interconnect (UA-ARI) to
provide enhanced departure resistance, spin recovery, and high angle of attack
flying qualities with the landing gear retracted. The DFCS also provides a Power
Approach Automatic Rudder Interconnect (PA-ARI) to enhance the landing approach
flying qualities with the landing gear extended.

DFCS hardware and software included existing aircraft sensors, interfaces,
series servo-actuators, and actuator authorities, with the addition of a rudder
pedal position transducer, a pitch/roll voter monitor, and an angle of
attack/Mach redundancy management algorithm. The autopilot and automatic carrier
landing functions of the AFCS were replicated in the DFCS in digital format.

The DFCS consists of three computers, one computer for each axis (pitch, roll,
and yaw), that replaced the three AFCS computers. Each computer has two distinct
and independent processors called channels, or segregation, with one "A" and one
"B" channel per axis, each controlling one of the dual series servo-actuators.
All channels share data through cross-channel data links. A BIT capability is
provided to exercise in-flight monitoring and to conduct an automatic
operational readiness test for preflight checks.

## Stability Augmentation System

Stability augmentation is provided for all three aircraft axes (pitch, roll, and
yaw) and is controlled by the three STAB AUG switches on the upper half of the
DFCS control panel (DCP). SAS is engaged by placing these switches to ON during
normal post-start procedures.

The PITCH, ROLL, and YAW STAB AUG switches are manually operated toggle switches
mechanically held in the selected ON or OFF position. The pitch SAS incorporates
a pitch rate feedback function that is reduced as airspeed is increased above
650 KIAS. This is necessary to maintain adequate control system stability and is
not noticeable. The roll SAS is independent with the landing gear up, at low
angle of attack (less than 15 units), and at supersonic flight conditions. At
all other conditions, the roll SAS is part of the UA-ARI and PA-ARI. Similar to
the pitch SAS, the roll rate feedback is reduced as airspeed is increased above
300 KIAS. With the landing gear down, the yaw SAS becomes part of the PA-ARI.

All SAS switches should remain ON during flight. Deselection of either the ROLL
or YAW SAS switch will disable the affected SAS axis and all ARI functions, and
illuminate the ARI/SAS OUT caution light. Deselection of the PITCH SAS switch
will disable the pitch SAS, but no caution light will illuminate since no
restriction exist for PITCH SAS OFF.

> Depressing the paddle switch does not disable the pitch and roll SAS. If
> problems are suspected with any SAS axis, the appropriate STAB AUG switch must
> be manually selected OFF. Depressing the paddle switch disengages the
> autopilot and DLC (inflight and on deck).

## Autopilot

The autopilot is controlled by four switches on the lower half of the DFCS
control panel, and the autopilot reference and nosewheel steering pushbutton on
the stick grip. With all three SAS axes engaged, autopilot operation is
commanded by placing the ENGAGE/OFF switch to ENGAGE. No warmup period is
required. The autopilot may be engaged with the aircraft in any attitude. If,
however, aircraft attitude exceeds ±30° in pitch and ±60° in roll, the autopilot
will automatically return the aircraft to these limits. Normally, the EGI is the
prime reference and AHRS a backup.

## Pilot Relief and Guidance Modes

### Control Stick Steering

With the autopilot engaged, the aircraft may be maneuvered using control stick
steering. In control stick steering mode, the DFCS automatically synchronizes to
the new attitude.

### Attitude Hold

Attitude hold is selected by setting the AUTO-PILOT ENGAGE switch to ENGAGE. To
change attitude, use control stick steering. Re-engagement is achieved by
releasing pressure on the stick. The autopilot will hold pitch attitudes up to
±30° and bank angles up to ±60°. EGI failure will cause mode disagreement and
the engage switch will return off. The mode may be reengaged using AHRS as a
reference.

### Heading Hold

Heading (HDG) hold is engaged by setting the HDG-OFF-GT switch to HDG. After
maneuvering the aircraft to the desired reference heading, release the control
stick at a bank angle of less than ±5°. The autopilot will then hold the
aircraft on the desired heading. Heading reference is obtained from the AHRS via
the CSDC(R).

### Altitude Hold

Altitude hold mode is engaged by setting the ALT-OFF switch to ALT. When the A/P
REF warning light illuminates, press the nosewheel steering pushbutton when at
the desired altitude. This will engage the altitude hold mode and the A/P REF
warning light will go off. Applying 10 pounds of longitudinal stick force will
cause the A/P REF warning light to illuminate. The mode may be reengaged by
depressing the nosewheel steering pushbutton on the stick grip, when at the
desired altitude, and observing that the A/P REF warning light goes off.

Altitude hold should not be engaged during any maneuvers requiring large, rapid,
pitch trim changes because of limited servo authority and slow automatic trim
rate. Disengagement of altitude hold is accomplished by applying 10 pounds or
more longitudinal stick force or by placing the ALT-OFF switch to OFF.

## DFCS Test

The DFCS has several self-test modes. These include power-up BIT (PBIT),
initiated BIT (IBIT), and automatic BIT (ABIT). The results of these tests are
indicated by the illumination of applicable caution lights, maintenance file
acronyms, and DFCS control panel (DCP) fault display codes

### DFCS Initiated BIT (IBIT)

A DFCS Initiated BIT is a thorough preflight indication of DFCS performance and
can be obtained during post-start OBC or a DFCS BIT. All SAS switches must be
engaged, weight-on-wheels, flaps extended greater than 25° or wings swept aft of
62°, and ANTI-SKID SPOILER BK switch OFF. If one of these interlocks is not
satisfied the DFCS will not enter the IBIT ARM state. The AUTOPILOT switch must
be engaged to test autopilot functions and can only be engaged in the IBIT ARM
state.
