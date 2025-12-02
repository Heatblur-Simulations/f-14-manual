# Wing-Sweep System

![sweep schedule](../../img/general_wingsweep_sweepschedule.jpg)

Wing-sweep schedule as function of Mach number and related flap interlocks.

The wing-sweep system controls the geometry of the F-14’s wings, allowing the
wings to move from a 20° to a 68° position in the air. While on the deck an
oversweep of 75° is also possible reducing the F-14’s wing span to 33 feet
(about 10 meters).

The wings are moved by hydro-mechanical screw-jack actuators which are
interconnected mechanically, making sure they’re synchronized. As long as both
main hydraulic systems are functioning the maximum wing-sweep change rate is
about 15°/s. This can be affected negatively by negative g or large amounts of
positive g.

In normal operation the CADC, Central Air Data Computer, controls the wing
position as a function of current Mach via the wing-sweep program, this is known
as the **AUTO** mode. The pilot can also select a wing position aft of the
wing-sweep program manually or choose the **BOMB** mode that sets the wings to
55° or further aft depending on the program. Simply put, the CADC wing-sweep
program determines the max forward position of the wings. All this is done
electrically via two independent channels (for redundancy) to the wing-sweep
actuators.

Currently commanded wing position, CADC program wing position and actual wing
position can be seen on the wing-sweep indicator next to the ACM panel.

## Emergency Mode

While the normal mode controls the wing-sweep electrically, to supplement this
it’s also possible to control the wing-sweep mechanically via the emergency
mode. This is done via the emergency wing-sweep handle on the right side of the
throttle. That handle is connected mechanically to the hydraulic valves in the
wing-sweep system, providing a physical back-up control.

Normally this handle is moved with the electronic wing-sweep program by a servo
located beneath it, making sure it’s at the actual wing position. To disengage
the electric system and enable the emergency mode the guard over the handle is
opened and then the handle is extended for additional leverage. Then the handle
can be forced out of the spider-detent normally connecting it to the electrical
servo and then used to manually set the wing position.

In this mode the pilot has to make sure to follow the following schedule to
avoid damage to the wings:

| Speed (Indicated Mach) | Max Forward Wing Position |
| ---------------------- | ------------------------- |
| 0.4                    | 20°                       |
| 0.7                    | 25°                       |
| 0.8                    | 50°                       |
| 0.9                    | 60°                       |
| 1.0                    | 68°                       |

To return to the normal mode of operation, the handle should be pushed into the
desired position and pressed down and the guard closed. The **MASTER RESET**
button on the fuel management panel should then be depressed and the wing-sweep
system set to the same position as the handle. The servo will then drive to the
commanded position and re-engage the handle to the spider detent, resuming
normal operation.

## Oversweep

The emergency wing-sweep handle is also used to select the oversweep position of
the wings. The oversweep is only used while on the ground to reduce the wing
span to make it easier to spot the aircraft on the carrier deck. As the wing
will sweep over the stabilizers on the tail the horizontal tail authority system
is enabled to prevent the wings and stabilizers from damaging each other by
restricting movement of the stabilizer.

To set the wings to oversweep the emergency wing-sweep handle should be moved to
the 68° position and held in the extended position. This will deflate the
wing-seal airbags and activate the horizontal tail authority system, indicated
by the **HZ TAIL AUTH** caution light illuminating. When the **HZ TAIL AUTH**
caution light goes out and the **OVER** flag on the wing-sweep indicator appears
the oversweep interlocks are free and the handle can now be moved to the 75°
position and stowed.

To move the wings out of oversweep the handle is pulled up and moved forwards of
68°. This will again illuminate the **HZ TAIL AUTH** caution light. When the
wings have physically exited the oversweep the caution light and the **OVER**
flag will turn off.

As with normal emergency mode operation the handle should now be set to the same
position as the spider detent and the **MASTER RESET** button depressed.

## Controls and Indicators

The controls for the wing-sweep system are on the right throttle (electrical)
and to the right of the right throttle (mechanical). See the Throttle and the
Throttle Quadrant.

The wing-sweep hat on the right throttle is normally set to **AUTO** enabling
CADC control of the wings, this is the upper position. The down position sets
the wing-sweep to the **BOMB** mode, 55° or aft.

The **AFT** and **FWD** (forward) positions enable manual movement aft of the
CADC scheduled position.

The emergency wing-sweep handle on the throttle quadrant is used to control the
mechanical emergency mode, see emergency mode above.

![wing sweep](../../img/general_wingsweep_wingsweep.jpg)

The wing-sweep indicator to the right of the ACM panel is used to indicate the
current wing-sweep positions. The pointer on the left side shows the CADC
scheduled wing position. The left tape shows the manually commanded position and
the right tape shows the actual wing position.

The five windows on the right side show:

- **OFF:** System inoperable.
- **AUTO:** CADC controlling wing-sweep.
- **MAN:** Wings set manually with the control on the right throttle.
- **EMER:** Wings set with the emergency wing-sweep handle.
- **OVER:** Wings in oversweep.

The relevant warning and advisory lights are located on the Vertical Display
Indicator (VDI) and the pilot Caution - Advisory Indicator.

The **WING SWEEP** advisory light on the right side of the VDI illuminates when
both wing-sweep electrical channels are inoperable or the emergency mode is in
use. If it illuminates without the emergency mode being used that mode should
then be used as the electrical system might not work.

The **WING SWEEP** caution light on the pilot caution - advisory indicator
illuminates when at least one electrical wing-sweep channel is inoperable.

## Wing-Sweep System Test

The wing-sweep system can be tested on the ground in pre-flight without moving
the wings using the Master Test Panel.

To conduct the test, set the wing-sweep mode to **AUTO** and push the **MASTER
RESET** button. Set the **MASTER TEST** switch to **WG SWP**.

The CADC commanded position indicator on the wing-sweep indicator will now move
to 44°. The **WING SWEEP** and **FLAP** light will illuminate on the pilot
Caution - Advisory Indicator and the **REDUCE SPEED** warning light on the
Vertical Display Indicator (VDI).

> 💡 The **WING SWEEP** advisory light will illuminate after 3 seconds into
> test, turn off and then illuminate again at 8 seconds.

When the CADC commanded position indicator moves forward to the 20° position the
test is over and the above light will turn off. The **MASTER TEST** switch can
now be set to **OFF** and the test is complete. The test will take about 25
seconds to complete.

> 💡 The **RUDDER AUTH** and/or **MACH TRIM** lights might illuminate and the
> control stick might move. This can be ignored.

> 💡 The WG SWP test on the Master Test panel is not implemented yet.
