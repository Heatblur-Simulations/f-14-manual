# Inertial Navigation System (INS)

An important feature of the INS is its fast alignment capability over a wide
range of temperature. The INS is a dead-reckoning system that derives speed as a
function of aircraft accelerations. Two accelerometers are used to measure
acceleration in the horizontal plane. These outputs result in velocities along
the X and Y axes after corrections for the Earth’s rotational velocity (coriolis
acceleration) and integration inputs. These X and Y velocities can be resolved
in the IMU platform coordinate system through wander angle and put in the Earth
referenced north/east/down system. Integration about the north and east axes
also provides increments of latitude and longitude. Navigation in such manner
gives the flight crew detailed and precise knowledge of the position, direction
and velocity of their aircraft at any time.

An INS device like the AN/ASN-92 requires a high precision of measurements of
the acceleration and the attitude, because even the smallest inaccuracy can
result in a significant error when accumulated over extended time.

Consider an example: the inertial platform is slightly tilted from the nominal
position, let’s say by 0.002°. Then, the horizontal accelerometers are no longer
parallel to the ground, and this means that they start to be sensitive to
gravity. If not corrected, this gravitational component is interpreted by the
navigation computer as a horizontal acceleration. If the wrong attitude is kept
constant for one hour, it will result in an error of the measured position of
over one nautical mile. It is a significant inaccuracy, and it comes as a result
of such a minimal alignment error.

The accuracy of the INS degrades with time – usually the longer they operate in
the navigation mode, the higher the error they accumulate.

## Inertial Measurement Unit

The IMU is a three-axis, four-gimbal, all-attitude unit containing two gyros and
three accelerometers. The gyros and the accelerometers are mounted to a platform
that is free to rotate with respect to the base (aircraft). The four-gimbal
system provides gimbal-lock free rotation and uses torquer motors to correct
platform attitude errors. The gyros sense angular rotation about their sensitive
axes and are the source of information about the aircraft attitude. They also
stabilize the whole platform and keep the constant orientation of the
accelerometers with respect to the ground (gravity). Two accelerometers are used
to measure acceleration in the horizontal plane; the third accelerometer
measures vertical acceleration. The sensitive axes of the accelerometers are
orthogonal. Their displacement is sensed by pick-off coils that develop a signal
that is amplified, then applied to a torquer that restores the mass to its null
position. The magnitude of torquing current required is proportional to the
acceleration. The sensed acceleration signal is integrated in the computer and
used to calculate aircraft velocity and displacement from the initial position.
The attitude of the platform is also corrected continuously to account for the
effects associated with the Earth’s rotation and device inaccuracies.

This design is widespread for gimballed inertial navigation systems. It was used
for the F-14, but also for the Space Shuttle and many other aircraft of the era.

### IMU BIT

In case of IMU failure, the CSDC automatically switches to a backup navigation
mode. The IMU BIT monitors the temperature, internal error signals, and
electrical characteristics of the IMU.

If the CSDC detects a failure in the IMU, it informs the WCS computer and the
IMU acronym indicating the component of the INS that failed is displayed on the
TID. The IMU advisory light illuminates on the RIO caution/advisory panel.

### NAV COMP Light

If the NAV MODE switch is in INS, and the NAV COMP light illuminates, there is a
failure in the INS or CSDC; the navigation system will automatically switch to a
backup mode. The NAV COMP light remains illuminated and the RIO should set the
NAV MODE switch to IMU/AM position. The NAV COMP advisory light indicates that
the INS is operating in a degraded mode as a result of manual selection by the
RIO using the NAV MODE switch or automatic selection because of a failure of the
CSDC or the IMU.

> 💡
>
> - When an IMU quantizer failure occurs in the INS mode, the system will
>   automatically select the IMU/AM mode and the STBY/READY and NAV COMP lights
>   will illuminate. The RIO should move the NAV MODE switch from the INS to
>   IMU/AM. The STBY/READY lights go out - but the NAV COMP light will remain
>   illuminated.
>
> - With a NAV COMP light and a CSI ACRO displayed on the TID, there is no
>   auto-switch to a backup attitude source for the HUD or the VDI nor is the
>   RIO able to manually switch to any backup mode.

### IMU Light

