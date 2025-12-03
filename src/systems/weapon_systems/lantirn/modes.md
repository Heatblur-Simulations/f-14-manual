# Modes

## Sensor Modes and Operation

The LANTIRN has two "master" modes, A/A and A/G. Both work similarly but are
optimized for different types of targets. Additionally, the A/G mode allows for
bomb release guidance.

The pod has two main ways of controlling the sensor line of sight, either via
contrast lock (image following) or via being slaved to a Q designation.

The Area and Point Track modes are the two contrast lock modes in which the
LANTIRN locks onto contrast differences in the LANTIRN FLIR video itself. This
in itself only allows for angle tracking which gives imprecise ranging using own
aircraft position and pod line of sight to calculate target position. It does
however allow the system to track moving targets.

The last tracking mode has the sensor slewed to a stored location/direction,
called a Q. The directional Qs do not allow for guidance to a location while the
location Qs do.

QSNO and QADL/QHUD are directional. QSNO slaves the sensor to the ground 15 NM
directly in front of the aircraft along own aircraft heading. QADL and QHUD
slave the sensor to either ADL (in A/A) or the aircraft wings symbol on the HUD
(in A/G).

The location Qs have two sources, QWp- and QWp+ on the stick’s left hat can be
used to cycle through the WCS waypoints, allowing the RIO to slew to the
different waypoints for navigation and target localization.

The other source is via pod designation. By selecting the second detent on the
LANTIRN trigger the current sensor track or location is lased and a new location
stored using that data. This is called the QDES and is used to designate targets
for engagement as well as allowing the RIO to select a new location for
navigational reference on the fly. The QDES can not however be automatically
transferred to the WCS, but the RIO can enter it manually using the target
location information in the pod video feed.

The lower right data-block is enabled for the location Qs only but will remain
even when the pod is slewed away in area or point track modes. As soon as
another Q is selected however, it will update to that location instead or be
removed if a directional Q is selected.

## A/G Target Engagement and Designation

The LANTIRN steering cues for ground target engagement are automatically enabled
when the LANTIRN is slewed to QDES or a new QDES is designated. The QDES itself
will remain even if a new Q is selected and as long as it exists, the steering
cues will point towards QDES even if slewed to another point. This is important
to keep in mind as it is easy to think that the steering commands are to the
current sensor location instead of the QDES.

The laser designation itself can however point to a different location than the
QDES as the laser always points to the current track. This can be used to
quickly change back to a target marked by the QDES if desired and when lasing a
moving target a QDES should be set at an estimated target location at impact
(estimated manually) and then the point track mode or manual slew can be used to
designate the actual target more precisely.

To change laser code, move the stick left side slider aft and release, this will
change right hat (S4) into laser code mode. The currently selected digit will
blink and the S4 hat can then be used to set the digits. Left/right change what
digit to set and up/down change the value of the digit. Renewed selection of aft
on the left slider will then exit the laser code mode.

If the right, S4, hat is depressed while in laser mode the automatic lase mode
will be enabled, indicated by the M (for manual) left of the digits changing to
an A (auto-lase). Repeat to switch back to manual mode. While activated, the
auto-lase mode will begin firing the laser at 10 seconds TIMP until TIMP zero +4
seconds.

The bomb release cue is only visible with a valid weapon (bomb) selected and the
selected bomb is read from the weapon selector wheel on the RIO armament panel
via the WCS. The actual bomb release can be accomplished using the computer
pilot or computer target modes but the manual mode is recommended. In manual
mode the pilot follows the cues in the LANTIRN video feed on the VDI and
releases the bomb when cued by the LANTIRN.
