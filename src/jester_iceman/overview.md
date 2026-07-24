# Jester & Iceman

> 🚧 Work in Progress

## Jester

> TODO REPLACE ![Jester](../img/jester_jester.jpg)

The **Jester AI** aims to be a functional AI Radar Intercept Officer (RIO) for
the Heatblur DCS F-14, enabling a multi-crew experience in a single-player (per
aircraft) environment.

He is fully integrated into the rear cockpit, controlling nearly all back seat
systems, with a focus on systems not controllable from the pilot seat. He is
also modeled to simulate human limitations—his head position, visual spotting
range, and hand positions are all accounted for. When controlling systems at the
RIO seat, he performs all actions a human RIO would.

To control Jester, a **command wheel** is used for quick access. This wheel is
dynamic based on the selected mode and the current situation. Feedback to the
pilot is given via ICS using a library of recorded audio, simulating a RIO
actually talking. In addition to acknowledging orders, Jester will provide
pertinent information based on the situation.

In multiplayer, if a human RIO disconnects mid-flight, Jester resumes control of
the rear cockpit systems in the configuration left by the human player.

## Iceman

![Pilot](../../img/jester_pilot.jpg)

**Iceman** is a basic autopilot AI and a subset of the Jester system. It is
designed for singleplayer scenarios where a player may switch between the front
and rear seats.

When the player switches to the RIO seat:

- Iceman takes control of heading and altitude.
- The Iceman menu allows setting heading, altitude, and speed—either relative to
  a target or as absolute values.