If there is a failure in the IMU, the IMU advisory light will illuminate; the
navigation system switches to the AHRS/AM mode and accuracy may become degraded
Attitude information for the VDIG and missile control system are now provided by
the AHRS. The IMU light remains illuminated until the RIO selects AHRS/AM. With
an AHRS light computed magnetic variation (vC) should be verified and updated if
necessary.

| Standby light | Ready light | Description                                                                                                                                                                       |
| ------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ON            | ON          | Selected navigational mode not functioning correctly due to failure. Normal during first 45 seconds of alignment initialization.                                                  |
| ON            | OFF         | Alignment underway (after first 45 seconds) or IMU/AM selected prior to coarse align. Leave switch in selected mode to complete alignment or to wait for IMU erection.            |
| Flashing      | Flashing    | Alignment not initialized due to parking brake not being set.                                                                                                                     |
| Flashing      | OFF         | Alignment suspended (paused) due to parking brake not being set.                                                                                                                  |
| OFF           | Flashing    | Alignment suspended due to parking brake not being set after the second marker.                                                                                                   |
| OFF           | ON          | Alignment good enough for weapons employment (second marker on screen), or INS or IMU/AM available when in AHRS/AM. Wait for complete alignment or select mode as desired.        |
| OFF           | OFF         | System functioning correctly in set mode or system off.                                                                                                                           |
| OFF           | Flashing    | If selection of IMU/AM occurs with system aligned the ready light will flash for 5 seconds indicating that INS should be reselected. After this timeframe, the alignment is lost. |

> 🟡 CAUTION: After RIO selection IMU/AM because of a failure, and a complete
> IMU failure occurs afterwards, the system will display erroneous attitude
> information to the pilot. The CSDC will neither automatically exit IMU/AM to
> the AHRS/AM mode (if a valid AHRS exists) nor remove VDIG/TID/DDD attitude
> displays. The RIO should manually switch to the AHRS/AM mode.

Whenever the NAV COMP light illuminates the flight crew should be cautious of
attitude displays and frequently cross-reference the VDIG/TID/DDD and standby
attitude indicator, particularly during non-VFR conditions and be alert for an
IMU failure. If an IMU failure is indicated by the IMU light, display of IMU
acronym in OBC continuous monitor, removal of the IM acronym in the TID attitude
reference source buffer, and the NAV COMP light goes out, the RIO should move
the NAV MODE switch from the IMU/AM to the AHRS/AM and disregard the READY
light. If a valid AHRS exists, its attitude information will be displayed,
otherwise the VDIG/TID/DDD attitude displays will be removed.

### AHRS Light

If the AHRS self-test has detected a failure the AHRS Light will illuminate. The
magnetic heading on the HUD and VDI is now controlled by the WCS computer.
Because it uses the last known value for magnetic variation, the heading will
degrade over long distances and time unless new values of magnetic variation are
entered by the RIO via the CAP. IFR flight should be avoided completely.

### Navigation Power Supply

The NPS provides electrical power for the IMU and CSDC. A nickel-cadmium battery
provides power to the IMU and CSDC for up to 10 seconds if there is a power
interruption or transient.

## INS Alignment Modes

Before INS can be used for navigation, the inertial platform must be aligned so
that it is level relative to local vertical and its orientation relative to true
north. This is done automatically in two phases: coarse alignment and fine
alignment.

The coarse phase begins when the initialization sequence is complete and
performs initial coarse estimates of the IMU platform wander angle. The
successful completion of this phase requires a minimum local level error in the
IMU platform to proceed to the fine alignment phase.

IMU elements that require warmup are being heated by the IMU heaters. In
addition, the IMU gimbals (roll, pitch, azimuth) are caged through their
respective synchros to the IMU case (airframe reference). The IMU gyros are
brought up to running speed, and coarse leveling is performed using the
accelerometer outputs.

When power is applied to the NPS and IMU, the SMAL program from the bulk storage
tape is read into the WCS computer non-write-protected memory. The alignment
program estimates a wander angle, velocity errors, and gyro-torquing correction
signals.

These values are sent to the CSDC to align the IMU and to initialize the CSDC
NAV program. The following assemblies are used during alignment: IMU, NPS, CSDC,
WCS computer, CAP (computer address panel), navigation control and data readout
panel. For carrier alignment also the data link receiver-processor is used.

There are four primary alignment modes: SAT ground and carrier alignment, and
NON SAT ground and carrier alignment. SAT operation allows OBC testing during
the alignment. Either alignment mode can be used in SAT or NON SAT. (SAT modes
are not yet implemented in DCS)

