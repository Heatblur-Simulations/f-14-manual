# Hydraulics

> 🚧 TODO: Rework to add more imagery. Also fix the notes to use the new F-4 system.

The F-14 has two separate hydraulic systems, the flight hydraulic system and the combined hydraulic
system.

Both systems are driven by hydraulic pumps connected to each engine, the flight hydraulic system
from the right engine and the combined hydraulic system from the left engine. Both systems are
pressurised to around 3,000 psi when operating normally.

Flight control surfaces are supplied by both systems while the combined system also supplies
pressure to secondary systems such as the flaps, landing gear and the refueling probe. This is so
that both systems can drive the control surfaces independently from each other in case of a failure
in the other.

Additionally, the hydraulic systems related to systems not necessary while airborne can be isolated
by a switch next to the landing gear handle. This is so that damage to those systems won’t affect
the combined system pressure and cause fluid loss. The systems that can be isolated are the landing
gear, wheel brakes, anti-skid and nosewheel steering. This switch is mechanically locked to not
isolating these systems by the landing gear handle when it’s in the down position.

If only one of the hydraulic pumps fail it’s possible to pressurize that system from the other pump
via the hydraulic transfer pump. This pump is an omni-directional hydraulically driven pump that can
supply either system from the other and will maintain a pressure between 2,400 and 2,600 psi if the
driving system is at around 3,000 psi. If one system pressure falls below 500 psi the pump will be
secured to prevent pump damage and preserve pressure in the working system. The pump can also be
manually disengaged by the pilot.

In case of failure of both hydraulic pumps the flight hydraulic system can be driven by an
electrical pump, called the emergency flight hydraulic pump. This pump is capable of independently
driving the tail control surfaces, enabling the aircraft to return home and land even without
pressure in either main hydraulic system. The electric pump is automatically enabled if both main
systems drop below 2,100 psi and shut off if either reaches 2,400 psi again. The automatic pump
activation activates the system in the low mode but it can also manually be selected to either low
or high operation. The control surfaces will have a reduced deflection rate if driven by this pump,
more so in low than high.

There is also a hand driven hydraulic pump that can be used to pressurize the refueling probe and
wheel brake accumulator if there’s otherwise no pressure in the combined system. This is mainly for
unpowered ground operation but can be used as a backup in the air.

## Controls and Indicators

![hydraulic](../../img/hydraulic1.png)

The HYD PRESS, hydraulic pressure indicator, contains two gauges indicating COMB, combined, and FLT,
flight system hydraulic pressure in thousands of psi. The scales have markings for the nominal 3,000
psi pressure when the pumps are operating normally.

Below the gauges are flags indicating hydraulic pressure availability to the spoilers SPOIL and the
operation of the EMER FLT, emergency flight hydraulic pump. The HI flag indicates on if the
emergency flight hydraulic pump is operating in high and the LOW if it’s operating in low.

![brakepressure](../../img/brakepressure1.png)

The BRAKE PRESSURE gauge shows available pressure in the brake accumulators. PARK indicating parking
brake pressure and the AUX indicating wheel brake pressure. The green area represents a pressure
from about 2,150 psi to 3,000 psi and the red a pressure below that.

![hydraulictransferpump](../../img/hydraulictransferpump1.png)

The HYD TRANSFER PUMP, hydraulic transfer pump switch is located on its own panel on the pilot’s
right side console. The switch allows for manual shut-off of the pump (SHUTOFF) but is normally in
the NORMAL position allowing the pump to activate automatically if either hydraulic pump fails. The
switch is guarded to the NORMAL position.

The emergency flight hydraulic pump is controlled by a guarded switch on the Master Test Panel. The
guarded position, (AUTO)LOW allows the pump to automatically activate as detailed above and the two
other positions, HIGH and LOW can manually activate those modes when the guard is up.

On the Caution - Advisory Indicator the only relevant caution light is the HYD PRESS light
indicating that either main hydraulic system pressure is below 2,100 psi. It turns off when both
systems are again above 2,400 psi.
