# Environmental Control System

> 🚧 TODO: Rework to add more imagery. Also fix the notes to use the new F-4 system.

The ECS or environmental control system controls and supplies temperature- and pressure-regulated
air to cockpit systems and cooling for electronic equipment and weapons.

The air used is sourced from the engines, one or both, or if needed from the emergency ram air door
on the fuselage inboard of the right glove.

Systems using ECS air in the cockpit are cockpit pressurization and canopy seals, anti-g suit
inflation, aircrew suit ventilation, seat cushion ventilation and windshield anti-ice and defogging.

Other systems using ECS air outside of the cockpit are pressurization of external drop tanks, wing
airbag seals, electronics cooling and cooling of the AN/AWG-9 radar and AIM-54 missiles via an
air/liquid heat exchanger.

## Air Source and Cockpit Air Controls

Air source for the ECS is set using the controls on the Air Conditioning Control Panel.

The L ENG set air source to left engine, R ENG to right engine and BOTH to both engines which is
also the normal position while in use.

RAM and OFF both enable the emergency ram door but OFF turns off pressurization and heating.

During normal operation temperature in the cockpit is controlled using the TEMP switch and
thumbwheel on that same panel. The thumbwheel sets the temperature which is automatic regardless of
airspeed and altitude if the TEMP switch is set to AUTO. If that switch is set to MAN, manual, it
will vary depending on airspeed and altitude.

The CABIN PRESS switch controls the cockpit safety valve, controlling whether the cockpit is
pressurized or not. If set to NORM cockpit pressure is at 8,000 feet up to 23,000 feet and after
that 5 psi higher than the atmosphere outside. DUMP depressurizes the cockpit by opening the cockpit
safety valve.

The RAM AIR switch is used to modulate cockpit air supply temperature when the ram air door is in
use by opening and closing the emergency ram air door. This is as in this mode that air is mixed
directly with hot bleed air from the engines. INCR, increase, opens the ram door, decreasing
temperature and DECR closes the door and increases temperature. Springloaded to center.

> **Note**: Selection of RAM or OFF inhibits gun firing.

Current cabin air pressure altitude can be seen on the Cabin Pressure Altimeter in front of the
pilot control stick.

The CABIN PRESS caution light is present on the RIO Caution-Advisory Panel, indicating less than 5
psi absolute pressure or above 27,000 feet cockpit pressure. On the same panel is also the COOLING
AIR advisory light which indicates overheat in the electronics cooling system, indicative of a
failure in the ECS which might damage the electronics.

The anti-g suit pressurisation can be tested via the G-valve Button for the pilot and G-Valve Button
for the RIO. The airflow through the suit, or seats if no suits are worn, are controlled by the VENT
AIRFLOW thumbwheel on the pilot Oxygen-Vent Airflow Control Panel and RIO Oxygen-Vent Airflow
Control Panel respectively.

## Windshield Anti-Ice and Defogging

Windshield anti-ice and defogging is controlled via the External Environmental Control Panel and
Canopy Defog/Cabin Air Lever.

The WSHLD, windshield, switch on the external environment panel provides hot bleed air on the
outside of the windshield to clear ice and rain on the glass. AIR enables airflow over windshield,
OFF disables it.

The Canopy Defog/Cabin Air Lever (for pilot) and Canopy Defog/Cabin Air Lever (for RIO) sets amount
of air through the canopy air diffusers to be used to defog the canopy. Lever set fully to CANOPY
DEFOG selects all cockpit air to be through the canopy diffusers while lever fully at CABIN AIR
redirects 30% through the canopy diffusers and the rest to the cockpit diffusers.

The WSHLD HOT advisory light on the pilot Caution - Advisory Indicator illuminates when the
windshield is warmer than 300° F (149° C). This automatically closes the valve and stops warm air to
the windshield until cooled down.

## AN/AWG-9 and AIM-54 Cooling

The AN/AWG-9 radar and AIM-54 missiles are liquid cooled via independent liquid/air heat exchangers
cooled by ECS air.

The Liquid Cooling Control Panel controls these cooling systems and should be set to AWG-9 to enable
only the AN/AWG-9 cooler if no AIM-54 Phoenix missiles are carried. If AIM-54 missiles are loaded
AWG-9/AIM-54 should instead be set to enable both systems. OFF turns off both systems and should not
be set with systems in use as they will overheat.

The RIO Caution-Advisory Panel contains advisory lights for these systems. The AWG-9 COND advisory
light indicates overheat in the AN/AWG-9 cooling system, continuing use of the AN/AWG-9 might damage
it. The MSL COND advisory light indicates overheat in the AIM-54 cooling system or operation of the
WCS with AIM-54s loaded and liquid cooling switch not set to AWG-9/AIM-54.

## External ECS Air Supply

For operation of systems requiring cooling on the ground or on deck it’s possible to connect an
external ECS air source to cool them.

The normally used source isn’t able to provide cooling for all systems at the same time though and
thus what is to be cooled needs to be set. This is controlled by the GND CLG switch on the IFF
Antenna Control/Test Panel panel at the RIO right side console. OBC/CABIN provides the external ECS
air to the cabin and all air cooled electronics. This setting disables the AN/AWG-9 transmitter due
to inadequate cooling. AWG-9/AIM-54 provides the external ECS air to the AN/AWG-9 and AIM-54 heat
exchangers and to related electronics. OFF turns off external ECS air supply and is the normal mode
used when the engines are running.

> **Note**: Any setting on the GND CLG other than OFF should not be used when the engines are
> running.

> **Note 2**: For the Heatblur F-14 in DCS the external ECS air supply is connected via the same
> command as the engine starter air.
