# JESTER / ICEMAN SET COMMANDS (F-14B(U))

Published fixed-value commands from **10000 to 10099** for use by the mission
editor (trigger action _"X: Set command"_, see `proxy_device.lua`). Because
these use fixed values it is not necessary to rebuild `Command.h` after
adding/changing values in this range.

`SET COMMAND` can only accept numerical values `>= -1` and `<= 1`. Several
commands below encode an index into that range using the `0.XX` convention
(`0.01` = item 1, `0.99` = item 99, `1.00` = item 100).

## General / Pilot Commands

### `10000` — Enable ACM guns, air-to-air

- `1` — enables
- `0` — disables _(default)_

### `10001` — Carrier landing

- `1` — initiates the carrier landing sequence
- `0` — _(default)_

### `10002` — Ground landing

- `1` — initiates the ground landing sequence
- `0` — _(default)_

### `10003` — Case 1 recovery

- `1` — initiates a Case 1 recovery
- `0` — _(default)_

### `10004` — Pilot VSL (Vertical Scan Lock)

- `1` — commands the pilot to attempt a VSL lock
- `0` — _(default)_

### `10005` — Wings swept

- `1` — sweeps the wings
- `0` — _(default)_

### `10006` — Air-to-ground mode

- `1` — selects air-to-ground
- `0` — _(default)_

### `10007` — Parking brake

- `1` — sets the parking brake
- `0` — releases _(default)_

### `10008` — Radar weight-on-wheels (WOW)

- `1` — WOW asserted
- `0` — _(default)_

## Jester LANTIRN / Targeting

### `10009` — Jester LANTIRN auto designate

- `1` — disables Jester LANTIRN auto designate
- `0` — enables Jester LANTIRN auto designate _(default)_

### `10010` — Jester silent

- `1` — silences Jester
- `0` — Jester will talk again _(default)_

### `10011` — Jester pause

- `1` — disables (pauses) Jester
- `0` — reactivates Jester _(default)_

### `10012` — Force Jester to track a target by unit name

Special command to force Jester to track a specific target using unit name.
Since `SET COMMAND` only accepts values `>= -1` and `<= 1`, the following rule
is used:

- `0.01` — track unit named `LantirnTarget01`
- `0.02` — track unit named `LantirnTarget02` _(… continues …)_
- `0.99` — track unit named `LantirnTarget99`
- `1.00` — track unit named `LantirnTarget100`
- `0` — resume Jester state to normal operations

### `10013` — Force Jester to track a zone

Same as `10012`, but Jester tracks zones.

- `0.01` — track zone named `LantirnZone01`
- `0.02` — track zone named `LantirnZone02` _(… continues …)_
- `0.99` — track zone named `LantirnZone99`
- `1.00` — track zone named `LantirnZone100`
- `0` — resume Jester state to normal operations

> **Note:** Commands `10012` and `10013` are exclusive. When Jester is tracking
> a unit using `10012`, activating `10013` forces Jester to stop tracking that
> unit and start tracking a zone, and vice versa. Using `0` in either command
> stops tracking both units and zones.

### `10014` — Manual designate

Jester will designate manually what is under the LANTIRN cross.

## Radio / Navigation

### `10015` — Tune AN/ARC-182 to a selected channel

- Pass the value as `0.XX` where `XX` is the two-digit channel number.

### `10016` — Tune TACAN channel

Construct the value as `s0.XXXY`, where:

- `s` — optional `-` sign; use **negative** values for A/A and **positive** for
  T/R
- `XXX` — three-digit channel number (keep the leading zeroes for channels lower
  than 100)
- `Y` — `0` for X-mode, `1` for Y-mode

Examples:

- `0.0630` — channel 63X, T/R
- `-0.0081` — channel 8Y, A/A

### `10017` — DEST knob

- `0.1` — WP1
- `0.2` — WP2
- `0.3` — WP3
- `0.4` — FP
- `0.5` — IP
- `0.6` — ST
- `0.7` — HB
- `0.8` — MAN

### `10018` — Select waypoint to enter coords from a trigger zone

> 💡 This command does no action in the cockpit

- `0.1` — WP1
- `0.2` — WP2
- `0.3` — WP3
- `0.4` — FP
- `0.5` — IP
- `0.6` — ST
- `0.7` — HB
- `0.8` — MAN

### `10019` — Enter coords from trigger zone

Enter coords from a trigger zone for the waypoint selected with `10018` (if none
selected, WP1).

- `0.01` — `WaypointZone01`
- `0.02` — `WaypointZone02`
- _(… continues …)_
- `0.99` — `WaypointZone99`
- `-0.01` — `GGWZone01` _(negative values select GGW zones)_
- _(… continues …)_
- `-0.99` — `GGWZone99`

## Jester Systems

### `10020` — WCS switch

- `0.1` — OFF
- `0.2` — STBY
- `0.3` — ON
- `0.0` — return to automatic

### `10021` — Run RWR BIT

- No value parameter; runs the RWR built-in test.

### `10022` — TID range knob

- `0.1` — 25 NM
- `0.2` — 50 NM
- `0.3` — 100 NM
- `0.4` — 200 NM
- `0.5` — 400 NM
- `0.0` — return to automatic

### `10023` — Jester Eject

