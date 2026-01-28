# Center Console

## Tactical Information Display (TID)

![tid](../../img/cockpit_detail_rio_tid.jpg)

The Tactical Information Display (TID) presents tactical, navigation, and data link information to
the RIO and provides associated navigation and display controls.

### INS Status Indicator

The INS status indicator (<num>1</num>) displays inertial navigation system alignment status.

- STBY — Power applied but alignment not complete.
- READY — Minimum alignment sufficient for AIM-54 launch criteria.

Both lights extinguish when an INS mode is selected. The indicator may also display fault
conditions.

### Contrast Knob

The CONTRAST knob (<num>2</num>) adjusts contrast of TCS video displayed on the TID.

### Data Readout Drum

The DATA READOUT drum (<num>3</num>) indicates the data source currently shown on the TID
alphanumeric readouts.

The drum may be blank for sources that do not generate textual data.

### Brightness Knob

The BRIGHT knob (<num>4</num>) controls overall TID display brightness.

### Steering Indicator Drum

The STEERING indicator drum (<num>5</num>) displays the steering information currently being
provided to the pilot.

### Destination Selector

The DEST selector (<num>6</num>) selects the destination used for navigation in destination mode.

### Collision Steering Button

The CLSN button (<num>7</num>) selects collision steering toward a tracked target or the TWS
centroid.

### Display Selection Buttons

The DISPLAY buttons (<num>8</num>) control which elements are shown on the TID.

Each button includes an indicator light showing current selection state.

Available display selections include:

- RID DISABLE — Not implemented.
- ALT NUM — Toggles altitude numerics next to track symbols.
- SYM ELEM — Toggles supplementary track symbology. When deselected, only the track symbol dot is
  displayed.
- DATA LINK — Toggles display of all data link tracks.
- JAM STROBE — Toggles display of jamming strobes.
- NON-ATTK — Toggles display of non-attackable tracks.
- VEL VECTOR — Toggles display of velocity vectors.
- LAUNCH ZONE — Toggles missile launch zone display. Replaces velocity vectors when applicable.
  Automatically enabled by the WCS 60 seconds prior to maximum missile launch range.

### Range Selector

The RANGE selector (<num>9</num>) selects the TID display scale.

The selected range corresponds to the diameter distance represented on the display.

### TID Mode Selector

The TID MODE selector (<num>10</num>) selects the current TID presentation mode.

### Track Hold Button

The TRACK HOLD button (<num>11</num>) extends the time before a radar track is dropped after the
last observation.

When selected, track retention time is increased to two minutes. Normal retention time is
approximately 14 seconds.

### Navigation Mode Selector

The NAV MODE selector (<num>12</num>) selects navigation reference systems and controls INS
alignment and operating mode.

## Hand Control Unit (HCU)

![hcu](../../img/cockpit_detail_rio_hcu.jpg)

The hand control unit is the primary control stick for radar and TCS operation.

### IR/TV Switch

The IR/TV switch (<num>1</num>) controls TCS power.

- OFF/STBY — Applies power without full operation.
- ON — Enables full TCS operation.

### IR/TV Overtemperature Indicator

The IR/TV overtemp indicator (<num>2</num>) illuminates when an overtemperature condition exists
within the TCS.

### Light Test Button

The LIGHT TEST button (<num>3</num>) initiates a test of all AWG-9 indicator lights.

### Power Reset Indicator

The PWR RESET indicator (<num>4</num>) illuminates when one or more secondary power supplies are
inoperative.

### Power Reset Button

The PWR RESET button (<num>5</num>) attempts to restore inoperative secondary power supplies.

If the fault condition persists, affected supplies will remain inoperative.

### WCS Status Indicator

The WCS indicator (<num>6</num>) illuminates under the following conditions:

- STBY or XMT selected while radar warmup is incomplete.
- XMT selected while radar transmission remains inhibited.

### WCS Power Switch

The WCS switch (<num>7</num>) controls weapon control system power.

- STBY — Applies power to WCS and begins radar warmup without transmission.
- XMT — Enables radar transmission when warmup is complete.

Display warmup time is approximately 30 seconds. Radar warmup time is approximately three minutes.

### Manual Rapid Lockon Button

The MRL button (<num>8</num>) selects manual rapid lock-on mode.

This mode overrides all other radar operating modes except PLM and VSL.

### Offset Button

The OFFSET button (<num>9</num>) offsets the TID display to the currently hooked location.

### Antenna Elevation Thumbwheel

The ELEV thumbwheel (<num>10</num>) fine-tunes radar antenna elevation during STT lock-on
acquisition.

### HCU Trigger

The HCU trigger (<num>11</num>) is a two-stage trigger used to command various WCS functions
depending on selected mode.

- First detent — HALF ACTION.
- Second detent — FULL ACTION.

Functions include target acquisition and symbol hook.

### Hand Control Function Buttons

The hand control function buttons (<num>12</num>) select the active control mode of the HCU stick.

The buttons are mutually exclusive and light up when selected.

Available functions are:

- IR/TV — Controls TCS azimuth, elevation, and tracking. Enables display of TCS elevation on the
  right elevation indicator on the DDD.
- RDR — Controls radar antenna elevation and STT acquisition or return to search. Displays commanded
  radar antenna elevation on the DDD.
- DDD CURSOR — Controls DDD cursor for marking geographic positions in pulse radar mode.
- TID CURSOR — Controls the TID cursor used to hook symbols on the TID.