The basic TID display formats are represented in the image below. The automatic
sequence is the same for all modes, except for CVA ALIGN, where the ship’s
motion is inserted by the data link.

The CAT ALIGN overrides the requirement for the parking brake to be on (suspend
align). There are two more alignment sub-modes: stored heading and handset. The
handset mode is used for CVA ALIGN when SINS data is not available. The stored
heading mode is used for rapid alignment, by using a previous alignment
(reference alignment) to align the system quickly.

Initialization of any alignment mode requires entry of the following values in
either own aircraft or HB (homebase) for the following:

- Latitude
- Longitude
- Corrected pressure altitude.

In addition, if handset alignment is used on the carrier, the following values
must also be entered:

- Speed
- Ship’s true heading.

> 💡 The parking brake must be on during initialization of any alignment. When
> the parking brake is released during coarse alignment, the STBY and READY
> lights flash and the align program will reinitialize. If the parking brake is
> released during fine alignment, a suspend align discrete is sent to the CSDC,
> the STBY or READY light blinks, and the time into alignment clock on the TID
> stops.

![Alignment Display](../../img/general_navigation_align.jpg)

## Non-SAT Alignments

### Ground Alignment

For land-based operations, the ground alignment procedure is used to align the
IMU. Aircraft or homebase latitude, longitude, and altitude are entered into the
WCS computer via the CAP. This may be accomplished before or after selecting GND
align. Selecting GND ALIGN on the NAV MODE switch initiates the align operation.
However note that whatever has been hooked when switching to ALIGN, is injected
as your own coordinates. You can use homebase or preset own aircraft coordinates
for example, but if you didn’t, you will have between 90 to 120 seconds to enter
your own coordinates and you cannot wait for the alignment to finish, or it will
trigger the observable error (O) and alignment will have to be reinitialized.

> 💡 If fine align has not been achieved, entry of the own aircraft’s latitude
> will restart the alignment. On completion of the alignment program read-in,
> the alignment display appears on the TID.

During the initialization, the TID will display an alignment time of 0.7. After
42 to 45 seconds, the NAV COMP light on the caution/advisory panel goes out,
indicating that the IMU has entered the ready state; the READY light also goes
out. The alignment program will begin with the computation of the alignment
parameters.

At this time an alignment status indicator, called a caret (v), will start to
move from left to right. The status of the alignment is indicated by where the
caret appears in relationship to three alignment-tick indicators. The first tick
indicator is called the coarse-align complete marker, the second is the alert
launch criteria marker, and the third indicator is the fine-align complete
marker. An elapsed time indicator provides alignment time in minutes and tenths.

The clock indicator will begin with 0.7 displayed and continue after a 42-second
delay. After 9.9 minutes, the clock display will pass through zero and begin
again. If the alignment is suspended (parking brake), the clock will stop
counting until alignment is resumed.

Between the first and second ticks are the telltale status indicators that
indicate a failure of one of four systems: C = calibration data fail, T =
temperature (cold IMU), S = SINS data invalid, and 0 = observable (alignment
data bad, i.e., LAT, LONG, SPEED, etc.). The letter that appears indicates which
system has a failure.

A C indicates a failure in the transfer of calibration data between the IMU and
the CSDC, and the alignment will not progress.

The T appears normally at the start of alignment and disappears when the IMU has
reached operating temperature. If the T does not disappear, there is a failure
in the system and a non-stored heading alignment will not progress.

The S can appear at the start of any CV alignment and will disappear shortly
after. If the S does not disappear, there is a failure and the result will be a
bad alignment. The S also appears if incoming SINS data is not valid, in which
case the alignment should not be trusted.

> 💡
>
> - The CSDC and IMU outputs as well as data inputs are constantly monitored and
>   if either an excessive value in the X or Y acceleration is sensed, or a bad
>   value from wrong lat or long data input, a 0 (bad observable) is posted on
>   the TID and the alignment stalls (ceases to continue).
>
> - The IMU may be preheated by selecting IMU/AM on the TID NAV MODE switch when
>   operating on ground or aircraft power. This energizes the IMU and navigation
>   power supply, which turns on the IMU heater prior to start of a ground or
>   carrier alignment. The IMU should not be preheated for longer than 5
>   minutes.

During coarse alignment, the alignment caret moves based on the wander angle
error. If the parking brake is released during this phase, the alignment will
reset.

