# Mission Editor

Aircraft-specific settings and waypoints are configured in the **Mission
Editor**.

Aircraft specific options are set up under the Additional Properties for
Aircraft page available when setting up an aircraft group containing F-14s.

The waypoints, apart from waypoint 1-3 and Home Base are set up using the
Navigation Target Points page also available when configuring an aircraft group
containing F-14s.

## Options

| Option                          | Sets                                           |
| ------------------------------- | ---------------------------------------------- |
| M-61 Burst Mode                 | Max burst length; "Manual" fires until empty   |
| AN/ALE-39 Loadout               | Countermeasure loadout                         |
| Fill LAU-138 With Chaff         | Load LAU-138s with chaff at spawn              |
| INS Reference Alignment Stored  | Whether INS reference is pre-aligned at spawn  |
| TACAN Channel Preset (0 = Auto) | Preselected TACAN channel; 0 = nearest station |
| TACAN Band                      | Preselected band (X or Y)                      |
| ILS Channel Preset              | Preselected ICLS channel                       |
| KY-28 Encryption Key            | Encryption key loaded into KY-28               |
| Laser Code 1st–4th Digit        | Preset code for laser-guided munitions         |

## Waypoints Types

As the F-14's navigational system only has three numbered waypoints, most other
waypoints are set using Navigation Target Points.

- **Waypoints 1–3**: Set directly in the mission editor.
- **Home Base**: Set to the landing waypoint.
- **All others**: Set by naming _Navigation Target Points_ as below:

| Waypoint                | Name                      |
| ----------------------- | ------------------------- |
| Fix Point               | `FP`                      |
| Initial Point           | `IP`                      |
| Surface Target          | `ST`                      |
| Defended Point          | `DP`                      |
| Hostile Area            | `HA`                      |
| Datalink Waypoint 1–3   | `DLWP1`, `DLWP2`, `DLWP3` |
| Datalink Surface Target | `DLST`                    |
| Datalink Fixed Point    | `DLFP`                    |
