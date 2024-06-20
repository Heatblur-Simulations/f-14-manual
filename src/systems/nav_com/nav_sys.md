# Navigation System

> 🚧 TODO: Add images. Redo CAP panel stuff

## WCS Computer

The WCS or weapon control system computer and CSDC use several alignment routines stored on a
magnetic tape to perform the necessary computations to align the INS.

These stored alignment routines in the WCS computer are called SMAL single mode alignment program.
When alignment is initiated, the routines are loaded in the computer’s destructive readout memory
from magnetic tape.

This process is called “tape read-in” and is represented by an M on the TID. During the alignment of
the IMU platform, the WCS communicates with the CSDC to address specific CSDC navigation routines.

## IMU Platform Alignment

When alignment mode is selected, the IMU platform first erects to a coarse alignment with the help
of accelerometer output and gives an aircraft heading that represents the angular displacement from
true north. This displacement is referred to as wander angle. The CSDC sends inertial velocity data
to the WCS during the alignment process.

The second stage – fine alignment – uses the precise measurement of gyroscope drift to calculate the
aircraft’s true heading. This is possible because of the Earth’s rotation. At no point of alignment,
is the magnetic heading used, and the whole process relies only on the sensing of the non-inertial
movement of the platform within the 3d space.

The WCS calculates terms for platform alignment corrections and estimates the value of the wander
angle, it then sends this data to the CSDC. The CSDC uses these correction terms in the CSDC
inertial equations to generate pulses for the platform torquing that are then transmitted to the
IMU. The CSDC in return receives velocity information from the IMU and sends this new inertial
velocity data to the WCS alignment program, upon which the cycle repeats. The exchange of data
continues until INS is entered.

The leveling process of the platform is achieved by the CSDC generating torquing pulses based on IMU
accelerometer off-level indications being sent to the IMU by the CSDC. With each data exchange, the
WCS calculates an error value (delta) between the values of the previous and current wander angle.
This delta is largest at the beginning of the alignment and smallest at the end of alignment.

The alignment is finished when the delta is near zero and near zero velocity is sensed along the
platform X and Y axes. Variable factors required to align the platform are continuously calculated,
updated, and saved as calibration data. When the alignment is complete, the system is ready to enter
INS. The last used calibration data and wander angle are stored in the CSDC upon entry into INS.
When in INS, the WCS accepts the velocity and position data and the wander angle from the CSDC.

## Navigation Modes

Three navigation data mode sources are used for general navigation:

1. **INS** - The primary navigation mode set by the RIO once IMU alignment is complete. The IMU is
   the primary sensor supplying velocity data that is used to compute all inertial outputs. The IMU
   is the source for roll and pitch data.

2. **IMU/AM** - A backup mode that can either be selected by the RIO or is automatically entered
   when the CSDC determines the IMU inertial velocity data is unreliable. In this mode, true
   airspeed from the CADC and stored or entered winds are combined to provide ground speed and true
   heading for general navigation. The IMU is the source for pitch and roll.

3. **AHRS/AM** - An even further degraded mode that can be either selected by the RIO or
   automatically entered when the CSDC detects a total INS failure. Heading in this mode is derived
   from magnetic heading plus entered or stored magnetic variation (MAG VAR). This heading, TAS from
   the CADC, and entered or stored wind are used for general navigation. The AHRS is the source of
   pitch and roll.

## Navigation Computations

The CSDC and the WCS are aware of the selected navigation mode. The CSDC sends the WCS navigation
data parameters (TAS from the CADC, latitude and longitude, inertial velocities, true heading, etc.)
required to support general navigation calculations. The WCS uses stored and input navigation data
(based on the current navigation mode) to perform the required navigational computations. The WCS
also performs additional computations so that the crew is provided with:

- Current latitude and longitude
- Attitude
- Heading true and magnetic
- Own ground speed and ground track
- Ability to store and display three waypoints, a fixed point (FP), an initial point (IP), a surface
  target (ST), a home base (HB), a defended point, and a hostile area
- Range, bearing, command course, command heading, and time-to-go to a selected destination point
- Calculated wind speed and direction
- Calculated magnetic variation
- Continuous monitoring of the status of the unit, and in case of failure inform the crew with
  advisory lights and appropriate acronyms displayed on the TID
- Backup navigation modes in case of partial system failure
- Backup present position

## Displays

