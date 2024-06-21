# ACM Modes

> 🚧 TODO: Add imagery to show to controls that are being used.

The AN/AWG-9 has three distinct ACM acquisition modes. Pilot lockon mode (PLM), vertical scan lockon
(VSL) and manual rapid lockon (MRL).

The ACM modes are listed in priority order, the different modes overriding other modes lower in the
prioritization. This means that PLM always overrides VSL and lower modes and VSL overrides PAL and
lower modes but not PLM and so on.

All of the modes can be exited by the RIO selecting half-action and release on the HCU except PLM
which will be in effect until the pilot releases the PLM button.

## Pilot Lockon Mode (PLM)

![PLM](../../img/plm.png)

The PLM is the ACM mode with the highest priority, it always overrides any other radar mode and is
enabled when the pilot presses the PLM button on the front of the right throttle. Depression of that
button commands the antenna to the armament datum line (ADL) and causes it to lock onto the first
target seen out to 5 NM.

Thus the procedure to use PLM is for the pilot to fly the ADL marker on the HUD over the target and
then press and hold the PLM button until lockon occurs. The PLM continues until a target is detected
and transition to pulse STT occurs or the PLM button is released making the radar transition to
pulse search instead.

## Vertical Scan Lockon (VSL)

![VSL](../../img/vsl.png)

The VSL mode is enabled by the pilot or the RIO and is used to acquire a target at own aircraft's
current heading from an elevation of -15° to +55°. The RIO can use the VSL switch on the sensor
control panel in the RIO cockpit. Two submodes are available by placing the switch into either VSL
HI (high) or VSL LO (low) and releasing it back to center. The pilot can enable VSL HI or LO by
selecting UP or DN respectively on the target designate switch when not in A/G mode.

This commands the antenna to start a volume 5° wide in a circular fashion. If VSL HI is commanded
the vertical area covered is from +15° to +55° and if VSL LO is commanded the area covered is from
-15° to +25°. VSL is indicated on the HUD by the diamond moving with antenna line of sight
indicating its current position.

When a target is detected within 5 NM the radar transitions into pulse STT, otherwise it continues
in VSL until another mode is selected.

## Pilot Automatic Lockon (PAL)

PAL is enabled by the pilot selecting DES on the target designate switch when not in A/G mode.

PAL commands the antenna to an 8-bar ±20° scan pattern locking onto the first target detected out to
15 NM. This mode is indicated by the diamond on the HUD following current antenna line of sight.

## Manual Rapid Lockon (MRL)

![MRL](../../img/mrl.png)

The manual rapid lockon (MRL) mode allows the RIO to quickly acquire a target within the antenna
limits out to 5 NM. When the MRL button on the right side of the HCU stick is depressed it commands
the radar to start a one-bar supersearch pattern out to 5 NM.

The HCU stick controls the supersearch pattern in azimuth and elevation (left/right controlling
azimuth and up/down controlling elevation). The DDD displays a normal supersearch pattern in 5 NM
scale and additionally two tick marks are shown at the edge of the scan pattern indicating current
elevation.

When the target is visible the RIO commands full-action to acquire the target and transfer to pulse
STT. If only half-action is commanded after entering into MRL and then released the radar transfers
back to pulse search.
