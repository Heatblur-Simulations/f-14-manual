# TACAN System (AN/ARN-84)

The TACAN system indicates a slant range accurate to within 0.1 NM and a bearing
of 0.5° to any surface station selected. Slant range to airborne stations is
provided with an air-to-air (A/A) mode. The operating range is approximately 300
NM, if line of sight is given.

The system offers 126 operating channels in each of 2 modes. Receiving
frequencies for surface-to-air operation are 962 to 1024 MHz and 1151 to 1213
MHz, for air-to-air operations, the frequencies are from 1025 to 1150 MHz. The
TACAN uses two antennas that automatically switch in a 6-second interval until a
threshold signal is received. Note that the TACAN can take up to 2 minutes to
warm up when turned on for the first time after a cold start.

## TACAN Modes

The system is capable of receiving valid signals from a ground station
simultaneously with 99 other aircraft in either REC or T/R mode.

In the A/A mode, the system is capable of transponding with each of five
cooperating aircraft, indicating slant range information to each, but the system
will interrogate and lock on to only one at a time.

Both pilot and RIO share Identical TACAN control panels on the left consoles.
Individual TACAN CMD buttons on both the pilot and RIO left consoles provide
transfer of TACAN control between pilot and RIO. Control of TACAN is indicated
by a flip-flop indicator in each cockpit showing PLT (pilot) or RIO. Either
crewman may adjust the audio level of the identification signal. For TACAN panel
description see TACAN Control Panel.

## TACAN Displays

Bearing and distance to a TACAN station are displayed on the BDHI, the HSD, and
the multiple display indicator. Deviation to the TACAN station is displayed on
the HUD and VDI (VDIG) and the HSD and multiple display indicator.

The MDIG displays TACAN bearing marker, deviation ticks, range-to-TACAN station,
and course. The HUD and VDI display provide a TACAN deviation bar, which is
coded, on the HUD: solid line - TO station, dashed line - FROM station and on
the VDI: bright bar - TO station, dark bar - FROM station.

TACAN information is also displayed on both the pilot’s and RIO’s identical
BDHI. The bearing and distance functions of the BDHI come alive when the TACAN
mode select switch is set to T/R. In the REC and T/R modes, magnetic bearings
are displayed by the No.2 (large) needle, which unlocks and enters a search mode
(spins) whenever bearing information is unreliable.

Range information received in T/R or A/A mode is displayed in nautical miles on
the distance counter. An OFF flag covers the counter window if the range
information is unreliable or not available. TACAN information is also displayed
on the pilot HSD, HUD, and VDI and on the RIO multiple display indicator in
other navigation modes.

## TACAN Operation

If after approximately 2 minutes warm up time the range and bearing indications
continue to search when a reliable station is selected, check circuit breakers
should or select another station. The system has a memory feature so that
tracking will not be interrupted by momentary disruption of received signals.

A range signal that is lost and has been previously tracked for at least 10
seconds, will be sustained by memory for 9 to 12 seconds. A bearing signal that
has been tracked for at least 15 seconds will be retained for 3 to 8 seconds
after signal loss. This allows for automatic antenna switching without a loss of
TACAN displays.

During the minimum warmup time, failure indications and erroneous readouts
should be disregarded and self-test results may be inconclusive.

## TACAN BIT

The TACAN system has a built-in test that continuously monitors the TACAN
functionality and provides an interruptive self-test. To start a 22-second
interruptive self-test, use the momentary button (BIT switch) and monitor the GO
(green) and NO-GO (amber) status lights.

> 💡 A BIT performed on TACAN stations within 2 NM can give an invalid
> indication. If a TCN acronym or NO-GO response is observed while tuned to a
> local station, along with normal TACAN azimuth and range, the acronym and/or
> the NO-GO should be disregarded.

The normal BIT sequence is as follows:

1. Set MODE switch to T/R, allow 2 minutes for warmup.
2. Press and hold BIT button.
3. Both GO and NO-GO lights illuminate (light test).
4. BDHI range OFF flag appears.
5. BDHI bearing needle rotates counterclockwise.
6. Release button; both lights go out (self-test starts).
7. After 5 to 6 seconds, BDHI and HSD range reads 2 NM, BDHI and HSD bearing
   reads 4° (identify TACAN station).
8. After 22 seconds, if good, green GO light illuminates, if bad, amber NO-GO
   light illuminates.