Navigation information is displayed on the TID, HSD, multiple display indicator (MDI), HUD, and VDI,
depending on the mode selected by the pilot and RIO. If an IMU or navigation computer failure
occurs, two backup modes are available: IMU airmass (IMU/AM) or AHRS airmass (AHRS/AM).

### Navigational Controls

To control the INS, use the navigation control and data readout panel and the computer address
panel. See Tactical Information Display (TID) and Associated Controls and Associated Controls and
Computer Address Panel (CAP) for a more detailed description.

The desired operation mode, alignment mode, and destination point can be selected at the navigation
control and data readout panel. The CAP allows entering navigation data and the selected information
to be displayed on the TID. The CATEGORY switch on the lower end of the panel determines the
function of the MESSAGE button. The categories used for navigation are NAV and TAC DATA. The STBY
and READY advisory lights on the navigation control and data readout panel indicate the status of
the alignment program and navigation system.

Failure indicators for the main components of the navigation system are on the caution/advisory
light panels in both cockpits, however, the NAV COMP and IMU indicators are only present on the RIO
cockpit caution/advisory light panel.

The pilot displays (HUD, VDI, and HSD) and the RIO multiple display indicator are controlled with
either the pilot display control panel or the multiple display indicator control panel.

> **Note:** For detailed information on CAP operation, refer to Computer Address Panel (CAP).

#### Navigation Category

If the CATEGORY switch is in NAV, the following matrix appears in the MESSAGE windows:

> 🚧 TODO: Fix

OWN  
A/C TACAN  
FIX  
STORED  
HDG  
ALIGN  
RDR  
FIX  
VIS  
FIX  
WIND  
SPD HDG  
FIX  
ENABLE  
MAG  
VAR  
(HDG)

Each window has a designated button. Pressing this button tells the WCS computer which function of
the matrix to use. If OWN AC, WIND, or MAG VAR is pressed, data can be entered and displayed for
each.

Own-aircraft airspeed and magnetic heading are displayed on the TID. If own-aircraft data file is
hooked using the TID cursor, heading will be magnetic. If OWN AC button was selected (hooked) via
the CAP, own-aircraft true heading, speed (groundspeed), altitude, or course can be displayed on the
TID by depressing the appropriate prefix button:

1. LAT or LONG button will display own-aircraft latitude and longitude.
2. SPD button displays ground speed and magnetic course.
3. True airspeed and true heading are displayed when the HDG prefix button is depressed.
4. Altitude is displayed on the left TID readout (right is blank) when the ALT button is used.
5. When pressing the WIND button, the TID displays present wind speed (left readout) and magnetic
   direction (right readout).
6. The MAG VAR button is used for displaying and entering magnetic variation (MAG VAR).

In order to change own-aircraft lat, long, true heading, or altitude, press the according prefix
button followed by the desired quantity. During entry, the data is displayed on the upper middle
readout on the TID. At the same time, existing data is being displayed on the two lower readouts. If
new data is correct, the RIO can press the ENTER button and the new values will appear on the
readout.

To change wind data entry, press the WIND button, then either the SPD or HDG prefix button and the
appropriate numbers: knots (0 to 512) for speed or degrees (000 to 359) for magnetic direction. The
multiple display indicator data readout of WIND direction is always displayed as true.

> > **Note:** In the INS mode, wind is calculated and updated continuously. The manual entry of wind
> > is ignored by the wind calculations even though the system accepts the entry.

Depressing the MAG VAR button displays alternating values of computed MAG VAR (vC) and manual MAG
VAR (vM) on the left readout and displays magnetic heading (MH) on the right readout. The two values
alternate every 2 seconds. On the CAP sign/direction buttons, plus (+) corresponds to east variation
and minus (-) to west variation.

For manual MAG VAR, press the MAG VAR button. Press HDG, E, or W, the angle in degrees and tenths,
and ENTER. Tenths of a degree must be entered even if zero. The TID displays including the NAV GRID
will shift appropriately. Computed MAG VAR is constantly calculated in the AWG-9 by comparing the
IMU’s true heading with the magnetic heading from AHRS. This difference is saved as computed MAG
VAR. The table below shows the MAG VAR source used by the computer for displays and CAP entries.

Computed MAG VAR and manual MAG VAR are compared by the AWG-9 computer. If they differ by a certain
value, the acronym MV will alternate with the IN or IM navigation mode acronym on the TID and HSD.
The acronym is cleared when the difference falls below 5°.

