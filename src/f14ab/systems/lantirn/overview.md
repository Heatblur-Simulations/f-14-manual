# LANTIRN

![LANTIRN](../../../img/general_lantirn_lantirn.jpg) _U.S. Navy photo by
Photographer’s Mate 2nd Class Felix Garza Jr. (030325-N-4142G-009)_

The LANTIRN or Low Altitude Navigation and Targeting Infrared for Night began
life as combined targeting and navigation pods designed for the F-15E and F-16.
When the US Navy became interested in using the F-14 Tomcat in the A/G role
Martin Marietta (now Lockheed Martin) began its own program to show that the
LANTIRN could quickly be adapted for F-14 use.

As the pod was adapted for the F-14 the secondary navigational pod was deleted,
keeping only the targeting pod. The pod was wired up to its own control panel as
the F-14 didn’t have the required 1553-bus for complete integration. The control
panel was patched into the TCS to TID video feed allowing it to select either
the TCS or the LANTIRN for display on the TID and VDI.

While the pod can read waypoints and selected weapon from the WCS, the pod has
its own GPS receiver and is otherwise self-contained and controlled only via its
own control panel. Additionally, it also has its own weapons release guidance
removing the need to boresight the pod to the aircraft, a time-consuming task.

The FLIR sensor itself has three different zoom levels or fields of view (FoV).
The Wide FoV limits are 5.9° and allows a maximum slew rate of 8.5°/s. The
Narrow FoV limits are 1.7° and allows a maximum slew rate of 1.8°/s. The last
mode, the Expanded FoV is a digital zoom of the Narrow FoV, meaning that the
resolution will be worse in this mode. The FoV limits for the Expanded FoV are
0.8° with a max slew rate of 0.7°/s.

## Controls and Displays

All the controls for the LANTIRN are situated on its own control panel mounted
on the RIO’s left side console when the pod is present, including the switch
controlling what video feed the TID and VDI display in the TV mode.

### LANTIRN Video Elements

The FLIR (Forward Looking InfraRed) video-feed from the LANTIRN has superimposed
data readout for the crew’s use. This video-feed can be viewed both on the TID
(in TV-mode) and on the VDI (also in TV-mode) when the FLIR feed is selected on
the control panel.

Amongst other things the displays show own aircraft position, target position as
well as targeting cues to the crew. When using the LANTIRN for A/G attack these
readouts are also used as targeting and release cues.

![FLIR](../../../img/general_lantirn_flir.jpg)

Own aircraft data is shown in the upper left corner (<num>1</num>), showing
position, altitude, groundspeed and pitch angle (dive).

On the left side (<num>2</num>) the pod displays whether it’s using white hot or
black hot (WHOT and BHOT) as well as if the AGC (Automatic Gain Control) or MGC
(Manual Gain Control) is in use.

The lower left data-block (<num>3</num>) shows pod information, SR is slant
range (line of sight range), AZ and EL is pod line of sight azimuth and
elevation relative aircraft ADL (with AZ having L or R for left or right of
aircraft heading). Below that is current UTC time and then IBIT codes below
that.

> 💡 IBIT codes are not implemented currently and the clock will show local
> time.

The lower middle (<num>4</num>) shows current pod mode (A/A or A/G) and track
mode (AREA, POINT or Q designations) on the left side. The right side shows
currently selected weapon and laser code while above and in the center an L is
shown when the laser is armed and flashing when firing the laser.

The lower right (<num>5</num>) shows data for currently selected Q (slew-point)
except for QSNO, QADL and QHUD, TTG being time to go until on top of currently
selected Q, the rows below that, bearing and range to Q, ELEV indicating
elevation in feet of Q and lastly, below that, Q location.

<num>6</num> is the crosshairs showing tracked position, in this case we have a
bounding box, indicating currently tracked target in point mode. The two widest
zoom modes will have boxes showing the field of view for the next, narrower,
mode. Additionally there’s a small white square (FLIR pointing cue) moving
around showing the current pod line of sight relative to aircraft from a top
down perspective. In this case it’s right next to the upside down ^, top center,
indicating that the pod is looking ahead of the aircraft. If the square is
centered the pod is looking straight down and below center it indicates the pod
looking aft.

Finally, <num>7</num> is the steering guidance towards the selected Q, the top
one being commanded heading and the vertical one on the right the bomb release
cue.

The commanded heading shows current aircraft heading above the inverted ^, with
the commanded heading being displayed as a relative bearing either L (Left) or R
(Right) of current aircraft heading below the line. The commanded heading is
also indicated by a vertical line bisecting the horizontal one.

The right, bomb release cue, is only shown if the selected Q is QDES and shows a
vertical line along which a release cue travels downwards. This release cue is
only visible with a valid weapon selection (bomb) and when it reaches the two
tick marks, that’s the cue to release. Below the line is the indicated TREL
(Time to Release) in seconds, changing to TIMP (Time to Impact) after release.

Around this all is the masking curve, indicating at what angles the pod will be
masked by own aircraft (looking into the aircraft hull). This is relative to the
FLIR pointing cue, when the cue moves outside the masking curve the sensor will
be blocked by the hull.