The V will reach the first tick when coarse alignment is complete. When the
program switches to fine alignment, the caret changes into a diamond, which
indicates to the pilot that he may release the parking brake (suspend alignment)
and taxi, if OBC is complete. After the parking brake is reset, alignment will
continue and the diamond will move right as alignment improves.

At the second tick, which indicates that alignment meets the minimum criteria to
launch weapons, the STBY light will go off and the READY light will illuminate.
The INS mode may be entered at this point. If INS is not selected, the diamond
continues to move to the right. When it reaches the third tick, it indicates
that fine alignment is completed and a dot will appear in the diamond (<>).

You can leave the system in alignment mode even after fine align is complete,
which will provide a progressively more accurate alignment. How much more
accuracy is gained depends on the quality of alignment when fine align was
completed. This can be rather minimal in some cases, but, when it is further
left in alignment for long enough, it will always provide a certain amount of
improvement.

> 💡 If alignment is suspended and the aircraft is taxied over a distance
> greater than 4000 feet, the quality of the alignment becomes unknown to a
> point where it might be unreliable. Alignment reinitialization is advised.

If the caret (v) or diamond stop moving, the program has stopped aligning. If
they stop between the first and third ticks (coarse and fine), it means that
alignment has been suspended. The clock will stop counting if that is the case.
If alignment continues, the clock resumes counting until switched out of
alignment by NAV MODE switch or if the parking brake is released again.

> 💡 The alignment display will not go past the coarse align tick until the IMU
> temperature has reached 165°. When this temperature is reached, the T symbol
> will disappear. The temperature interlock is bypassed when performing a stored
> heading alignment. The IMU should be preheated for a stored heading alignment,
> as it usually completes in under 2 minutes, which could result in a bad
> alignment.

Selecting INS will turn off the READY light, terminate alignment and the
tactical display will appear, and the normal navigation display will become
available.

> 💡
>
> - When the NAV MODE switch is set to INS, the CSDC is in navigation mode and
>   the READY light goes out.
>
> - After selecting the INS navigation mode, the AWG-9 align program continues
>   for approximately three align data cycles (18 seconds) before entering INS.
>   This also applies if the aircraft takes off before INS is selected.

The RIO and pilot can then observe an IN acronym on the attitude status readout
on the TID or TID repeat.

If you want to reinitialize an alignment when observing an acronym during fine
alignment or if noting a stalled alignment, the following methods can be used:

- Select both INS mode switch and WCS PWR switch to off. Allow TID displays to
  collapse. Proceed with normal start sequence.
- INS mode switch to desired align mode.
- INS mode switch to INS. Verify system in INS (IN acronym on TID), cycle mode
  switch to off and back to desired alignment mode.

Failing to follow above procedures when reinitializing a fine alignment will
result in severely degraded alignment quality. To reinitialize the program
during coarse align, the RIO has to unselect GND ALIGN, re-enter LAT and LONG
and reselect GND ALIGN.

### Carrier Alignment

When aligning on a carrier with a changing latitude, longitude, and heading, the
carrier alignment procedure is used. INS can be aligned in three different ways
on a carrier: with RF data link alignment and manual (handset) alignment -
deck-edge cable alignment is not implemented in DCS. TID displays the same
information as during a GND ALIGN procedure.

Note that you will get erroneous heading readings on a carrier, even if fine
align is complete. The heading can deviate up to 20 or 30 degrees, depending on
the parking position on the carrier and the carrier’s heading, due to the
carrier’s own magnetic field and induced magnetic field. It is important that
the flight crew know the carrier’s BRC. The magnetic variation caused by the
carrier’s magnetic distortion will go away shortly after take off. This magnetic
distortion does not impact the alignment quality.

#### Carrier Data Link Alignment

The primary carrier alignment mode is the RF data link alignment (CAINS). This
mode uses the ship’s INS (SINS) to align the IMU. Inertial inputs including the
ship’s longitude, latitude, north and east velocity as well as roll, pitch,
heading, and heading rate are transmitted to the WCS computer via the RF data
link.

The data is transmitted by the ship’s data link equipment. To align the INS by
the CVA alignment method, follow these steps:

1. Turn on the power to the data link system
2. Turn the WCS power to STBY
3. Set the D/L mode on the DATA LINK control panel to CAINS/WAYPT
4. Select CVA ALIGN on the NAV MODE switch.