| Condition                                              | MAG VAR source                         |
| ------------------------------------------------------ | -------------------------------------- |
| COMP mode selected.                                    | Manual MAG VAR (vM).                   |
| RIO updating manual MAG VAR after AHRS selection.      | Manual MAG VAR (vM).                   |
| RIO updating manual MAG VAR after IMU or AHRS failure. | Manual MAG VAR (vM).                   |
| All other situations.                                  | Current or last computed MAG VAR (vC). |

If the selection of AHRS/AM occurs and no update (or re-entering of the same value) occurs last vC
will be used.

> **Note:** When operating in SLAVED or COMP mode near a magnetic disturbance, such as aboard a
> carrier, the MV acronym should be expected to appear.

The table below shows error source analysis and response to the MV acronym appearing in flight.

| Step | Condition                                                                    | Action                                                                                                                    | Result                                                                                                                                                                                                    |
| ---- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | MV alternates with selected nav mode on TID without a failure light present. | Re-enter new corrected MAG VAR.                                                                                           | MV acronym should disappear.                                                                                                                                                                              |
| 2    | MV remains after step 1 action.                                              | Compare heading on VDIG with standby compass while in INS, IMU/AM, or slaved compass mode and level unaccelerated flight. | If headings correlate, the problem is likely in the IMU. Continue with step 3.                                                                                                                            |
| 3    | Source of suspected vC error is the IMU.                                     | Pilot switches to COMP mode on AHRS controller and again compares headings.                                               | If the headings still correlate, the IMU heading is wrong.                                                                                                                                                |
| 4    | IMU heading is wrong.                                                        | RIO selects AHRS/AM and enters correct MAG VAR.                                                                           | MV acronym should disappear.                                                                                                                                                                              |
| 5    | The VDIG does not agree with the standby compass in step 2.                  | Synchronize AHRS with depression of the HDG button. If not possible set AHRS to COMP mode.                                | If now in COMP mode all computer and displays will use IMU true heading with manual MAG VAR. The MV acronym might not disappear and the BDHI using the MAD might not be correct depending on the failure. |

#### Tactical Data Category

If the CATEGORY switch is in TAC DATA, the following matrix appears in the MESSAGE windows:

> 🚧 TODO: FIX

WAY  
PT  
1  
HOME  
BASE  
WAY  
PT  
2  
DEF  
PT  
WAY  
PT  
3  
HOST  
AREA  
FIX  
PT  
SURF  
TGT  
IP  
PT  
TO  
PT

The functions in this category have a TID symbol each, except the PT to PT FUNCTION. When pressing
any one of these MESSAGE buttons, the TID symbol brightens and the activated MESSAGE push button
illuminates, indicating a successful hook. The RIO can then use the functions for which hooking was
required. Data regarding the hooked point can be displayed on the TID by pressing the according
prefix button. Additionally, the latitude, longitude, and altitude of the hooked point can be
entered by pressing either the LAT, LONG, or ALT button followed by the desired numbers. Like
before, existing data is being displayed on the two lower readouts. If the new data is correct, the
RIO can press the ENTER button and the new values will appear on the readout.

### Navigational Caution Lights

In addition to the NAV COMP, AHRS, and IMU lights mentioned above, the RIO caution/advisory panel
contains two other advisory lights, C&D HOT and AWG-9 COND, that are indirectly related to
navigation system operation. Illumination of either or both of these lights could mean degraded
navigation operation and would require further investigation of the WCS.

## Radar Altimeter System (AN/APN-194)

The radar altimeter is a low-altitude (0 to 5,000 feet), pulsed, range-tracking radar that measures
the surface or terrain clearance below the aircraft. Altitude information is obtained by radiating a
short-duration RF pulse from the transmit antenna to the Earth’s surface and measuring elapsed time
until RF energy returns through the receiver antenna. The altitude is continuously presented to the
pilot on an indicator dial in feet AGL. If either Landing or Take off mode is selected on the PDCP,
radar altitude is displayed on the HUD from 0 to 1,400 feet.

The radar altimeter can operate in two modes. In the search mode, the system successively examines
increments of range until the complete altitude range is searched for a return signal. When a return
signal is detected, the system switches to the track mode and tracks the return signal to provide
continuous altitude information.