### Control Panel

The control panel contains all the controls for the pod, including the control
stick.

![Control Panel](../../../img/general_lantirn_panel.jpg)

The power switch for the LANTIRN pod is located top left (<num>1</num>) with
**OFF** disabling power to the system, **IMU** (blocked in above image) powering
only the LANTIRN IMU and **POD** powering the whole system.

> 💡 IMU selection has no current DCS function.

The **MODE** switch (<num>2</num>) switches the POD sensor between **STBY**
(Standby) and **OPER** (Operational).

The **LASER ARMED** (<num>3</num>) light illuminates when the laser is armed
while the **LASER** switch (<num>4</num>) arms it. (ARM and SAFE positions
available.)

Down right is the **VIDEO** switch (<num>5</num>) which controls what video is
fed to the TID and VDI, FLIR selecting LANTIRN FLIR video and TCS selecting TCS
video.

The four grouped indicator lights (<num>6</num>) indicate various error states
in the LANTIRN system and the **IBIT** button (<num>7</num>) initiates the IBIT
(Initialized Built-In-Test).

> 💡 The IBIT and fault indicators are not currently implemented in DCS.

### Control Stick

Located on the left side of the cockpit, the LANTIRN Control Stick is fixed,
and features the controls to operate the pod.

![Control Stick](../../../img/general_lantirn_stick.jpg)

**S3 HAT (<num>1</num>)**
The S3 hat is a 4-way hat located on the left of the grip, and controls the following functions :

_Left: **Queue Waypoint-**. Slews the LANTIRN to the **previous waypoint** in the system.
_Right: **Queue Waypoint+**. Slews the LANTIRN to the **next waypoint** in the system.
_Up: Selects **Point Track** mode, which attempts to lock a high contrast spot. 
  This mode can be useful when light and weather conditions allow, as well as for moving targets.
_Down: Selects **Area Track** mode, which stabilises the LANTIRN to a point on the ground.
  This mode does not rely on the target contrasting against the surrounding scenery,
and reduces the chances of the track being lost during LGB employment.

**Slew HAT (<num>2</num>)**
Located in the middle of the stick grip, the slew hat is used to manually slew the LANTIRN's line of sight around.
Depressing the hat toggles the polarity of the Infrared (IR) image between White Hot (WHOT) and Black Hot (BHOT).

**S4 HAT (<num>3</num>)**
The S4 hat is a 4-way hat located on the right of the grip, and controls the following functions :
_Left: No function
_Right: **Queue Designation*. Slews the LANTIRN to the last stored designation.
_Up: **Queue ADL** (Armament Datum Line) or **Queue HUD** (Waterline Symbol) depending on the LANTIRN operation mode (**A/A** or **A/G** respectively)
_Down: **Queue Snowplow**. A fixed setting looking forwards at a fixed depression to scan below and ahead of the aircraft's flightpath.

**FOV Toggle (<num>4</num>)**
The red button on top is used to cycle between the three fields
of view (zoom levels) of the IR sensor.

**LANTIRN Operation Mode Select Switch (<num>5</num>)**
The two-way hat on the side selects the mode of operation for the pod.
_Forwards: Air to Ground Mode.
_Backwards: Air to Air Mode.

**Slider**
Located on the left side of the stick grip is a two way slider (<num>6</num>),
spring-loaded to return to center. This switch changes the function of the right
four-way hat.

_Forwards:
  _Short: Selects Manual Gain Control **MGC** and enables setting a custom image gain
  using **S4 Hat Up/Down**, and custom image level with **S4 Hat Right/Left**.
  Pressing again sets the custom gain value.
  Pressing a third time returns the image gain to Automatic Gain Control **AGC**.

  _Long: Pressing and holding for 2 seconds enters **MGC** in customizable mode.
  
_Aft:
  _Short: Selects laser code editing mode. Use **S4 Hat Left/Right** to scroll through
  the laser code digits and **S4 Hat Up/Down** to increase/decrease the value for each digit.

  _Long: Selects **Manual Focus Control**, using **S4 Hat Up/Down** to adjust the image focus.


**LANTIRN Trigger (<num>7</num>)**
Located on the front of the stick is a two-stage trigger.
_First detent: Manual firing of the Laser.
_Second detent: Fires the laser and stores a target designation in the system at the location under the LANTIRN's line of sight.

**Laser Latch Button (<num>8</num>)**
Located at the front on the bottom of the stick grip. Fires the laser for 60 seconds.
Press the **LANTIRN Trigger First Stage** to stop the laser and reset the 60 second timer.


## Startup

To start the LANTIRN from cold, set the power switch to POD. This will start the
LANTIRN power-up sequence which takes 8 minutes. When ready, this will be
indicated by the MODE switch showing STBY.

When at STBY, depression of the MODE button switches the system to OPER
(Operational), enabling the LANTIRN sensor after a 30-second initialization.

Lastly, to allow display of LANTIRN FLIR video, select FLIR on the VIDEO switch.
