# Landing Gear System & Ground Handling

The F-14 Tomcat has a tricycle landing gear designed to be fully retractable as
well as hardened enough to withstand the rigours of carrier traps. The landing
gear extension and retraction is powered by the combined hydraulic system as
well as having an emergency extension system. The emergency extension system has
a nitrogen bottle that can be used to power a one-shot emergency extension. With
the emergency system triggered, the system needs to be reset by technicians on
the ground to allow further normal retraction.

For additional information on controls and indicators see Landing Gear Control
Panel for controls and Wheels-Flaps Position Indicator for the indicators.

## Nosewheel Steering

The nosewheel steering system on the F-14 can be activated with weight on wheels
by depression of the nosewheel steering button on the Control Stick. The
activation of this system is indicated via the **NWS ENGA** caution light on the
left side of the HUD, see Wheels Warning/Brakes Warnings/ACLS/AP Caution/NWS
Engage Caution/Auto Throttle Caution Lights.

Disengagement of this system occurs automatically with weight off wheels
(take-off), electrical supply failure or lowering of the launch bar. It’s also
possible to deactivate the system by depression of the nosewheel steering
button.

The nosewheel, with the system engaged, is controlled via the rudder pedals.
It’s capable of a deflection of up to 70° meaning that it will turn tightly
enough that the inner wheel will in fact move backwards.

## Wheelbrakes

The wheelbrakes can be applied either via the rudder pedals by pressing on the
upper part of them, rotating them forwards. The other application is via the
parking brake handle located on the Landing Gear Control Panel panel.

The rudder pedals can be used to apply the brakes gradually while the parking
brakes are either on or off.

Normally both systems are supplied from the combined hydraulic system but if
that system becomes depressurized the brake system automatically switches to the
backup accumulators. The Emergency Brake Pressure Indicator shows current
pressure in the emergency accumulators.

If fully charged the auxiliary accumulator allows for about 13 to 14 wheelbrake
applications from the pedals and the parking brake accumulator 3 parking brake
applications minimum. These accumulators can be recharged via the Hydraulic Hand
Pump.

The **BRAKES** warning light on the left side of the HUD indicates either
parking brake applied, antiskid system fail or that the brakes are operating in
the emergency mode (only when the pedals are depressed).

## Antiskid

The antiskid system modulates the wheelbrakes to prevent skidding while on the
ground. When armed in the air the system prevents braking until both main wheels
are on the ground and the wheels have spun up. Also the system is not
operational below 15 knots.

The antiskid system switch also controls the spoiler brake system that deploys
the spoilers as brakes when the throttles are set to **IDLE** while on the
ground.

> 💡 The antiskid should be disabled during taxi as below 15 knots, the system
> may disturb normal braking even though the antiskid feature is not operational
> at those speeds.

The **ANTI SKID SPOILER BK** switch on the Fuel Management Panel panel controls
the system. **OFF** disables the system, **BOTH** enables antiskid and the
spoiler brake system and **SPOILER BK** enables only the spoiler brake system.

## Catapult Launch and Arresting Gear

### Nosegear Catapult System

The nosegear of the F-14 contains the system allowing for catapult assisted
takeoff during carrier based operations.

The three components mounted in or on the nosegear are the nosewheel kneel
functionality, the launch bar and the holdback fitting.

To enable the system the aircraft is kneeled using the **NOSE STRUT** switch on
the Landing Gear Control Panel. This is done by holding the switch to the
**KNEEL** position until downward movement stops.

This drains hydraulic fluid from the shock absorber, compressing the nosegear
strut 14 inches. When compressed this also releases the lock on the launch bar
which can then be lowered manually by the deck crew or by turning the nosegear
more than 10° from center.

> 💡 In DCS, the launch bar is automatically lowered with nosegear kneel.

The aircraft can then be guided onto the catapult and connected to the shuttle,
in DCS via default keybind <kbd>U</kbd>. The holdback bar is currently not
modelled in DCS.

> 💡 Deselection of nosewheel steering should be done before final movement onto
> the shuttle and hookup to avoid misalignment.

The final command to launch the aircraft, after proper procedures, is then to
salute the “shooter” or officer in command of catapult launch, default keybind
<kbd>LShift</kbd> + <kbd>U</kbd> in DCS.

After the catapult stroke, when the launch bar is released from the shuttle,
stored hydraulic energy is released to impart a positive pitch moment to the
aircraft. This also automatically raises the launch bar into its stowed
position.

Indication of the launch bar status is available on the Caution - Advisory
Indicator via the **LAUNCH BAR** advisory light. The advisory light is on with
weight on wheels when the launch bar is not up and locked and turns off if
throttles are advanced to **MIL** to enable a lights out for launch criteria.
With weight off wheels the **LAUNCH BAR** advisory light is on if the nose strut
hasn’t fully extended, launch bar is not up and locked or nosewheel hasn’t
centered correctly. This inhibits nosegear retraction.

The Launch Bar Abort Panel contains the LAUNCH BAR switch used to disengage the
launch bar in case of an aborted launch. This functionality is currently not
implemented in DCS, unhooking the launch bar is currently accomplished by
another depression of the hookup key, default key <kbd>U</kbd>.

### Arresting Gear

The arresting hook located on the underside of the tail of the F-14 is used for
arrested landings during carrier operations.

The system uses hydraulic power from both flight and combined hydraulic systems
and is controlled electrically, thus requiring electrical power as well.

Operation of the system is via the arresting **HOOK** handle on the Arresting
Hook Panel. **UP** raises the arresting hook and **DN**, down, lowers it to 37°
allowing it to catch the wire during a correctly executed carrier “trap”. The
transition light next to the arresting **HOOK** handle illuminates whenever the
arresting hook position does not correspond with handle position.

If on board failures do not allow for normal hook lowering it’s possible to use
a mechanical backup to deploy the hook. To activate the mechanical backup, pull
the handle out and rotate it 90° counterclockwise. This releases the mechanical
up-lock and drain the hydraulic pressure keeping the hook up, thus lowering it.

If electrical power and hydraulic power are restored, it’s then possible to
retract the hook by rotating the handle 90° clockwise and pushing the handle
back in and then setting it in the default **UP** position.

> 💡 Hook position also affects the AoA indexer and approach lights, making them
> flash with gear down if the hook is not also down. This feature can be
> disabled using the **HOOK BYPASS** switch on the Master Light Control Panel.