The received data is processed by the data link equipment in the aircraft and
transmitted to the WCS computer. The WCS computer compares the IMU data with the
ship’s INS data and sends correction signals to the CSDC to fine align the IMU.

> 💡
>
> - If CVA or CAT ALIGN is selected prior to selecting OBC BIT, data link OBC
>   testing is inhibited. (Not implemented yet)
>
> - The fine alignment complete tick mark indicates completion of fine align and
>   whether alignment data is SINS or handset. When good SINS data is not
>   received during a filter cycle, the fine alignment complete tick mark jumps
>   to the left approximately 0.75 inches. The jump indicates the SINS data is
>   intermittent, and handset alignment data is required.

CVA ALIGN is much similar to GND ALIGN, and alignment is suspended, stalled, and
reinitialized in the same manner as during GND ALIGN, depending on whether it
has been induced during the coarse or fine alignment phase.

> 💡 If SINS data link is lost during taxi, a flashing HS will appear on the
> TID. This will disappear when data link is reacquired; however, because of
> align timing requirements, it may remain flashing up to 8 seconds after data
> link is reacquired. If the HS flashing does not stop 8 seconds after resetting
> the parking brake, SINS data is lost but the alignment can continue by
> entering carrier speed and true heading into the own aircraft file and
> completing the align in handset mode. If datalink is reacquired during this
> period, the HS will disappear from the TID and a normal datalink CVA align
> will continue.

To complete the alignment, set the NAV MODE switch to INS. A successfully
aligned INS is indicated by both the STBY and READY lights off and the IN
acronym in the status readout on the TID.

> 💡
>
> - Do not switch to INS while the ship is in a turn, even if fine align has
>   been completed. This will degrade the alignment quality significantly. If
>   you wait until the ship’s turn is complete, alignment quality will not be
>   affected. Handset alignment is not affected.
>
> - If during a CVA alignment the CAINS/WAYPT-TAC switch is unlatched to TAC by
>   power transient, or data link signal is lost, the INS will revert to a
>   handset alignment (HS).

#### Carrier Cable Alignment

The deck-edge cable alignment (SINS) is an alternative to the RF data link
alignment, where inputs are sent over a secure cable to the data link from the
deck-edge outlet box of the carrier. Switching from RF data link to cable inputs
is done automatically when the cable is connected. To initiate a CVA align with
SINS via cable, use the same steps as for the RF data link alignment. As cable
and RF data link alignment are virtually the same, it has not been implemented
in DCS.

> 💡 The SINS-cable is currently not implemented in DCS.

#### Handset Alignment

The HS alignment mode is a manual alignment option available for carrier
alignment, should SINS data from RF data link or cable not be available,
inaccurate, or interrupted (indicated by the TILT light on the DDI and/or the
fine alignment complete tick mark jumping to the left about 0.75 inches). The HS
is also very similar to the GND ALIGN mode, but the RIO has to input more data
and the computer takes longer to process because of the ship movement.

IF CVA ALIGN is selected with the NAV MODE switch and no SINS data is available,
a flashing HS acronym will appear on the TID. Whenever HS flashes on the TID
before alignment starts and the RIO chooses to align the system with handset
align, he must enter the according ship’s data in the following order:

- Speed
- Ship’s true heading
- Latitude
- Longitude
- Corrected pressure altitude.

If during coarse align data link is lost (RF or cable) or during any portion of
a stored heading alignment, the alignment will reinitialize and the HS acronym
will be flashing. The alignment can then be continued with the handset mode as
described above.

If the reinitialization occurs during the fine align phase of a stored heading
alignment, the CSDC alignment routine must be reset first by turning the AWG-9
OFF for 6 seconds.

If data link is lost during a normal fine align phase, HS will be entered
automatically, but the acronym will not flash and the alignment will continue.
If data link is regained, the HS acronym will disappear and normal CVA align via
RF or cable data link will continue. When data link is regained, the acronym can
remain for up to 8 seconds.

> 💡 If HS is not flashing, valid SINS data has already been entered. If it is
> flashing, SINS data has to be entered manually.

On the CAP NAV DATA matrix use OWN AC, and the LAT and LONG prefix push buttons;
to enter the ships’ heading and speed use own-aircraft HDG and SPD buttons. Once
this data has been entered HS will stop flashing and the alignment will progress
like a normal GND ALIGN, but can take up to 3 times as long.