If the radar altimeter drops out of the track mode, an OFF flag appears and the pointer is hidden by
a mask. The altimeter will remain inoperative until a return signal is received, at which point the
altimeter will display altitude above ground again. Reliable system operation in the altitude range
of 0 to 5,000 feet permits close altitude control at minimum altitudes. The system will operate
normally in bank angles up to 45° and in climbs or dives except when the reflected signal is too
weak.

The system includes a height indicator (altimeter), a test light on the indicator, a low-altitude
warning tone, a radar receiver-transmitter under the forward cockpit, and two antennas (transmit and
receive), one on each side of the IR fairing, in the aircraft skin. During descent, the warning tone
is heard momentarily when the aircraft passes through the altitude set on the limit index. When the
aircraft is below this altitude, the red low-altitude warning light on the indicator will stay on.

> **Note:** If radar altitude is unreliable, only the OFF flag is present.

The radar altimeter has a minimum warmup time of 3 minutes. During warmup, failure indications and
erroneous readouts should be disregarded.

### Radar Altimeter

The only controls for the system are on the Radar Altimeter on the pilot instrument panel. The
indicator displays radar altitude above the Earth’s surface on a single-turn dial that is calibrated
from 0 to 5,000 feet in decreasing scale to provide greater definition at lower altitudes. The
control knob in the lower left corner of the indicator is a combination power switch, self-test
switch, and positioning control for the low-altitude limit bug.

### Altimeter BIT

To energize the self-test circuitry press and hold the control knob and the green test light will
illuminate, the indicator will read 100 ±10 feet, and the HUD altitude scale should read
approximately 100 feet. If the indicator passes below the altimeter limit bug setting, the aural and
visual warnings are triggered. To resume normal operation simply release the control knob again.

### Low-Altitude Audio Warning

A low-altitude 1,000-Hz tone provides an aural warning, modulated at two pulses per second, lasting
for 3 seconds. The tone is played to both crew members when the aircraft descends below the altitude
set on the low-altitude limit bug.

## Navigation System Integration

### Navigational Modes

Three navigational modes exist in the F-14:

1. **Inertial Navigation Mode (INS)**

   - Achieved by the INS, employing the IMU (and PSU) and the CSDC.
   - Provides the flight crew with own-aircraft position, velocity, attitude, and heading
     information.

2. **Inertial Measurement Unit/Airmass Mode (IMU/AM)**

   - Serves as a backup navigation mode.
   - Entry into this mode permanently degrades INS platform heading alignment.

3. **AHRS/Air Mass Mode (AHRS/AM)**
   - Utilizes the AHRS attitude and heading information in place of the IMU.
   - Serves as an additional backup mode if both INS and IMU/AM modes fail.

### Inertial Navigation Mode

- INS mode should be entered following an alignment.
- READY light illuminates in GND and CVA alignment positions and stays on after launch in CAT
  alignment, indicating completion of alignment.
- If the INS mode is selected, both the STBY and READY lights will go out. However, if the INS mode
  is selected before the caret turns into a diamond, both the STBY and READY lights will illuminate,
  and the system will revert to the IMU/AM backup mode.

#### Outputs provided by IMU and CSDC in INS mode

- Aircraft latitude and longitude
- Aircraft magnetic or true heading (depending on CAP prefix button selected)
- System altitude (barometric damped inertial altitude)
- Platform wander angle
- Velocity components (x, y, z)
- Vertical acceleration

- Aircraft magnetic heading is derived from the AHRS. If the AHRS fails, magnetic heading is derived
  by subtracting the MAG VAR from the true heading.
- The TID can display latitude, longitude, ground speed, ground track, true airspeed, wind (speed
  and direction), MAG VAR, altitude, and aircraft true or magnetic heading.
- The WCS computer makes calculations in true north coordinates for steering and uses the magnetic
  heading input from the AHRS to update the value.
- Wind is computed from the difference between inertial velocities and air mass velocities.
- The WCS and CSDC also provide the steering and cueing functions required for display to the flight
  crew.
- Destination or navigation points include waypoints 1, 2, or 3, fixed point, home base, surface
  target, and initial point, which may be designated by the DEST switch on the TID.
- Navigational points (latitude and longitude) can also be inserted by the RIO using the CAP or by
  datalink message (when on the deck) using either cable or the RF link.
- The course to set (heading to a selected navigational point), range, bearing, and time-to-go to a
  point are based on great circle calculations.

> **Note:** If INS fails, the RIO should verify MAG VAR calculated and WIND data and update via
> manual entries as required.

