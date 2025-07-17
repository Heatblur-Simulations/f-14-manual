# Mission Editor

> 🚧 TODO: Rewrite this section similar to the F-4E manual.

Aircraft-specific settings and waypoints are configured in the **Mission Editor**.

### Aircraft Group Properties

Set options under `Additional Properties for Aircraft` when the group includes F-14s.

### Navigation Target Points

Set most waypoints via the **Navigation Target Points** page:

---

| Option                          | Sets                                           |
| ------------------------------- | ---------------------------------------------- |
| M-61 Burst Mode                 | Max burst length; "Manual" fires until empty   |
| AN/ALE-39 Loadout               | Countermeasure loadout                         |
| Fill LAU-138 With Chaff         | Load LAU-138s with chaff at spawn              |
| INS Reference Alignment Stored  | Whether INS reference is pre-aligned at spawn  |
| TACAN Channel Presel (0 = Auto) | Preselected TACAN channel; 0 = nearest station |
| TACAN Band                      | Preselected band (X or Y)                      |
| ILS Channel Presel              | Preselected ICLS channel                       |
| KY-28 Encryption Key            | Encryption key loaded into KY-28               |
| Laser Code 1st–4th Digit        | Preset code for laser-guided munitions         |

---

## F-14 Waypoints in the Mission Editor

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
