# Left Side Console

## G-Valve Button

![g-valve](../../img/cockpit_detail_rio_g-valve.jpg)

Pressed to test inflation of g-suit.

## Oxygen-Vent Airflow Control Panel

![oxygen-vent](../../img/cockpit_detail_rio_oxygen-vent.jpg)

Controls ventilation airflow to pressure suit or seat cushions and oxygen to RIO
mask.

| No. | Control           | Function                                                                                        |
| --- | ----------------- | ----------------------------------------------------------------------------------------------- |
| 1   | VENT AIRFLOW dial | Used to control airflow through the pressure suit or seat cushions if no pressure suit is worn. |
| 2   | OXYGEN switch     | Switch with ON/OFF positions. Controls oxygen flow to the mask.                                 |

## Data Stowage Compartment

![data stowage](../../img/cockpit_detail_rio_datastowage.jpg)

The data stowage panel is a small compartment for equipment storage and mission
briefing materials etc.

## TACAN Control Panel

![tacan](../../img/cockpit_detail_rio_tacan.jpg)

TACAN control panel letting the RIO control TACAN if in command of it.

| No. | Control/Indicator  | Function                                                                                           |
| --- | ------------------ | -------------------------------------------------------------------------------------------------- |
| 1   | Dual rotary switch | Outer dial selects first two digits and inner dial selects last digit for TACAN channel selection. |
| 2   | GO & NO-GO lights  | Lights indicating result of TACAN BIT.                                                             |
| 3   | BIT button         | Button initiating TACAN BIT.                                                                       |
| 4   | MODE switches      | Switches mode for TACAN operation and selects X or Y channels. INVERSE mode not functional.        |
| 5   | VOL knob           | Volume control knob for TACAN audio to RIO.                                                        |
| 6   | Mode knob          | Selects TACAN mode.                                                                                |

The following modes are available:

- OFF - TACAN is off.
- REC - Receive only.
- T/R - Transmit and receive, enables range readout.
- A/A - Air to air TACAN mode.
- BCN - Beacon TACAN mode.

> 💡 Beacon mode is not functional.

## Communication/TACAN Command Panel

![Panel](../../img/cockpit_detail_rio_comtac.jpg)

Panel controlling ICS radio settings and crewmember in control of TACAN.

| No. | Control/Indicator  | Function                                                                                                                         |
| --- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | XMTR SEL switch    | Selects which VHF/UHF radio the RIO PTT keys.                                                                                    |
| 2   | V/UHF 2 ANT switch | Selects which antenna the V/UHF 2 uses.                                                                                          |
| 3   | TACAN CMD switch   | Sets crewmember in command of the TACAN. Also indicates current setting.                                                         |
| 4   | UHF 1 VOL knob     | Volume knob controlling RIO headset volume of UHF 1 audio.                                                                       |
| 5   | KY MODE switch     | Functional only with KY-58 installed. The simulated Tomcat variant is equipped with the KY-28, so this switch is non-functional. |

### XMTR SEL Switch

Selects which VHF/UHF radio the RIO PTT keys.

- UHF 1 - Selects the ARC-159 UHF radio.
- BOTH - Selects both radios.
- V/UHF 2 - Selects the ARC-182 VHF/UHF radio.

### V/UHF 2 ANT Switch

Selects which antenna the V/UHF 2 uses.

- UPR - Selects the upper antenna.
- LWR - Selects the lower antenna.

## V/UHF 2 (AN/ARC-182) Radio

![arc-182](../../img/cockpit_detail_rio_arc-182.jpg)

V/UHF radio 2. Radio and controls.

| No. | Control/Indicator         | Function                                                                                    |
| --- | ------------------------- | ------------------------------------------------------------------------------------------- |
| 1   | VOL knob                  | Controls volume of V/UHF 2 audio to RIO headset.                                            |
| 2   | SQL switch                | ON/OFF switch enabling squelch.                                                             |
| 3   | Frequency select switches | Toggle switches selecting set frequency.                                                    |
| 4   | FREQ/(CHAN) display       | Readout display showing selected frequency or channel.                                      |
| 5   | UHF switch                | Selector switch selecting modulation in use. Operational in the 225.000 to 399.00 MHz band. |
| 6   | BRT knob                  | Knob controlling display brightness.                                                        |
| 7   | MODE knob                 | MODE selector knob controlling V/UHF 2 radio mode.                                          |
| 8   | Frequency mode knob       | Outer dial on the knob, selects frequency mode.                                             |
| 9   | CHAN SEL knob             | Inner dial on the knob, selects preset channel to use.                                      |

> 💡 Have Quick anti-jam functionality is not implemented in DCS.

## KY-28 Control Panel

![ky-28](../../img/cockpit_detail_rio_ky-28.jpg)

| No. | Control             | Function                                        |
| --- | ------------------- | ----------------------------------------------- |
| 1   | ZEROIZE switch      | Switch/guard used to zeroize KY-28.             |
| 2   | Power-mode switch   | Switch selecting KY-28 mode of operation.       |
| 3   | Radio select switch | Switch selecting which radio to use with KY-28. |

## Radar Beacon Control Panel

![beacon](../../img/cockpit_detail_rio_beacon.jpg)

Panel controlling AN/APN-154 radar beacon.

| No. | Control/Indicator | Function                                                                                                                                                                                                                                                                     |
| --- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | MODE selector     | Selector switch controlling beacon mode of operation.                                                                                                                                                                                                                        |
| 2   | ACLS TEST button  | Button with green light used to indicate operation or test. When pressed with MODE in ACLS illumination indicates a successful test. The light also flashes when detecting an AN/SPN-42 radar sweeping past and illuminates when that radar has locked on for ACLS guidance. |
| 3   | PWR switch        | Switch controlling beacon power.                                                                                                                                                                                                                                             |