- Commands Jester to eject.

## Jester Radar / Air-to-Air

### `10024` — STT target

- `0.00` — stop force STT track
- `0.01` — `AirTarget01`
- `0.02` — `AirTarget02`
- _(… continues …)_
- `0.99` — `AirTarget99`

### `10025` — Break lock

- Drops the current track.

### `10033` — Radar azimuth

- Accepts `-1` to `1`.

### `10034` — Radar elevation

- Accepts `-1` to `1`.

## Jester Weapons

### `10026` — Weapon station state

Format `0.xy`:

- `x` — station number (1–8)
- `y` — state: `0` down (safe), `1` up (selected)

### `10027` — Weapon wheel option

- `0.10` — MK-81H
- `0.11` — MK-81L
- `0.12` — MK-82H
- `0.13` — MK-82L
- `0.14` — MK-83H
- `0.15` — MK-83L
- `0.16` — MK-84
- `0.17` — LAU-10
- `0.19` — CBU-59A
- `0.20` — CBU-59B
- `0.21` — CBU-59C
- `0.22` — MK-20A
- `0.23` — MK-20B
- `0.24` — MK-20C
- `0.25` — MK-45
- `0.26` — GBU-10
- `0.27` — GBU-12
- `0.28` — GBU-16
- `0.29` — GBU-24
- `0.30` — BDU-33
- `0.31` — TALD
- `0.32` — SUU-25

### `10028` — ATTK MODE knob

- `0.0` — CMPTR TGT
- `0.1` — CMPTR IP
- `0.2` — CMPTR PLT
- `0.3` — MAN

### `10029` — DLVY MODE switches

Format `0.xy`:

- `x` — `0` STP, `1` RPL
- `y` — `0` SGL, `1` PRS

### `10030` — DLVY INTERVAL

Format `0.xy`:

- `x` — first roller
- `y` — second roller

### `10031` — DLVY QTY

Format `0.xy`:

- `x` — first roller
- `y` — second roller

### `10032` — MSL launch

- Launches the selected missile.

## Jester LANTIRN Zoom

### `10035` — LANTIRN zoom level

- `0` — auto
- `0.33` — wide
- `0.66` — narrow
- `1.0` — expanded

## Jester Backup (BU) Waypoint / Nav Commands

### `10036` — Create waypoint from trigger zone

Creates a waypoint from a trigger zone (zone selected first by `10019`, or
target with `10046`).

- `0.01` – `0.99` — specific waypoint ID (e.g. `0.03` = wpt 3)
- `0` — last waypoint created by this command
- `>= 1` — new waypoint

> Also auto-selects the created/updated waypoint (as if `10037` was called), so
> a following command operates on it without an explicit select.

### `10037` — Select waypoint

Selects which waypoint Jester should perform the following operations on. Do
this first, then issue the other commands.

- `0.01` — wpt 1
- `0.25` — wpt 25 _(etc.)_
- `0.0` — special: the most recently created waypoint through `10036`

### `10038` — Set special designation

Sets the special designation for the selected waypoint.

- `0.0` — clear SD
- `0.1` — destination
- `0.2` — surface target
- `0.3` — fixed point
- `0.4` — initial point
- `0.5` — HA
- `0.6` — DP
- `-0.1` – `-0.7` — P1–P7

### `10039` — Transfer JDAM station

Transfers selected wpt coordinates to a station.

- `0.0` — next selected
- `0.3` — station 3
- `0.4` — station 4
- `0.5` — station 5
- `0.6` — station 6

### `10040` — Set LTS

- `0` — remove LTS
- `1` — set LTS

### `10041` — Hook selected waypoint

- `1.0` — hook selected wp
- `0.0` — unhook (if selected)

### `10042` — Direct-to selected waypoint

- `1.0` — direct to selected wp

### `10043` — Steering mode

- `0.0` — dest
- `0.33` — auto
- `0.66` — ofly
- `1.0` — man

### `10044` — BDHI mode

- `0.0` — HUD sync
- `0.1` — FP WP (selected with `10037`)
- `0.3` — Launch Point
- `0.4` — Target

### `10045` — TCN / EGI select

- `0.0` — EGI
- `1.0` — TCN

### `10046` — Waypoint from GGW target

Like `10019`, but selects the source from a live unit's current position for
`10036`.

- `0.01` – `0.99` — unit named `"GGWTarget01"`..`"GGWTarget99"` (value × 100 =
  id)

### `10047` — IZLID point/zone

Jester points his IR target designator at the point selected by `10019` (trigger
zone) or `10046` (GGW target). The value scales the lasing duration:

- `value × 60` = seconds (`1.0` = 60s)
- `-1` — lase until told to stop
- `0` — stop immediately

## Iceman (AI Pilot) Commands

- `10080` — set heading (absolute)
- `10081` — set heading (relative)
- `10082` — set speed (absolute)
- `10083` — set speed (relative)
- `10084` — set altitude (absolute)
- `10085` — set altitude (relative)
- `10086` — navigate: fly to steerpoint
- `10087` — navigate: orbit steerpoint
- `10088` — hold current heading/speed/altitude

## Sentinel

- `10099` — `PROXY_last_command_sentinel` (marks the end of the fixed-value
  range; not a usable command).