### IMU/AM Navigation Mode

- If a failure of the navigation computer section of the CSDC or certain failures in the IMU are
  detected, the IMU/AM mode is entered automatically.
- Failures are indicated by the STBY and READY lights illuminating and the NAV COMP light
  illuminating on the RIO CAUTION/ADVISORY panel.
- The switch to IMU/AM is indicated by the IN acronym on the TID and HSD changing to IM. The RIO
  should select IMU/AM on the NAV MODE switch to extinguish the STBY and READY lights.
- The IMU/AM mode can be entered manually by selecting IMU/AM with the NAV MODE switch.
- If the switch is turned off before selecting IMU/AM mode, the computer cannot enter the IMU/AM
  mode for approximately 3 to 5 minutes. During this time, the aircraft must remain stationary on
  the ground or in level unaccelerated flight.

> **Note:** If an alignment past coarse exists with no NAV COMP failure and the RIO switches to
> IMU/AM, the READY light will flash, indicating that if the switch is not returned to INS within 5
> seconds the INS mode cannot be re-entered without completing a new alignment.

- The WCS computer performs dead-reckoning navigation in the IMU/AM mode, using heading information
  from the IMU and true airspeed from the CADC.
- Wind can be applied by either using the wind last computed in the INS mode or wind data manually
  entered through the CAP.

> **Note:** After entering the IMU/AM mode, check wind and MAG VAR values. If MV is in error, enter
> own-aircraft true heading. If winds are in error, update.

#### IMU Reset Procedure

1. NAV MODE switch - OFF, for a few seconds.
2. NAV MODE switch - IMU.
3. Fly straight and level for 5 minutes.
4. Verify IM acronym.

### AHRS/Air Mass Mode

- The AHRS/AM mode is another backup mode for navigation. It uses the last known aircraft position,
  either from the last navigation computer value or by manual data entry from the RIO. It then
  extrapolates the present position of the aircraft.
- AHRS/AM mode is automatically selected if the IMU fails or by switching to AHRS/AM on the NAV MODE
  switch. An IMU failure is indicated by the STBY and READY status lights and the IMU advisory light
  illuminating. Additionally, the attitude status readout on the TID changes to AH.

**WARNING:** The navigation mode will not automatically switch to AHRS/AM upon an IMU failure when
the navigation system is in IMU/AM mode with a failed IMU quantizer and NAV COMP advisory light
illuminated. Because the VDIG/TID/DDD are displaying invalid IMU attitudes, the NAV MODE switch
should be moved to AHRS/AM.

> **Note:** Although the navigation mode automatically switches to AHRS when the IMU fails, the STBY
> and READY lights will remain on until the RIO selects AHRS/AM on the NAV MODE switch.

- When AHRS/AM is selected on the NAV MODE switch, the AHRS provides heading information required
  for DR navigation in place of the IMU platform and the CSDC provides barometric altitude, altitude
  rate, and true airspeed as in the IMU/AM mode.
- To update wind speed and direction and magnetic variation, use the CAP.

The AHRS can be operated in any of three subheading modes selected on the compass controller panel:

- **SLAVED** - Magnetic north referenced (flux value), directional gyro is slaved to flux value,
  used where reliable magnetic heading reference is available.
- **DG** - Free azimuth gyro, compensated for drift because of Earth’s (polar operations), used
  where magnetic reference is unreliable.
- **COMP** - Magnetic north reference direct (flux value), no gyro damping. The HUD, VDI, HSD, and
  multiple display indicator use manual magnetic variation (vM) automatically in this mode.

- The RIO can switch from either INS mode to AHRS/AM mode or from IMU/AM mode to AHRS/AM mode for
  comparison, without fear of degradation, since the AHRS is a separate system.
- This cannot be done with the INS and IMU/AM modes since the IMU is used in both cases and it would
  result in permanent degradation to the IMU alignment.
- In the case of an IMU failure, the nav system will automatically operate in the AHRS/AM mode with
  the navigation and data readout panel in INS, as long as the WCS computer receives heading from
  the AHRS and airspeed from the CADC.

> **Note:** If takeoff is performed in the AHRS/AM mode, MAG VAR and WIND must be manually inserted
> via CAP for proper navigation computations.

- When the platform is aligned and the AHRS/AM backup navigation mode is selected, the STBY light is
  off but the READY light is on, indicating that the inertial navigation mode can be selected if
  desired. The same functions and outputs for display are computed as in INS, however since
  different inputs are used for some calculations a degraded navigation performance is to be
  expected.