> 💡 The carrier needs to maintain a constant speed and heading during alignment
> for this method to be successful. Remember that handset alignment quality will
> always be inferior to a normal CVA ALIGN fine alignment quality.

### Reinitialization

To reinitialize an alignment during the fine align phase, if an observable
acronym (O) or a stalled alignment has been noticed, the RIO can use any of the
following methods:

1. Set NAV MODE switch and WCS switch to OFF. Allow TID displays to collapse.
   Proceed with normal start sequence.
2. Set NAV MODE switch to OFF. Set NAV MODE switch to desired align mode.
3. Set NAV MODE switch to INS. Verify system in INS (IN acronym on TID). Cycle
   NAV MODE switch to OFF and back to desired alignment mode.

Failing to follow above procedures when reinitializing a fine alignment will
result in severely degraded alignment quality. To reinitialize the program
during coarse align, the RIO has to unselect GND ALIGN, re-enter LAT and LONG
and reselect GND ALIGN.

## Stored Heading Alignment

A feature of the INS that allows for quick-reaction response is the
stored-heading alignment. The aircraft has to be parked and tied down in the
alert position (wheel-chocks in DCS) for this procedure to be successful.
Additionally, the aircraft heading has to be stored with a reference alignment
before the aircraft is being powered down (and back up again).

When the aircraft is powered back up, the system takes less than 2 minutes to
align the INS from the stored heading, while providing almost the same accuracy
like a full, fine ground or carrier alignment. When align is selected and a
reference alignment is available, an ASH acronym for automatic stored heading
will be displayed on the TID and STORED HDG ALIGN will illuminate on the CAP.
The ASH acronym tells the RIO that a stored heading has been entered
automatically.

No further action from the RIO is needed, ASH align will continue and ASH will
remain on the TID as an advisory. Pressing once on the STORED HDG ALIGN on the
CAP will end the ASH align and initiate normal alignment. The ASH acronym will
disappear. Pressing the STORED HDG ALIGN a second time will reinitialize the
stored heading alignment, however ASH won’t be displayed on the TID anymore.

> 💡 STBY/READY lights should be monitored for simultaneous illumination. If
> simultaneous illumination appears after 42 to 45 seconds, a failure has caused
> the alignment to re-initiate and may result in an erroneous alignment. The RIO
> must turn NAV MODE switch to OFF for 1 second, then restart the alignment
> following normal ground or carrier alignment procedures.

The reference alignment can be done with either internal or external power. To
do a reference alignment, enter the latitude and longitude via the CAP into the
own-aircraft file. This can be achieved by an automatic transfer from homebase
entry into own-aircraft before selecting GND ALIGN, or entry into own-aircraft
file after GND ALIGN has been selected.

The aircraft’s latitude and longitude can be entered into homebase and
transferred into own-aircraft file through the following steps:

1. Set the NAV MODE switch to GND ALIGN.
2. Select CAP category TAC DATA.
3. Depress HOME BASE and enter aircraft longitude and latitude via the CAP data
   entry buttons.

Aircraft latitude and longitude can be entered directly through the following
steps:

1. Set the NAV MODE switch to either OFF or GND ALIGN.
2. Select CAP category NAV.
3. Depress OWN A/C and enter aircraft longitude and latitude via the CAP data
   entry buttons.

> 💡 Depressing OWN A/C hooks own aircraft. If longitude and latitude is entered
> with the NAV MODE switch set to OFF, own aircraft must be hooked when the NAV
> MODE switch is set from OFF to GND ALIGN again. Be aware that whatever has
> been hooked (OWN AC or HB) will provide the data that is entered when NAV MODE
> is set from OFF to GND ALIGN.

For a reference alignment, alignment has to reach fine align complete. Both CVA
ALIGN and GND ALIGN can be used to establish a reference alignment. The
reference alignment is complete when a dot appears in the diamond.

To establish a reference alignment follow these steps:

1. WCS switch - STBY.
2. NAV MODE - CVA or GND.
3. DATA LINK - ON (CV ops only).
4. D/L MODE - CAINS/WAYPT (CV ops only).
5. Reference alignment continues to fine align complete.
6. NAV MODE switch to INS.
7. WCS - OFF.
8. NAV MODE - OFF.

