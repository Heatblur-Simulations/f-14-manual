# Engines

The F-14A is powered by two Pratt & Whitney TF30-P-414A while the F-14B is
powered by two General Electrics F110-GE-400, both of which are afterburning
turbofan engines.

To provide the engines with an even subsonic airflow the F-14 has the AICS or
Air Inlet Control System. This system controls the variable geometry intakes by
moving the variable ramps mounted in them to slow the airflow. This is
accomplished using various sensor inputs run through a calculation using set
schedules which decides the positions of the ramps.

In addition, the TF30 uses two systems to improve reliable operation, the Mid
Compression Bypass System (MCB) and the Mach Lever.

The MCB helps mitigate high angle of attack airflow onto the compressor fans to
reduce the risk of an engine stall. This system vents air from the compressor
section to bypass duct to stabilize the airflow for later compressor stages.
Normally this system uses angle of attack and Mach number sensor data to
activate, but with the landing gear handle in the down position this it is only
activated with zone 5 afterburner. Additionally the WCS commands the MCB to
activate with extension of the refuelling probe as well as when launching AIM-7
or AIM-9 missiles, air to ground rockets or firing the M61 Vulcan gun.

The Mach Lever also mitigates the risk of an engine stall by controlling min and
max rpm allowed as a function of Mach number. In addition it also increases the
minimum rpm in high angle of attack regimes while subsonic.

The two F110s in F-14B, on the other hand, are controlled by the AFTC (Augmenter
Fan Temperature Control unit). The AFTC is an early engine control computer akin
to an early version of a FADEC (Full Authority Digital Engine Control) used on
newer turbine engines. This system controls both the engine itself as well as
the variable exhaust nozzles controlling the engine exhaust gases and removes
the need for the MCB and Mach Lever for the F110. The lack of such a system in
the F-14A controlling its TF30s is one of the reasons for them being deemed less
reliable than the F110s.

In case of a failure in the AFTC the MEC (Main engine control) is capable of
assuming control of the engines to provide a fall-back, mechanical control. The
normal mode, AFTC, is the primary mode (PRI) and called as such while the
fall-back MEC is the secondary (SEC) mode. The selection of primary or secondary
is automatic in case of a failure in the AFTC but can also be manually selected.
Of note is that in secondary mode the engine nozzles are fully closed and
disabled in addition to the afterburners being disabled with a corresponding
loss of engine performance.

In addition both engines also drive separate fuel, hydraulic and electric
generators to create redundancy.

> 💡 The main difference between the TF30 and F110 engines (apart from lesser
> thrust in the TF30s) is that the TF30s are more sensitive to the quality of
> the airflow entering the compressor face. In general it is wise to avoid
> anything less than military power or afterburner while in high angle of attack
> maneuvers as well as avoiding large rudder inputs or asymmetric engine
> throttle settings. That said, the TF30s in the HB F-14A module have been
> extensively tuned using available data and SME expertise, resulting in an
> accurate modelling of an engine undeserving of its bad reputation. One
> “advantage” of the TF30’s mechanical fuel control is its high speed thrust,
> resulting in higher top speeds than the F110 can achieve. If flown within
> normal parameters, the TF30 engines behave well if a tad underpowered compared
> to the F110s.

## Throttle Controls

![throttles](../../img/general_engine_throttles-schem.jpg)

The throttles in the F-14 have detents preventing unintentional engine start and
shutdown and unintentional selection of afterburner. In addition the throttles
also controls several different systems depending on throttle position as shown
in the diagram above. The most critical of these being the fuel cutoff and
ignition systems in the respective engines.

For throttle operations there are three modes:

The manual mode is a mechanical mode in which the engines are controlled by
mechanical linkages directly from the throttles to the engines. The manual mode
is designed as a backup mode and may be inexact because of the mechanical nature
of the controls.

Boost mode is the normal mode of operation in which electrical paths control
actuators moving the same engine controls as the mechanical linkages but more
exactly and with lesser force required.

The third mode is the approach power compensator mode or the auto throttle mode
which is a system which allows for automatic throttle control for optimal
angle-of-attack during approaches.

The controls for the throttle mode are located on the inlet ramps/throttle
control panel to the side of the main throttles and allows for selection of all
three modes. The auto throttle mode is solenoid held and will revert to boost
mode if the criteria for automatic controls are not met.

To allow selection of auto mode the throttles need to be between 75 to 90% rpm,
the gear handle needs to be down and with no weight on the wheels. If these
criteria are no longer met, the throttles are manually overridden with force or
the Cage/SEAM button on the left throttle is depressed the solenoid releases the
switch and it reverts to boost.

For additional auto-throttle tune the gain of the system can be set on the inlet
ramps/throttle control panel. The settings are hot, normal or cold with hot
increasing the throttle gain (and effective thrust) and cold decreasing it.
These settings correspond to cold or hot external temperatures but should be set
according to observed throttle control.

The RATS or reduced arrestment thrust system is a system limiting engine thrust
after touchdown to limit it to levels appropriate for carrier environments. The
system is enabled by weight on either main landing gear and is disabled by
selection of afterburner on the throttles.

Finally, and implemented only for the F110-GE-400, is the asymmetric limiter,
preventing asymmetric afterburner engagement if only one afterburner lights by
keeping that afterburner at minimum afterburner thrust until the other
afterburner also lights.

## Engine and Throttle Control Switches and Indicators

![inlet](../../img/general_engine_inlet.jpg)

