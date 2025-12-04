# Air-to-Ground Weapon Delivery

Air-to-ground delivery is initiated by pilot selection of the **A/G** mode on
the display control panel. After tape read-in (about 30 seconds), the WCS
initiates the air-to-ground mode and enables relevant symbology on the displays.

The weapon selection automatically switches to ordnance (**ORD** on the HUD)
unless the pilot has selected another weapon. All other options are set by the
RIO in the back seat.

The available attack modes in the F-14 are set by the **ATTK MODE** selector in
the RIO pit and are:

- **CMPTR TGT**: Computer target, a semi-automatic computer-guided mode similar
  to a CCRP mode in newer aircraft.
- **CMPTR IP**: Computer initial point, an extended CMPTR TGT mode using a known
  initial point (IP) as a reference for store delivery. Mostly used in
  situations where the actual target is expected to be hard to locate visually
  and is located closely to an easily identifiable reference point/landmark.
- **CMPTR PLT**: Computer pilot, a manual computer and pilot-guided mode using
  the WCS for store impact point indication on HUD. Similar to a CCIP mode in
  newer aircraft.
- **MAN**: Manual, manual backup mode in which the HUD displays a pipper
  (crosshair) on the HUD at the deflection set by the pilot. Used in case of a
  systems failure prohibiting the other modes.
- **D/L BOMB**: Data-link bomb, an automatic mode in which the pilot is steered
  via data-link cues for remotely controlled store delivery. (Not implemented in
  DCS at this point in time.)

## Computer Target

![Computer Target](../../img/weapons_cmptrtgt.jpg)

The computer target mode allows the pilot to designate a target onto which the
WCS then guides the pilot towards store release. This mode is usable for all
air-to-ground stores, including rockets.

When selected, the HUD displays the diamond as target designator and the bomb
fall line (BFL) through the velocity vector and store impact point pipper
(crosshair).

To designate a target, the pilot steers the aircraft in azimuth to place the
target along the BFL. Then **UP/DN** on the target designate switch on the left
wall of the pilot cockpit is used to slew the target designator along the BFL
until it overlays the target. At that point, the target is designated by
pressing the target designate switch to **DES**.

After designation, the target designation diamond becomes stabilized to the
designated position on the ground, and the AN/AWG-9 is slewed to it for range
measurements. The BFL now remains overlaying the designated target while the
store impact point pipper and aircraft velocity vector continue to follow
aircraft movements. In addition, the HUD now displays the upper and lower
solution cues on the BFL.

The pilot should now fly the velocity vector and store impact point over the BFL
until the solution cues reach them. The lower solution cue indicates imminent
store release when passing the velocity vector, and the pilot should by now be
holding the bomb release button depressed to authorize WCS store release. When
the upper solution cue reaches the velocity vector, the WCS automatically
releases set stores on the condition that the bomb release button is depressed.

The pull-up cue (bracket on the HUD) moves upwards on the HUD towards the
velocity vector with decreasing altitude. When it reaches the velocity vector,
it indicates that the aircraft is below safe altitude for store release.

## Computer Initial Point

Functionally identical to the Computer Target mode except that a preset initial
point (IP) is designated instead of the actual target. The IP is preset before
takeoff using data-link or manually by the RIO using the CAP.

The IP waypoint should be a terrain feature expected to be visually identifiable
by the pilot even if the target is not.

To set the CAP, the RIO designates the location of the IP waypoint as per the
other waypoints in the system. (See CAP heading under AN/AWG-9 in the General
Design and Systems Overview section or the Navigation Systems heading in the
same section)

The message (function) **IP TO TGT** on the CAP under the SPL category is then
used with the prefixes **ALT**, **RNG**, and **BRG** to read out and set the
following data points:

- **ALT**: Sets altitude difference of the target relative to the IP waypoint.
- **RNG**: Sets range to target from the IP waypoint.
- **BRG**: Sets the bearing to the target from the IP waypoint.

When the pilot designates the IP visually on the HUD, the WCS recalculates the
target location using the data set under the **IP TO TGT** function on the CAP,
moves the target diamond to that location, and instead displays guidance towards
the real target location.

All other functions of this mode are identical to the Computer Target mode.

## Computer Pilot

![Computer Pilot](../../img/weapons_cmptrpilot.jpg)

The computer pilot mode uses the WCS to continually calculate and display an
impact point for the configured store on the HUD.

When selected, the HUD displays the current store impact point in real-time
using the pipper (crosshair). The target designation diamond is used when the
WCS is configured for rockets and overlays the pipper to indicate that the
configured store is out of range when displayed. As in the Computer Target and
IP modes, the pull-up cue is used to indicate aircraft below safe store release
altitude when at or above the velocity vector.

To correctly engage the desired target, the pilot flies the impact point pipper
on the HUD over the target and then depresses the bomb release button.

When using rockets, the pilot should wait until the diamond disappears,
indicating that the selected store is within range and then use the control
stick trigger to fire the rockets.

## Manual

![Manual](../../img/weapons_man.jpg)

The manual air-to-ground mode is used as a backup when the other modes are
unavailable.

By principle, it works the same as the Computer Pilot mode in that the pilot
should fly the pipper on the HUD over the desired target. The pipper is in this
mode not updated by the WCS, however, but instead set at a deflection from the
ADL according to desired engagement speed, dive angle, and release altitude.

This is set using the elevation lead panel on the pilot right side vertical
panel using weapon engagement tables or by pilot estimation.
