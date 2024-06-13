# Right Vertical Console

> 🚧 TODO: Correct notes

## Arresting Hook Panel

![Hook Panel](../../img//hook.png)


### HOOK handle

Arresting hook handle, selects arresting hook position.

- **UP** - Electrically actuates hydraulic retraction of the hook and locks it in the uplock.
- **DOWN** - Electrically releases hydraulic pressure allowing hook to extend via dashpot pressure and gravity.
- **EMERG DOWN** - When handle is pulled and twisted counter-clockwise the hook is mechanically released for extension.

### Hook transition light

Lights when hook position does not correspond to handle position. Will not turn off until fully extended and may remain illuminated when lowered at high speeds due to hook blowback.

### Rounds Remaining Counter

Rounds remaining indicator for M-61A1 gun. Counts down from 676 but can be reset to desired readout with the knob on the right side.

## Displays Control Panel

![Displays Panel](../../img//displays.png)

> **Note:** Image shows an F-14A with AN/ALR-45 having a third option on the HSD MODE and an ECM ORIDE which are not present in aircraft with the AN/ALR-67.

Control panel for front cockpit displays.


### STEERING CMD selectors

Selects current source for steering commands. Selectors are mutually exclusive and turn to indicate the selected option.

- **TACAN** - Selects TACAN as steering command source.
- **DEST** - Selects RIO set waypoint as steering command source.
- **AWL/PCD** - All-weather landing/precision course direction, selects glideslope guidance (ILS/ACLS) for landing or PCD for air-to-ground engagement directions as steering command source.
- **VEC** - Vector, selects data link deviation steering as steering command source.
- **MAN** - Manual, selects manually selected course and heading as steering command source.

### MODE selectors

Selects display mode. Selectors are mutually exclusive and turn to indicate selected mode.

- **T.O.** - Selects takeoff mode.
- **CRUISE** - Selects cruise mode.
- **A/A** - Selects air-to-air mode.
- **A/G** - Selects air-to-ground mode.
- **LDG** - Selects landing mode.

### HUD DECLUTTER switch

Selects declutter mode for HUD.

### HUD AWL switch

Selects which AWL information to display on HUD.

- **ILS** - Selects ILS as source for AWL information.
- **ACL** - Selects ACL as source for AWL information.

### VDI MODE switch

Selects what to display on VDI.

- **TV** - Displays video from TCS or LANTIRN on VDI.
- **NORM** - Displays normal VDI display.

### VDI AWL switch

Selects which AWL information to display on VDI.

- **ILS** - Selects ILS as source for AWL information.
- **ACL** - Selects ACL as source for AWL information.

### HSD MODE switch

Selects what to display on HSD.

- **NAV** - Navigational display, shows steering information depending on selected steering command source.
- **TID** - Display repeating the RIO TID information. If RIO has TID set to TV the screen will be blank.
- **ECM** - Display ECM information from AN/ALR-45 and AN/ALR-50. (F-14A with AN/ALR-45 only.)

### POWER switches

Power switches for VDI, HUD, and HSD/ECMD.

### PITCH LAD BRT knob

Controls brightness of pitch ladder on HUD.

### HSD ECM ORIDE switch

Sets if the ECM is allowed to override the current display on the HSD if a threat is detected. ORIDE allows override and OFF disables it. Only present in aircraft with AN/ALR-45.


## Elevation Lead Panel

![Gun Elevation](../../img//gunelevation.png)

Used to set gun elevation lead in mils for the manual A/A and A/G gun modes. Limits are -263 and +87 mils.