### Steering

There are two basic types of steering: navigation and attack. Attack steering modes will be covered
in the Weapons and Weapons Employment overview.

- Navigation steering is computed on either a great circle course or rhumb line to a fixed point on
  the Earth’s surface or as a deviation from a selected course or heading.
- The point used for steering can be the RIO’s selected destination (three waypoints, fixed point,
  identification point, surface target, or home base), a TACAN station, ADF information, ACLS
  information, or a data link waypoint.

### Flight Modes and Steering Submodes

The pilot can choose between five VDIG display formats (HUD modes) on the pilot display control
panel. These five flight modes are arranged as five vertical, mutually exclusive buttons:

- Take Off (T.O.)
- Cruise (CRUISE)
- Air to Air (A/A)
- Air to Ground (A/G)
- Landing (LDG)

> **Note:** ACM cover open selection overrides all modes, except the T.O. and LDG modes.

- Apart from the VDIG displays, the flight mode selections also control AFCS, armament, and WCS
  logic. In addition to the essential data such as altitude, vertical speed indicator etc. the VDIG
  format also provides steering cues.

In each of the flight modes, the pilot can choose between the following five types of steering
commands:

- TACAN (TACAN)
- Destination (DEST)
- AWL/PCD
- Vector (VEC)
- Manual (MAN)

- The five selections are arranged horizontally along the bottom of the PDCP. These steering modes
  determine the display format on the pilot HSD and the RIO multiple display indicator.
- The HSD and multiple display indicator present, in a horizontal plane, steering to the selected
  point.
- The HSD follows the five submodes when the pilot places the HSD-MODE switch to NAV.
- The RIO can do the same by setting the MODE switch on his multiple display indicator control panel
  to NAV.
- Also, when LDG is selected, the pilot has the option of displaying ICLS or ACL information via
  switches on the PDCP that can be used to individually and independently select the HUD and VDI for
  display. A typical choice would be to select ICLS (SPN-41 /ARA-63) for the HUD and for D/L the
  VDI.

A/A (air-to-air) and A/G (air-to-ground) modes are further explained in the Weapons and Weapons
Employment overview.

> **Note:** The STEERING indicator drum on the navigation control and data readout panel provides a
> readout for the RIO to inform him of what steering submode the pilot bas chosen.

### Takeoff Steering

- To enter the takeoff steering mode, press the T.O. button on the display control panel. The VDIG
  will display a vertical speed indicator on the left side and an altitude scale on the right side
  in the HUD.
- Before takeoff, the pilot should check the magnetic heading on top of the HUD and VDI against a
  known reference (i.e., runway heading and most importantly BRC on the carrier, due to the large
  magnetic distortion on the ship). The vertical speed indicator should be used to verify a positive
  climb after takeoff.
- After takeoff, the navigation system normally computes wind and magnetic variation, which are
  needed for steering. For backup modes, the WCS uses the last computed or RIO-entered wind speed,
  direction, and magnetic variation.

#### Take-Off-TACAN Steering

- The TACAN steering submode works the same, whether used for takeoff, cruise, or landing, by
  providing the pilot with a TACAN deviation.
- The pilot can set the course or TACAN radial with the CRS control on the HSD. The TACAN displays
  are available on the HUD, VDI, HSD, and multiple display indicator. The HSD and the CMD display
  TACAN range and the relative bearing to a selected TACAN station.
- To enter the submode, press the TACAN button on the PDCP. After selection of TACAN course, the HUD
  and VDI display the TACAN deviation symbol and a TO and FROM symbology.
- On the HSD and multiple display indicator, an arrow on the deviation bar pointing in the same
  direction as the TACAN course indicates a course toward the station, an arrow pointing in the
  opposite direction indicates a course away from the station. On the HUD, a dashed line indicates
  FROM, a solid line indicates TO. On the VDI, a dark bar indicates FROM, a bright bar indicates TO.
- On the HUD, the deviation symbol moves 3° (linear) in the field of view for a 6° deviation from
  the selected TACAN radial. These limits prevent the symbol from leaving the field of view or
  interfering with the scales on the left and right side. On the VDI, the deviation symbol is scaled
  to move 1.5 inches (linear) for a 6° deviation.

#### Takeoff Manual Steering

