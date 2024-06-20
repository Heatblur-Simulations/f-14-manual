# Link 4A & C Data Link

> 🚧 TODO: Add images. Make sure everything works

The F-14 Tomcat is equipped with the Link 4 data link system to allow for transmission and reception
of target track, waypoint information and steering commands. Link 4 exists in two versions, the
first being Link 4A which allows a surface ship or airborne AWACS to control the aircraft and also
Link 4C, unique to the F-14, which is a fighter to fighter data link.

The Link 4A or TADIL C data link allows the F-14 to connect to a data link network controlled by a
surface ship or an AWACS. The data source (or really its operator) will then provide the F-14 with
target tracks, waypoints and control commands. Additionally, it’s also used for the carrier
automatic landing system (ACLS).

Link 4C on the other hand allows up to four F-14 Tomcats to interconnect and share target tracks to
coordinate their engagements.

The system does not allow an F-14 to use both at the same time as the same transmitter and receiver
are used for both A and C links. The Link 4 system itself, operates using the UHF radio band at
5,000 bits per second.

The Link 4 is controlled using the Data Link Control Panel and the Data Link Reply and Antenna
Control Panel. Received control signals are displayed on the pilot VDI indicators (Vertical Display
Indicator (VDI)) and the RIO DDI panel (Digital Data Indicator (DDI)).

## Link 4 Controls

![Data Link Control Panel](../../img/datalink1.png)

The Data Link Control Panel contains the main Link 4 system power switches and the frequency
selection wheels.

The first switch (1) controls the Link 4 built in test and also enables the anti-jam (A-J) function,
this control is currently non-functional in DCS and should be set to NORMAL.

The frequency thumbwheels (2) are used to set used data link frequency, note that the first digit
(3) is set and displayed as a fixed number before the first wheel. The allowable frequency range is
300.0 MHz to 324.9 MHz.

The third switch (3) controls power and operational mode of the Link 4. ON turns on and enables the
Link 4A data link, OFF disables the system and AUX enables the Link 4C data link.

![Data Link Reply and Antenna Control Panel](../../img/datalinkantenna1.png)

The Data Link Reply and Antenna Control Panel is used to select what antenna to use, own aircraft
data link address, whether to transmit and which mode the Link 4A is used in.

The ANTENNA switch (1) sets if the data link uses the upper or lower antenna. As these are the same
antennas that the UHF 1 (AN/ARC-159) uses it automatically sets that radio to the other antenna.

The REPLY switch (2) sets whether own aircraft replies to data link messages. NORM allows for normal
operation while CANC turns off the transmitter and sets the data link to receive only.

The MODE switch (3) controls whether the Link 4A operates in the normal TAC (Tactical) mode or the
CAINS/WAYPT (Carrier Aircraft Inertial Navigation System/Waypoint) mode. The TAC mode is the normal
airborne mode while the CAINS/WAYPT mode is used while on the carrier deck to receive preflight
waypoints and INS alignment data from the ships INS system. The switch is solenoid held and
springloaded to the TAC position, if the data link reception is lost or the power lost the switch
automatically returns to the TAC mode, forcing an ongoing INS alignment to the backup handset mode.
If the aircraft takes off with the switch in the CAINS/WAYPT position the weight on wheels sensor
will also release it to TAC.

The two address thumbwheel sets the least significant bits (two lowest numbers) of the aircraft data
link address, the rest has to be set by the ground crew.

## Link 4 in DCS

The Link 4 implementation in the Heatblur DCS F-14 implements both the Link 4A and C versions.

To use Link 4A the data link has to be powered on, set to Link 4A mode (ON) and tuned to the correct
data link frequency for the desired host which can be found on the kneeboard. On the ground and set
to the CAINS/WAYPT mode the data link will receive the ME set waypoints and allow for CVA alignment
if on a carrier. The frequency does not need to be set to use CAINS/WAYPT as that frequency is set
with jumpers on the actual equipment by the ground crew.

When set to TAC the data link will then receive the 8 target tracks with the highest priority from
the TDS controller. The Link 4A also allows for automatic carrier landings with the data link set to
use the carrier as a host.

To use Link 4C the data link should be set to Link 4C (AUX) and be tuned to a frequency agreed upon
between participating aircraft. Up to four aircraft can participate within a flight and all four
aircraft should have different adresses set. As the ground crew set the two most significant bits to
be the same for a flight automatically the link can only be used within the same flight currently.

In Link 4C the participating aircraft shares up to 4 target tracks, selected by the RIO using the
CAP as well as own aircraft position. The CAP also allows the RIO to update own aircraft INS
position to another aircraft on the link to correlate track transmissions.
