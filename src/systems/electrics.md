# Electrical Power System

> 🚧 TODO: Rework to add more imagery. Also fix the notes to use the new F-4 system.

All main electrical power in the F-14 is generated from the two engine driven AC generators. The
generators connected to the gearboxes on the engines are each capable of generating enough power to
individually drive all aircraft systems.

As for DC power generation the F-14 has two transformer-rectifiers supplying 28 V DC, and again each
one is individually capable of driving all aircraft DC appliances.

The F-14 has an external power receptacle for AC power just aft of the nosegear, capable of driving
aircraft AC and DC (through the transformer-rectifiers). External power is automatically
disconnected from the aircraft power system when one of the internal generators come online.

## Emergency Power

The F-14 has an emergency generator driven by the combined hydraulic system generating a limited
supply of AC and DC power. If the system loses main power the emergency generator takes over supply
of flight critical systems within 1 second.

## Controls and Indicators

![generator](../../img/generator1.jpg)

The controls for the electrical systems are located on the master generator control panel.

The MASTER GEN (1) switches control connection of the main generators to the electrical buses. The
NORM position on the switches connect the individual generators to the buses. The OFF/RESET position
disconnects the generator and also resets any protection circuits that might have cut in because of
the power supply being outside normal limits. The TEST position starts the generator but do not
connect it to the electrical buses making it possible to test the generator without affecting other
aircraft systems. The switch is locked to the on position and needs to be lifted to move it to the
OFF/RESET position from NORM.

The EMERG (2) switch controls the emergency generator. In the NORM position the emergency generator
is automatically connected to the essential buses if the main generators fail. The OFF/RESET
position deactivates the emergency generator and also resets the associated protection circuits if
tripped. The switch is guarded to the NORM position and that guard needs to be opened to move the
switch to OFF/RESET.

Associated caution and advisory lights are located on the pilot Caution - Advisory Indicator. The L
GEN and R GEN lights, when illuminated, indicate that the respective generator is not functioning
correctly. Either because of a fault or because the engine driving the generator not running.

The TRANS/RECT advisory light indicates that only one or none of the transformer-rectifiers are
functioning.

The emergency generator can be tested by selection of EMERG GEN on the MASTER TEST switch on the
Master Test Panel. Completion of the test is indicated by the GO light illuminating. In case of a
fault the NO GO light illuminates.

## Circuit Breakers

The circuit breakers in the F-14 are located on the pilot’s right and left knee panels and behind
the RIO’s seat on his left and right sides. The breakers protect aircraft systems from overcurrent
by popping out and isolating the system drawing too much current. This is indicated by a white line
becoming visible on the breaker as it pops out. The breaker can be reset by pushing it in and it can
also be pulled out manually.

These breakers will be detailed here when implemented in DCS.
