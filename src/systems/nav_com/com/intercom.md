# ICS - Intercommunications System

> 🚧 TODO: Redo table/convert.

The ICS provides normal, backup, or emergency communications between crewmembers. It also combines
and amplifies audio signals received from other electronic receiving equipment (ECM, Sidewinder
tone, IFF/SIF, radar altimeter, and voice radios, etc.). Identical ICS control panels are on the
pilot and RIO left side consoles. The ICS consists of four amplifiers, two at each cockpit station,
which permit duplex operation during normal operation. If one amplifier fails, it may be bypassed by
selecting either the B/U (backup) or EMER (emergency) position on the ICS control panel. This
permits continued ICS operation.

> **Note:** If two amplifiers fail at the same station, intercommunication is impossible.

> **Note 2:** By selecting EMER on the respective ICS control panel and using the other crewmember’s
> amplifier, you can listen in on audio normally only available at that station (like SW-tone or
> ALQ-126 PRF) but you lose the ability to control the volume of the audio you listen to.

The external interphone connection is in the nose-wheel well. When the pilot ICS switch is set to
HOT MIC, ground personnel can communicate with the cockpit stations. In DCS, this works through
selecting the ground crew communication menu in the DCS radio communication menu when activating ICS
PTT.

| ![throttle1](../../../img/throttle1.jpg) | ![ics2](../../../img/ics2.jpg) |
| ---------------------------------------- | ------------------------------ |

> 🚧 TODO: Table converted below to comply with linter. Double check if its correct!

The Pilot Radio ICS button allows for various intercommunication and radio operation modes. When set
to ICS, it permits intercommunication when COLD MIC is selected on the function selector, overriding
UHF/VHF communications. In the BOTH position, it keys both radios for operation, although this
function is not active in DCS. The UHF 1 position keys the ARC-159 radio, and the UHF 2 position
keys the ARC-182 radio.

The VOL control is used to control the intercommunication audio level at the specific cockpit
station where it is adjusted. The audio levels at other stations remain unaffected by changes to
this control.

The Amplifier selector has three positions: B/U (Backup), NORM (Normal), and EMER (Emergency). The
B/U position is used to bypass a faulty amplifier, utilizing a backup output amplifier at the
current station. The NORM position is for normal operation when all amplifiers are functioning
correctly. The EMER position bypasses a faulty amplifier and uses the input amplifier of the other
station, though HOT MIC is not available in this mode. It is important to note that with the front
cockpit amplifier selector switch in the EMER position, engine stall/overtemperature and Sidewinder
tones will not be available to the pilot.

The Function selector has multiple settings to manage radio and intercommunication audio. The RADIO
OVERRIDE setting attenuates noncritical radio audio to prioritize intercommunication when urgent.
The HOT MIC setting allows for intercommunication without keying, while the COLD MIC setting
requires the pilot to actuate the ICS keying switch on the inboard throttle or the RIO to actuate
the keying switch on the left footrest for intercommunication.

The RIO’s ICS button located on the left footrest permits intercommunication if COLD MIC is selected
on the function selector control, overriding UHF communication. The RIO’s MIC button, found on the
right footrest, allows for the transmission of UHF 1 or UHF 2 radios as selected on the
communications/TACAN command panel. Note the BOTH function is not active in DCS.

> **Note**: The two RIO footpedals have axis bindings in DCS to allow sim rudder pedals to trigger
> these functions.