The inlet ramps/throttle control panel contains most other engine related
controls.

The inlet ramps/throttle control panel contains most other engine related
controls.

The **THROTTLE MODE** (<num>1</num>) switch sets throttle mode to **AUTO**,
**BOOST** or **MAN** modes respectively, with auto being spring-loaded back to
boost but held in place electrically as mentioned above.

The **THROTTLE TEMP** (<num>2</num>) switch controls the gain of the automatic
throttle system also described above.

The **INLET RAMPS** (<num>3</num>) switches enable (**AUTO**) or disable, stow
(**STOW**) the variable intake ramps.

The engine crank switch (<num>4</num>) is used to crank the engines to 20% rpm
allowing for engine start by moving the respective throttle to idle from
cut-off. The air to start the engine is sourced from an external air supply if
connected or the other engine if no external source exists. At 50% rpm the crank
switch automatically returns to off/center position. If this does not occur it
should be manually set to off to prevent damage to the air turbine starter.

The **BACK UP IGNITION** (<num>5</num>) switch enables the backup ignition
system in case of a failure in the main ignition circuits that are normally
enabled by moving the throttles out of the cut-off position.

![asym](../../img/general_engine_asym.jpg)

> 💡 F-14B only.

The **ASYM LIMITER** (<num>1</num>) on the ASYM limiter/engine mode select panel
enables or disables the asymmetric afterburner thrust limiter. Default position
is **ON** and the switch has a guard cover keeping it in that position.

The other switches on that same panel are the **ENG** (engine) **MODE SELECT**
switches (<num>2</num>), setting the left (**L ENG**) and right (**R ENG**) to
**PRI**, primary or **SEC**, secondary modes respectively.

![mcb](../../img/general_engine_mcb.jpg)

> 💡 F-14A only.

The MCB Test Panel, located in the RIO pit on the right horizontal panel, is
used to test if the MCB system functions. The **TEST** switch (<num>2</num>) set
to the **TEST** position activates the test circuit which lights the two test
lights (<num>1</num>) for the left and right engine respectively if their MCB
circuits function.

![external environment](../../img/general_engine_externalenvironment.jpg)

The **ENG/PROBE ANTI-ICE** (<num>2</num>) switch on the external environmental
control panel enables the engine anti-ice and intake ramp anti-ice mode in
addition to the various probe heaters. The **ORIDE** position enables the
system, the **AUTO** position enables the system if icing is detected and the
**OFF** position disable it.

## Engine Instrument Group (EIG), Related Indicators and Caution Lights

![instrument-group](../../img/cockpit_detail_pilot_instrument-group.jpg)

The **ENGINE INSTRUMENT GROUP** displays engine **RPM**, **TIT** (Turbine Inlet
Temperature, F-14A) or **EGT** (Exhaust Gas Temperature, F14B) and **FF** (fuel
flow) to the pilot to allow for engine monitoring.

> 💡 Pictured above are the TF30 engine indicators, F110 EIG coming soon.

![exhaust](../../img/general_engine_exhaust.jpg)

The exhaust nozzle position indicators display respective engine’s current
engine exhaust nozzle position, with zero being fully closed and full clockwise
rotation being fully open. The F-14A indicates 0 to 6 units while the F-14B
indicates 0 to 100 percent open (tens indicated on gauge).

![oil](../../img/general_engine_oil.jpg)

The oil pressure indicators display respective engine oil pressure allowing the
pilot to check that engine oil pressure is at acceptable levels.

The caution lights relevant to engine operation are located on the pilot’s
caution - advisory panel, and at the sides of the HUD.

The caution lights on the sides of the HUD are the engine stall warning lights
which flashes at a 3 Hz rate when an engine stall is detected. The warning light
on the left side of the HUD indicates an engine stall in the left engine and the
one on the opposite side the right engine. This is also combined with an audio
warning, a modulated tone at 320 Hz.

Below the left engine stall warning light is, amongst others, the **AUTO THROT**
(auto throttle) caution light which illuminates for 10 seconds when the auto
throttle system is disengaged by other means than the throttle mode switch.

On the main caution - advisory panel the relevant engine caution and warnings
lights are:

- **INLET ICE:** Caution light indicating ice detection on the detector in the
  left engine inlet.
- **L & R INLET:** Caution lights indicating failure in AICS for respective
  variable intake system.
- **OIL PRESS:** Caution light indicating low oil pressure in either engine.
- **BLEED DUCT:** Caution light indicating hot air leakage in either engine.
- **L & R RAMPS:** Caution lights indicating respective engine intake ramp not
  being locked into position when supposed to.
- **L & R GEN:** Caution lights indicating that respective engine generator is
  inoperative.
- **L & R OIL HOT:** Caution lights indicating that respective engine oil is too
  hot.
- **L & R FUEL PRES:** Caution lights indicating engine fuel pressure below 9
  psi in respective engine fuel boost pump.

F-14A TF30-P-414A only lights:

- **L & R OVSP/VALVE:** Caution lights indicating engine starter system
  malfunction or N1 rotor over-speed in respective engine.

F-14B F110-GE-400 only lights:

- **START VALVE:** Caution light indicating that the starter valve is open.
  Control engine crank position if lit after engine start completion.
- **L & R ENG SEC:** Caution lights indicating that respective engine is
  operating in secondary mode.
- **RATS:** Caution light indicating that RATS (reduced arrestment thrust
  system) is enabled.

> 💡 F-14A specific lights not yet implemented.