- The manual steering mode is similar to the basic takeoff mode.
- The mode is entered by pressing the MAN button and selecting a desired course with the CRS control
  on the HSD.
- The navigation system will then display a command heading on the VDI as a small diamond under the
  magnetic heading scale.

### Cruise Steering

- To enter the cruise flight mode, press the CRUISE button on the PDCP.
- There are four steering submodes available during cruise operations: TACAN, destination, manual,
  and vector.
- While it is physically possible to press the AWL/PCD steering button on the display control panel,
  the action is without function in cruise mode.

> **Note:** Should the AWL/PCD submode be selected while in CRUISE, it will inhibit the display of
> other steering cues.

#### Cruise TACAN Steering

- This submode works in the same way as take off TACAN steering and provides the same readouts and
  displays to the flight crew as described under take off TACAN steering.

#### Cruise Destination Steering

- To enter the cruise destination steering mode, press the DEST button on the PDCP.
- This will provide steering as a command heading symbol on the VDI and HSD to a waypoint selected
  by the RIO on the navigation control and data readout panel.
- The RIO can change latitude/longitude of the destination by hooking the point on the TID and
  inserting new data.

> **Note:** Destination steering to the defended point is provided by the RIO selecting MAN with the
> TID DEST switch. This option is not available in TARPS.

- In the destination steering submode, the destination selected by the RIO and the NAV MODE in use
  will be alternately displayed on the bottom center of the HSD.

![cruiseman](images/cruiseman.png)_ECMD showing the navigational display for Cruise with Manual
steering selected._

![cruisetac](images/cruisetac.png)_VDI and HSD showing navigational displays for Cruise with TACAN
steering selected._

![cruisedest](images/cruisedest.png)_HSD showing navigational display for Cruise with Waypoint 1 set
as Destination._

### Landing Steering Modes

- To enter the landing steering mode, press the LDG button on the PDCP.
- Usually, the LDG mode is engaged at any point from marshal point on. In the case of a go-around,
  waveoff, or bolter, the pilot can press the T.O. button on the PDCP to engage the take-off
  steering mode.
- The landing mode symbology is in general the same as the takeoff mode symbology. Exceptions are
  the addition of angle-of-attack error symbol on the HUD (the E-bracket, referenced towards the
  displayed aircraft wings and not the velocity vector) and the velocity vector symbol, as well as
  5° pitch increments on the VDI.

> **Note:** In all landing submodes, a VDIG breakaway symbol can be displayed upon receipt of a D/L
> waveoff message.

- There are three steering submodes available during landing: TACAN, VEC, and AWL/PCD.
- For the TACAN or VEC submodes of LDG, the HUD, VDI, and HSD displays are similar to the same
  submodes in CRUISE except that in LDG the HUD display includes the velocity vector symbol, the
  radar altitude symbol, and the vertical speed indicator symbol.

#### AWL Steering

If ICLS information from the ARA-63 is available at the marshalling area, the pilot can select the
AWL/PCD sub mode. To observe glideslope displays, the HUD and VDI AWL switches on the pilot display
and control panel should be placed in the ILS position.

The HUD and VDIG will then provide vertical and lateral precision course vector symbols, forming
crossed pointers that are driven by the ICLS. On the HUD, full-scale vector deflection is limited to
2°. Full-scale vector deflection on the VDI is 1.5°. In the AWL/PCD submode of LDG, the HSD will
additionally display TACAN information if the HSD is set to NAV mode on the PDCP.

At the acquisition window, the pilot can either continue with the ILS display, or, if ACL
information from the SPN-42 data link is available, he can select ACL of the AWL switches for either
the VDI or HUD displays or both. The ACL display uses the same vertical and lateral precision course
vector symbols as the ICLS, but these are now driven by the SPN-42 data link. A typical display
combination during the final stages of landing is ILS on the HUD and ACL on the VDI. With valid ACL
data available, the AFCS may be engaged by selecting ACL on the VEC/PCD, OFF, and ACL switch located
on the AFCS control panel.

![landingtac](images/landingtac.png)_HUD showing Landing mode display with TACAN set as destination
source._

![landingaclhud](images/landingaclhud.png)_HUD showing Landing mode with AWL/PCD set as Destination
source, ACL set as source of glideslope and localiser._

![landingaclvdi](images/landingaclvdi.png)_VDI showing Landing mode with AWL/PCD set as Destination
source, ILS (ICLS) set as source of glideslope and localiser._
