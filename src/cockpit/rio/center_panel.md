# Center Panel

## Chaff/Flare Dispense Switches

![CM Hats](../../img/cockpit_detail_rio_cmhats.jpg)

Two countermeasure switch hats (<num>1</num> and <num>2</num>) are located on the RIO center
handhold and are used to initiate release of defensive countermeasures.

The switches are functionally mirrored.

- **Up** - Initiates a single chaff release.
- **Down** - Initiates the selected chaff release program.
- **Inboard** - Initiates the selected jammer release program.
- **Outboard** - Initiates the selected flare release program.

## Detail Data Display Panel

![DDD](../../img/cockpit_detail_rio_DDD.jpg)

The Detail Data Display (DDD) panel provides primary radar control and display functions for the
AWG-9 weapon system.

### Target Size Switch

The TGTS switch (<num>1</num>) selects target size used for missile launch zone calculation, WCS
tracking logic, and missile autopilot calculations.

### Mainlobe Clutter Switch

The MLC switch (<num>2</num>) selects mainlobe clutter processing mode.

### Automatic Gain Control Switch

The AGC switch (<num>3</num>) controls AGC response speed.

This function is currently non-functional in DCS.

### Parametric Amplification Switch

The PARAMP switch (<num>4</num>) controls parametric amplification.

Currently non-functional in DCS.

### Pulse Video Control

The PULSE VIDEO knob (<num>5</num>) adjusts the strength of pulse video displayed on the DDD.

This control has no effect on pulse-doppler video.

### Radar Track Indicator Lights

The radar track indicator lights (<num>6</num>) indicate tracking status during STT operation.

- **ANT TRK** - Radar is tracking target angle.
- **RDROT** - Target is within range or rate gate and being tracked.
- **JAT** - Radar is tracking a jamming source angle.
- **IROT** - Indicates TCS angle tracking. Originally used for IRST in early F-14A variants.

### Range Display Drum

The RANGE display (<num>7</num>) is a rotary drum indicating the currently selected radar range
scale.

The display may be blank when no range scale is applicable.

### Range Selection Buttons

The RANGE buttons (<num>8</num>) select the desired radar range scale.

### Brightness Control Knob

The BRIGHT knob (<num>9</num>) controls DDD brightness through a polarized filter mounted in front
of the display.

### IR Audio Threshold Knob

The IR AUDIO THRLD knob (<num>10</num>) sets infrared audio threshold.

This function is non-functional when using the TCS.

### IR Audio Volume Knob

The IR AUDIO VOL knob (<num>11</num>) controls infrared audio volume.

Non-functional with TCS.

### IR Gain Knob

The IR GAIN knob (<num>12</num>) adjusts infrared gain.

Non-functional with TCS.

### Transmitter Channel Wheel

The XMTR CHAN wheel (<num>13</num>) selects the AWG-9 operating frequency.

Currently non-functional in DCS.

### Missile Channel Wheel

The MSL CHAN wheel (<num>14</num>) selects the missile guidance channel used by AIM-7 or AIM-54.

Currently non-functional in DCS.

### Display Selection Buttons

The DISPLAY buttons (<num>15</num>) control which radar elements are displayed on the DDD.

The IR button is non-functional with TCS.

### WCS Mode Buttons

The WCS MODE buttons (<num>16</num>) select the current AWG-9 operating mode.

### WCS Mode Display

The WCS MODE display (<num>17</num>) is a rotary drum showing the active WCS mode.

### Closing Velocity Scale Switch

The Vc switch (<num>18</num>) selects closing velocity scale used on the DDD in pulse-doppler modes.

### Erase Control Knob

The ERASE knob (<num>19</num>) adjusts the intensity of the erase beam, thereby controlling how
rapidly radar returns fade from the display.

### Pulse Gain Control

The PULSE GAIN knob (<num>20</num>) controls radar gain in pulse mode.

Normally left in the detent position unless adjustment is required due to clutter or jamming.

### Aspect Switch

The ASPECT switch (<num>21</num>) selects doppler filter rate regions and pulse tracking method.

- Controls expected target aspect.
- Selects edge or centroid tracking in pulse mode.

### Elevation Indicator

The EL indicator (<num>22</num>) displays sensor elevation information.

- Left needle - Actual radar antenna elevation.
- Right needle - Commanded radar elevation when RDR is selected on the HCU, or TCS elevation when
  IR/TV is selected.

### Counter-Countermeasure Mode Buttons

The CCM MODES buttons (<num>23</num>) configure AWG-9 counter-jamming behavior.

Currently non-functional in DCS.

### Jam/Jet Threshold Knob

The JAM/JET knob (<num>24</num>) sets the signal threshold at which returns are classified as
jamming targets.

Currently non-functional in DCS.

### ACM Threshold Knob

The ACM THRLD knob (<num>25</num>) controls radar sensitivity at close range.

Normally left in the detent position, as automatic logic manages this function.

### Pulse-Doppler Threshold Knobs

The PD THRLD knobs (<num>26</num>) set pulse-doppler video thresholds for the display regions:

- CLEAR - Upper half of the DDD.
- CLUTTER - Lower half of the DDD.

### DDD Radar Display

The DDD radar display (<num>27</num>) is the primary AWG-9 radar presentation surface.