### Radar Beacon Mode Selector

Selector switch controlling beacon mode of operation.

- SINGLE - Enables beacon response to single pulse codes.
- DOUBLE - Enables beacon response to set double pulse code.
- ACLS - Enables augmenter operation for ACLS. Required for CATCC radar lockon
  for ACLS.

### Radar Beacon Power Switch

Switch controlling beacon power.

- PWR - Enables beacon and all replies depending on MODE selector.
- STBY - Used to warmup system, also enables ACLS replies if the MODE selector
  is set to ACLS.
- OFF - Beacon off.

## Liquid Cooling Control Panel

![liquid cooling](../../img/cockpit_detail_rio_liquidcooling.jpg)

LIQ COOLING switch controlling the liquid cooling system for the AWG-9 and
AIM-54. The AWG-9 circuit can be enabled independently of the AIM-54. This
switch needs to be enabled for the respective system before AWG-9 operation or
AIM-54 missile preparation.

## ICS Control Panel

![ics](../../img/cockpit_detail_rio_ics.jpg)

Control panel for ICS.

| No. | Control                  | Function                                                                    |
| --- | ------------------------ | --------------------------------------------------------------------------- |
| 1   | VOL knob                 | Volume control knob for intercommunication audio from the pilot to the RIO. |
| 2   | Amplifier selection knob | Knob selecting which amplifier to use for the RIO’s headset audio.          |
| 3   | ICS switch               | Selects ICS function.                                                       |

### Amplifier Selection Knob

Knob selecting which amplifier to use for the RIO's headset audio.

- B/U - Backup amplifier.
- NORM - Normal amplifier.
- EMER - Emergency amplifier. Uses pilot's amplifier and his volume settings.
  Disallows listening to audio only available to RIO.

### ICS Switch

Selects ICS function.

- RADIO OVERRIDE - Makes ICS audio override radio audio.
- HOT MIC - Allows talking to the pilot without pressing the PTT. Also allows
  the groundcrew to talk to the crew via the external interphone.
- COLD MIC - Allows talking to the pilot only while the PTT is pressed.

## Eject Command Lever

![eject command](../../img/cockpit_detail_rio_ejectcommand.jpg)

A pilot initiated ejection will always eject both crew members. The EJECT CMD
lever controls what happens when the RIO ejects: In PILOT mode (lever forward),
only the RIO will be ejected. In MCO mode, both pilot and RIO initiated ejection
will eject both crew members.

## Sensor Control Panel

![radar ir control](../../img/cockpit_detail_rio_radarircontrol.jpg)

Control panel for AWG-9 scan settings, the TCS, and the airborne video tape
recorder.

| No. | Control/Indicator  | Function                                                                                 |
| --- | ------------------ | ---------------------------------------------------------------------------------------- |
| 1   | STAB switch        | Selector switch controlling ground stabilization of the radar.                           |
| 2   | AZ CTR knob        | Azimuth control knob selecting the center of azimuth scan area.                          |
| 3   | EL CTR knob        | Elevation control knob selecting the center of elevation scan area.                      |
| 4   | VSL switch         | Selector switch spring-loaded to center which enables VSL. VSL HI or LO can be selected. |
| 5   | AZ SCAN knob       | Azimuth scan knob selecting azimuth scan volume.                                         |
| 6   | EL BARS knob       | Elevation bar knob selecting the number of bars to scan in elevation.                    |
| 7   | TCS TRIM knobs     | Trim knobs used to calibrate TCS video in azimuth and elevation.                         |
| 8   | SLAVE switch       | Selector switch selecting which sensor is slaved to the other.                           |
| 9   | ACQ switch         | Selector switch selecting acquisition mode for the TCS. AUTO, MAN or AUTO SRCH.          |
| 10  | FOV switch         | Selector switch selecting field of view for the TCS, WIDE or NAR (narrow).               |
| 11  | MODE knob          | Knob controlling what the AVTR records.                                                  |
| 12  | MIN REMAIN display | Counter showing minutes remaining for the AVTR.                                          |
| 13  | RECORD switch      | Selector switch controlling the AVTR. OFF/STBY/ON.                                       |
| 14  | Indicator lights   | Lights indicating AVTR operation. STBY, EOT (end of tape), and REC.                      |

## Computer Address Panel

![cap](../../img/cockpit_detail_rio_cap.jpg)

The CAP is used to enter data into the WCS. The MESSAGE indicator drum and
buttons work similarly to the buttons on MFDs on newer aircraft.

| No. | Control/Indicator          | Function                                                                       |
| --- | -------------------------- | ------------------------------------------------------------------------------ |
| 1   | CLEAR button               | Button clearing current TID buffer without inserting entered data.             |
| 2   | ENTER button               | Button inserting current data from TID buffer into the WCS.                    |
| 3   | Prefix & Numerical buttons | Numerical buttons with additional prefix selection functionality.              |
| 4   | MESSAGE button switches    | Buttons used to select functions from the MESSAGE drum.                        |
| 5   | MESSAGE indicator drum     | Indicator drum used to indicate currently available MESSAGE functionality.     |
| 6   | PRGM RESTRT button         | Button used to restart the program running in the WCS.                         |
| 7   | CATEGORY knob              | Selector knob selecting current category in use on the MESSAGE indicator drum. |
| 8   | TUNE DSBL                  | Non-functional.                                                                |

> 💡 All of the buttons have indicator lights indicating operation depending on
> function.
