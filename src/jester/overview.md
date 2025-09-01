# Jester

> 🚧 TODO: Rewrite to be correct for the current game version. Add a lot more information.

![Jester](./_images/jester.png)

The **Jester AI** aims to be a functional AI Radar Intercept Officer (RIO) for the Heatblur DCS
F-14, enabling a multicrew experience in a single-player (per aircraft) environment.

He is fully integrated into the rear cockpit, controlling nearly all back seat systems, with a focus
on systems not controllable from the pilot seat. He is also modeled to simulate human
limitations—his head position, visual spotting range, and hand positions are all accounted for. When
controlling systems at the RIO seat, he performs all actions a human RIO would.

To control Jester, a **command wheel** is used for quick access. This wheel is dynamic based on the
selected mode and the current situation. Feedback to the pilot is given via ICS using a library of
recorded audio, simulating a RIO actually talking. In addition to acknowledging orders, Jester will
provide pertinent information based on the situation.

In multiplayer, if a human RIO disconnects mid-flight, Jester resumes control of the rear cockpit
systems in the configuration left by the human player.

---

## Functionality

![Menu](./_images/menu.png)

The **Jester menu** is opened by default with the `A` key. Selection of items (1–8) is done using
`CTRL + 1` through `CTRL + 8`. These controls can be remapped under the **Jester** category in the
**F-14 Pilot** DCS keybinds. The menu system is designed to support 8-way hat switch mapping.
Optionally, you can use your viewing angle in the cockpit to select menu petals by holding the
Jester menu key for over 0.5 seconds—this can be toggled in the F-14 options.

- The first press brings up a **contextual menu** based on current aircraft mode and situation.
- A second press opens the **Main Menu**.
- A third press closes the menu.

Examples:

- **Air-to-Air mode (airborne)**: opens _Beyond Visual Range – Radar_ menu.
- **Air-to-Ground mode**: opens _Air-to-Ground – Weapons_ menu.
- **Take-off/Landing**: context-specific menus available.

From these menus, pilots can control RIO systems. Menu contents can change based on prior
selections. In some cases, menu petals act as inputs/keypads for entering data like frequencies or
waypoints.

You can also:

- Set a **waypoint** from an F10 map marker (menu shows time and name).
- Lock targets on the **TID** using options like _closest target_ or _specific azimuth/range_.
- Run a **startup checklist** (see below).
