# Navigation & Communication

> 🚧 TODO: Add images.

The F-14’s primary navigation system is a multi-unit Carrier Aircraft Inertial Navigation System
(CAINS) designated as AN/ASN-92. An INS system measures and integrates sensed inertia forces
(acceleration) and rotational velocities to calculate aircraft position and linear velocity. A good
navigation system can precisely guide an aircraft on a route to a mission objective hundred or
thousand miles-long, and then back to the home base, safely and reliably. Such a system is even more
important when an aircraft is designed to operate over the ocean, far away from any ground-based
TACAN or visual references.

Designing an INS (IMU) is an engineering challenge, which requires consideration of such problems as
calibration, alignment, Earth’s rotational motion, inertia forces, thermal stability,
analogue-digital converters precision, all different types of corrections which have to be applied
to keep the device precise over extended time, and many more. Simulating an INS platform is very
similar - it is a complex undertaking.

At Heatblur, we decided to develop an entirely new mathematical model to simulate the AN/ASN-92 for
our F-14. We included all the potential sources of errors contributing to the final precision of the
device, and recreated the characteristic behaviour of a gimballed INS platform. The result is a set
of algorithms providing an authentic representation of the AN/ASN-92 in DCS, yet optimised to have
almost no impact on CPU performance.

The main components of the INS are the inertial measurement unit (IMU), the power supply unit and
pilot and RIO navigation controls and displays.

Although from the crew member’s point of view, the INS is used mostly for navigation, it is also
essential for proper operations of other aircraft equipment. For example, the attitude is necessary
for the radar. The attitude and the own position are required for some weapon delivery modes,
particularly for long shots. Even more distressing to the crew, a complete failure of the INS
renders the more advanced modes of weapons such as the AIM-7 and AIM-54 missiles inoperable.

The same information is used for data-link operations - when using erroneous INS data, own tracks
and targets received from cooperating aircraft will not match and result in false contacts being
displayed on the TID. These are only a few examples, and the INS data is used whenever aircraft
position or attitude is required.

Thus the inertial navigation system (INS) integrates with the AWG-9 computer (WCS computer) and the
CSDC, the computer signal data converter. Other related equipment includes the attitude and heading
reference system, central air data computer, radar altimeter, instrument landing system, and TACAN.
