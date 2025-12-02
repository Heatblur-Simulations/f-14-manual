# AN/ARC-182 (V/UHF 2) Radio

> 🚧 TODO: Rework images. Rework table.

The ARC-182 radio provides multimode, multichannel, air-to-air/air-to-surface voice and tone
communications. The ARC-182 control panel is located on the RIO left console. Frequency range
extends in four bands from 30 to 88, 108 to 156, 156 to 174, and 225 to 399.975 MHz on any of 11,960
channels (separated by 25 kHz).

> 💡 The “Have Quick” anti-jam function is not implemented in DCS.

Transmission and reception are available in AM or FM bands. The modulation is selected automatically
by the radio except in the 225 to 399.975 band (toggle switch). 30 preset channels are available.
Guard frequency of each band may be monitored simultaneously with any other frequency selected. The
radio is used with the ARA-50 to provide automatic direction finding (ADF) to the transmitting
station. The ARC-182 operates with secure-voice equipment (KY-28, the KY-58 is not implemented in
DCS). Upper and lower antenna installations provide reliable line-of-sight communications to 200 NM
(depending on altitude and atmospheric conditions). A remote indicator on the pilot instrument panel
indicates the channel or frequency selected.

![arc-1821](../../../img/arc-1821.jpg)

| Control/Indicator                      | Function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **VOL control**                        | Controls volume of RIO audio for V/UHF 2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **SQL (squelch) switch**               | On/off control for radio squelch (noise-blanking when carrier is not present).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Frequency Tuning switches**          | Four frequency tuning switches are used to tune the transceiver when the mode selector switch is set to MANUAL. The left switch controls the hundreds and tens digits, the second switch controls units, the third switch controls tenths, and the right switch controls hundredths and thousandths. Forward deflection of the switch increases the numeric reading, and aft deflection decreases the numeric reading.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **FREQ/(CHAN)**                        | Displays frequency when the mode selector switch is in MAN and displays V/UHF channel when mode switch is in PRESET.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **UHF Mode switch**                    | Operational when tuned to frequencies in the 225.000 to 399.000 MHz band. AM – Selects amplitude modulation signals. Varies with atmospheric conditions, susceptible to electromagnetic interference. FM – Selects frequency modulation signals. Reduces electromagnetic interference.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **BRT control**                        | Controls brightness of radio FREQ/(CHAN) display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **MODE selector**                      | OFF – Secures VHF/UHF radio, unless the frequency mode switch is set to 243. T/R – Energizes transmitter and main receiver. T/R&G – Energizes transmitter, main, and guard receivers. DF – Provides automatic direction finding from 108 to 399.975 MHz. TEST – Indicates built-in-test (BIT) AT; displayed on FREQ/(CHAN) indicator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Frequency Mode switch (Outer Dial)** | 243 – Turns on the transceiver (takes precedence over (outer dial) operational mode control) and causes the main transceiver, and guard receiver to tune to 243.000 MHz (UHF guard frequency). All functions except VOL SQL and BAT are disabled. MAN – Allows manual selection of an operating frequency using the frequency tuning switches. The transceiver is disabled during a frequency change. G – Tunes the transceiver to the guard frequency in the band to which the radio was last tuned. PRESET – Allows selection of any one of 40 present operating frequencies with the CHAN SEL switch. The selected channel is displayed on the FREQ/(CHAN) display. Channels 31 through 40 are for Have Quick (anti-jam) use and are not implemented in DCS. READ – Displays the frequency (rather than channel) of the preset channel selected. LOAD – Automatically places the displayed frequency into the memory for the selected preset channel. |
| **CHAN SEL switch (Inner Dial)**       | Selects one of 40 preset frequency channels to use when the tuning selector switch is set to PRESET.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## AN/ARC-182 BIT (Built-in Test)

BIT isolates faults in AN/ARC-182. BIT should be started if the FREQ/(CHAN) display blanks,
indicates an erroneous readout, or the transceiver otherwise malfunctions.

Proceed as follows:

1. MODE selector - TEST.
2. BRT control- As Required.
3. BIT requires approximately 10 seconds, observe FREQ/(CHAN) display.
   - No fault is indicated by 888.888.
   - Faults are indicated by a number that identifies the module or modules at fault.

| Mode | Display | Fault     | Interpretation         |
| ---- | ------- | --------- | ---------------------- |
| RCV  | '       | RMT or RT | Select test mode       |
| XMT  | '       | LOW PWR   | Select test mode       |
| TEST | '       | RMT CTRL  | Defective control      |
| TEST | 888.888 | NONE      | RT and CTRL ok         |
| TEST | 4 6 5   | RT        | Modules 4, 5, or 6 bad |
| TEST | 0 6 1   | VSWR      | RT or antenna system   |
| TEST | 6 5 1   | FWD PWR   | RT or antenna system   |
| TEST | 1 5 7   | RT        | Modules 1, 5, or 7 bad |
| TEST | 3 3 3   | RT        | Module 3 bad           |

## AN/ARA-50 UHF Automatic Direction Finder

The UHF automatic direction finder is used with the ARC-182 radio. ADF provides relative bearings to
transmitting ground stations or other aircraft. It can receive signals on any 1 of 30 preset
channels or on any manually set frequency in the 108 to 399.975 MHz range. The system has a
line-of-sight range, varying with altitude.

The system requires a 5-minute warmup period. During the warmup time, failure indications should be
disregarded. The system uses the AS-909/ARA-48 ADF antenna. Bearing to transmitting stations is
displayed on the pilot/RIO BDHI (No. 1 needle), pilot HSD, and RIO multiple display indicator. The
ADF signal is interrupted during voice UHF transmissions.