> 💡 Unstable current or temporary loss of power will cause the CAINS to be
> deselected and will be indicated by a flashing HS acronym. A reference
> alignment cannot be done through a handset alignment, even if continued to
> fine align complete. For a successful reference alignment the aircraft must
> not move and the parking brake must not be cycled after the reference heading
> has been stored. For a valid reference alignment, it isn’t necessary to switch
> NAV MODE to INS, instead it can be switched directly to OFF from either CVA or
> GND ALIGN.

## Catapult Alignment

The CAT ALIGN mode is used to prevent suspend align when positioned on the
catapult and the parking brake has been released. The purpose of the catapult
align mode is to provide normal CVA ALIGN as long as possible. When CAT ALIGN is
selected, large roll, pitch, speed, and heading changes of the ship can cause
the program to automatically switch to INS.

## Navigation Fix Update

An error of latitude or longitude in the computer position of the aircraft can
be corrected by a navigation fix update. Updating is especially important in the
backup modes (AHRS AM and IMU/ AM) because of the estimated winds and magnetic
variation changes. A nav fix is done via a ground-reference-point (latitude and
longitude) position. The range and bearing of this position to the present
aircraft position is used to update or correct existing values. The nav system
may be updated by either a radar fix, a TACAN fix, or a visual fix.

Before performing a nav fix, the latitude and longitude of the desired update
point (radar, TACAN, or visual) must be stored in one of eight navigation point
locations (three WPs, FIX PT, HOME BASE, HOST AREA, DEF PT, and IP). This data
can be stored prior to flight by data link or by manual insertion. Then follow
these steps:

1. Hook the Waypoint you choose to select for the nav fix.
2. Check the stored latitude and longitude on the TID.
3. Rotate the CATEGORY switch to NAV and select the desired type of update.

Note that updating the position while in INS, and to a lesser degree while in
IMU, can introduce a greater navigational position error than already present,
in particular if a radar fix is used to update the nav system. Updates with a
visual or TACAN fix provide reasonable accuracy (assuming a good MAG VAR during
TACAN updates). Updating your nav system via a nav fix should be primarily used
in the AHRS mode.

## Radar Update

A RDR FIX may be selected before or after positioning the DDD cursors. If the
RDR FIX button is depressed, the computer computes the present position of the
aircraft by measuring the range and bearing from the selected point. The delta
between the computer position and the position determined by the INS is then
displayed on the TID. If entry of this delta into the navigation computations is
desired, press the FIX ENABLE button. If the delta does not appear to be
correct, the computer and the readout can be cleared by pressing the RDR FIX
button. The fix may then be attempted again. The RIO should also perform
periodic checks of own aircraft system altitude and update the altitude if
necessary.

Radar updating is performed as follows:

1. TID CURSOR/CAP - Hook Desired Navigation Point for Update.
2. PULSE SRCH button - Depress.
3. On sensor control panel: STAB switch - IN. EL BARS switch - 1. AZ SCAN
   switch - As Desired.
4. RDR FIX button - Depress.
5. DDD CURSOR button - Depress.
6. Action switch - Half Action (first detent).
7. Cursor is displayed on DDD.
8. Manipulate hand control DDD cursor over desired ground map point.
9. Action switch - Full Action and Release. (This will cause the DDD cursor to
   remain at the selected position.)
10. Observe the delta for LAT and LONG on TID.
11. If readouts are unsatisfactory, deselect RDR FIX and repeat steps 4
    through 12.
12. FIX ENABLE button - Depress.

> 💡 To clear the previous hooked DDD cursor position, go to half action and
> then release prior to initiating full action for the new position hook.

## TACAN Update

To perform a nav fix by TACAN, it requires that a pre-stored waypoint shares
identical LAT and LONG values with the TACAN station that will be used for the
fix. Select the TACAN channel for the desired station and verify by listening to
the coded identifier tone in the headset.

Press the TACAN FIX button to update the aircraft position from a TACAN station.
The WCS computer then calculates the own aircraft position error based on the
range and bearing from the TACAN station. The delta is then entered in the same
manner as with a radar fix.

Perform a TACAN fix following these steps:

1. Select a TACAN channel whose latitude and longitude correspond to an update
   point.
2. Hook the desired update point (WAYPT 1, FIX PT, HOME BASE, etc.).
3. CATEGORY switch - NAV.
4. TACAN FIX button - Depress.
5. Observe the present position delta readout.
6. If delta is unsatisfactory, deselect TACAN FIX and repeat steps 2 through 7.
7. FIX ENABLE button - Depress.

