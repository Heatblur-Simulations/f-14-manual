# Attitude and Heading Reference Set (AHRS)

> 🚧 TODO: Add images.

The AHRS provides backup pitch and roll information to the CSDC and WCS computer, if attitude data
from the INS is not available. At any time, the AHRS provides prime magnetic heading to the BDHI for
direct analog display and to the CSDC where it is converted to digital information for the VDIG,
MDIG, and the WCS. Additionally, the autopilot gets its heading reference from the AHRS.

> 💡 The only analog cockpit display for magnetic heading is the BDHI. The HUD, VDI, TID,
> HSD, and multiple display indicator are digital and receive their inputs from the AHRS through the
> CSDC. Thus. in case of a CSDC failure, the only magnetic heading is displayed on the BDHI.

The main assemblies of the AHRS are a two-gyro platform (vertical and directional displacement
gyros), an electronic control amplifier, a compass controller, a magnetic azimuth detector, and an
electronic compensator.

In case of an IMU failure, the CSDC automatically selects AHRS attitude information for display and
autopilot control. The directional gyro smoothens the flux valve heading signal in the SLAVED mode
or provides a direct heading reference in the DG mode. The resulting heading is transmitted to the
BDHI, the CSDC, and the WCS.

> 💡
>
> - In the INS nav mode IMU true heading is used and must be converted to magnetic heading by adding
>   or subtracting the magnetic variation to have a backup magnetic value, if needed. Under normal
>   operation, AHRS magnetic heading is used for all displays.
>
> - The AHRS is unlimited in roll but limited to 82° in pitch. If the pitch attitude exceeds ±82, it
>   will precess. A gradual precession in roll, pitch, and heading can also be expected in sustained
>   turns at slow rates (less than 6° per minute). Large roll and pitch precession errors can be
>   corrected by flying straight and level, without accelerating, and pressing and holding the HDG
>   set button on the compass controller panel. Pressing and holding this button corrects precession
>   errors at a rate of 12° per minute minimum. The HDG set button should be held for at least 3
>   minutes. Before repeating the 3-minute cycle, it should be released for at least 1 minute.

## Compass Controller Panel

Use the compass controller panel to select one of three compass modes when the AHRS is used as a
heading reference. For a description, see Compass Control Panel.

When magnetic heading references are unreliable, operate the system in the DG mode. When the
magnetic reference is reliable, operate the system in the SLAVED mode. When DG or SLAVED modes are
inoperable, the COMP mode can be used for emergencies.

> 💡 If both the IMU and the AHRS fail, pitch and roll attitude indications from the HUD,
> TID, and DDD will be removed, and the IMU and AHRS advisory lights illuminate. Select COMP mode on
> the compass controller panel to possibly restore valid magnetic heading information to the HUD,
> VDI, and HSD, the AHRS advisory lights will go off. Disregard the invalid pitch and roll attitude
> information that will be restored to the HUD and VDI.

## AHRS Operation

As a compass, the AHRS operates in three modes:

- The directional gyro (DG) mode provides a free-gyro heading reference with Earthrate correction.
- The SLAVED mode provides a gyrostabilized magnetic heading
- And the compass (COMP) mode provides an emergency magnetic heading from the compass transmitter
  only.

If the COMP mode is selected, the AFCS is automatically disengaged to prevent erratic steering
commands. The COMP mode cannot provide a sufficiently stable heading signal for AFCS operation and
should only be used for emergencies. To erect the AHRS, press and hold the HDG set button on the
compass controller (3 minutes on, 1 minute off cycle) until the needle of the synchronous indicator
is bracketing the null mark.

If nav mode is set to INS or IMU/AM, attitude displays will continue to indicate properly when the
AHRS pitch limit of 82° is exceeded, but all displays of magnetic heading will be in error and the
advisory lights may be on or off. If this is encountered, accurate and stable magnetic heading
displays on the HUD, VDI, HSD, TID, and multiple display indicator can be regained immediately by
inserting the proper MAG VAR via the computer address panel.