> 💡 During a TACAN FIX, the MAG VAR must be the same as the TACAN station
> magnetic variation, or the update will be in error. Given a TACAN station with
> a range of 100 NM from ownship, a 1°MAG VAR error introduces a 1.74nm error
> into the ownship’s TACAN update.

## Visual Update

To perform a visual fix, fly over a pre-stored waypoint and press the VIS FIX
button. Estimate your timing, because the aircraft nose and fuselage can obscure
the fix point during overflight. It is also difficult to estimate when directly
overhead a waypoint if the aircraft altitude is greater than 10,000 feet. The
delta for the visual fix is displayed on the TID. Enter the delta by pressing
FIX ENABLE.

To perform a visual fix use the following steps:

1. Hook the desired update point (WAY PT, HB, IP, etc.).
2. Select NAV category on CAP.
3. Overfly the selected pre-stored point and when over the point, depress the
   VIS FIX button on the cap.
4. If the delta is not satisfactory, press VIS FIX again to clear the delta and
   repeat from step 1.
5. If a satisfactory delta is displayed, depress the FIX ENABLE button; this
   causes the delta correction of own-aircraft position to be inserted into the
   computer.

## Data Link Update

To perform a data link update of the aircraft INS to the TDS frame of reference,
the aircraft and TDS must share a pre-briefed waypoint, identical in latitude
and longitude. Enter this LAT/LONG data into the HOST AREA pseudo target file.
The TDS will uplink the common reference point as a data link waypoint. When the
aircraft and TDS INS systems agree, the data link waypoint and host area symbols
will be superimposed on the TID. If they drift apart, the two pseudo targets on
the TID will drift as well.

To perform an update via data link, use the following steps:

1. Hook the data link waypoint corresponding pre-briefed reference point.
2. Select the NAV category on CAP.
3. Overfly the hooked data link waypoint. When immediately over the point, press
   VIS FIX button on CAP.
4. Observe delta LAT and LONG on TID.
5. If deltas are satisfactory and update is desired, depress FIX ENABLE.

After a data link update, HOST AREA and data link waypoint should be
superimposed on the TID again.

## Fighter-to-Fighter Navigation Update

Net aircraft that use fighter-to-fighter data link can update their navigation
system in the FF/DL mode. To update LAT/LONG hook the net aircraft symbol of an
aircraft that is in close proximity and select F/F NAV UPDATE on the CAP. This
will enter the hooked aircraft’s coordinates into the INS as own-aircraft
coordinates. To update the nav system on an aircraft that is not close, first
obtain a radar STT on that aircraft, hook the STT-ed aircraft on the TID and
then press F/F NAV UPDATE on the CAP.

> 💡 By updating to the selected aircraft’s INS, its calibration/drift can
> potentially introduce a larger error into your own INS. Both aircraft will
> share the same error though.

## Position Marking

To mark the position of a pulse radar target, a visual target, or a TACAN
station to be displayed on the TID, use the SURF TGT position in the TAC DATA
category. Once displayed on the TID, latitude, longitude, range, bearing, and
steering data are available, using the CAP or the navigation destination control
or both.

> 💡 Do not use the position SURF TGT to update the navigation computer. The
> surface target position symbol is repositioned with respect to own aircraft
> instead of own aircraft being updated in reference to the surface target.

To mark a pulse radar target on the TID, follow these steps:

1. Select the SURF TGT button.
2. Establish the location via a radar fix.
3. Select the DDD CURSOR and use the pulse system for radar mapping.
4. Designate the point of interest by placing the cursor over that point.
5. Selecting full action.
6. Select RDR FIX.

This will display a delta from the hooked point to the surface target. Ignore
the delta and select FIX ENABLE to position the surface target over the
previously identified radar position. A very accurate readout of latitude,
longitude, and steering information will become available for the Surface Target
Waypoint.

The method for visual targets is the same, but a visual fix is required. You can
also mark a TACAN station by using the same method and following the TACAN fix
procedures. After completing any of the above procedures, the SURF TGT symbol
will be displayed on the TID at the computed latitude and longitude coordinates.

The surface target symbol can also be used as a destination point. If its
position has been previously entered, the symbol will appear on the TID. One
method for special position marking is to hook any point on the TID and select
SURF TGT. The surface target symbol now appears over the hooked point and its
new position will be stored in the WCS computer.
